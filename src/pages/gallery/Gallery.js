import React from 'react'
import Menu from '../../components/Menu/Menu';
import './Gallery.css';
import UseGallery from './UseGallery';
import Footer from '../../components/Footer/Footer';
export default function Gallery() {
    const [{ path, btnState, setBtnState, btnsData, modelObj, product, images, btnHandler }] = UseGallery();
    return (
        <div>
            <Menu name={path[1]} />
            <div className='gallery-banner-img-container'>
                <p className='gallery-model-name'>The Qwikio {modelObj?.modelName} {product[0]?.name} Gallery</p>
                <p className='pictures-heading'>Explore interior and exterior</p>
                <img className='banner-image' src={modelObj?.galleryBanner} alt="" />
            </div>
            <div className="btns-row">
                {
                    btnsData?.map((item) => {
                        return (
                            <div onClick={() => btnHandler(item?.id)} className={item?.id == btnState ? "active-btn-container" : "not-active-btn-container"}>
                                {item?.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className='gallery-imgs-container'>
                {
                    images?.map((item) => {
                        return (
                            <img className='gallery-big-img' src={item} alt="" />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
