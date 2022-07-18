import React from 'react';
import Menu from '../../components/Menu/Menu';
import { useLocation } from "react-router";
import UseNews from '../news/UseNews';
import './NewsDetails.css';
import Footer from '../../components/Footer/Footer';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
export default function NewsDetails() {
  const [{ newsData }] = UseNews();
  const location = useLocation();
  const id = location.pathname;
  const path = id?.split('/');
  const filterdNews = newsData?.filter((item) => {
    if (item?.id == path[3]) {
      return item;
    }
  });
  const newsObj = filterdNews[0];
  const shareHandler = () => {
    copy(window.location.href);
    toast.success('LINK COPIED', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
  }
  return (
    <div>
      <Menu name='news' />
      <div className='news-details-page-container'>
        <p className='news-title-news-details-page'>{newsObj?.title}</p>
        <div className='news-releaser-info-container'>
          <div>
            <img src={newsObj?.userImg} className='press-releaser-img' />
          </div>
          <div>
            <p className='releasing-text'>{newsObj?.releaseDate}</p>
            <p className='releasing-text'>{newsObj?.releaser}</p>
          </div>
        </div>
        <img className='news-img' src={newsObj?.img} alt="news-img" />
        <div onClick={shareHandler} className='share-icon-text-container'>Share<img width={16} height={16} src="https://static.thenounproject.com/png/1314306-200.png" alt="share-icon" /></div>
        {
          newsObj?.desc?.map((item) => {
            return (
              <p className='news-desc'>{item}</p>
            )
          })
        }
        <p className='heading-in-news-page'>About Qwikio</p>
        <p className='news-desc'>{newsObj?.about}</p>
        <p className='heading-in-news-page'>Forward Looking Statements</p>
        <p className='news-desc'>{newsObj?.statement}</p>
        <div className='divider-line'></div>
        <div className='inquiry-content-row'>
          <div className='inquiry-text'>FOR PRESS INQUIRIES PLEASE CONTACT:</div>
          <div className='inquiry-text'>PR@QWIKIO.COM</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
