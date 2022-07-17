import React from 'react';
import Menu from '../../components/Menu/Menu';
import './News.css';
import whiteArrow from '../../image/arrow.png';
import Footer from '../../components/Footer/Footer';
import UseNews from './UseNews';
import { Link } from "react-router-dom";
export default function News() {
    const [{ newsData }] = UseNews();
    return (
        <div>
            <Menu name='news' />
            <div className='news-page-container'>
                <p className='news-heading'>News</p>
                <p className='updates-heading'>The latest news stroies, business developments and product updates from Qwikio</p>
                <div className="news-container">
                    {/*News */}
                    {
                        newsData?.map((item) => {
                            return (
                                <div className={item?.className}>
                                    <div className='icon-details-container'>
                                        <Link className='link-text' to={`/${item?.title}/${item?.id}`}>
                                            <div className='icon-and-details-row'>
                                                <div className='news-title-container'>
                                                    <p>{item?.title}</p>
                                                </div>
                                                <div><img width={25} height={25} src={whiteArrow} alt="" /></div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}
