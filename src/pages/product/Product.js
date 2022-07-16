import React from 'react';
import './Product.css';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import arrow from '../../image/arrow.png';
import UseProduct from './UseProduct';
export default function Product() {
    const [{ modelObj, path, moreProducts }] = UseProduct();
    return (
        <div className='full-page-container'>
            <Menu name={path[1]} />
            <div className={modelObj?.className == 'q-pod-bus' ? 'product-vehicle-container' : modelObj?.className}>
                <div className='name-desc-container'>
                    <div className='product-vehcile-name-container'>
                        <p>{modelObj?.modelName}</p>
                    </div>
                    <div className='product-desc-container'>
                        <p>{modelObj?.desc}</p>
                        <Link className='link-text' to={`/register-interest/${path[1]}`}><button className='register-btn'>REGISTER INTEREST</button></Link>
                    </div>
                </div>
            </div>
            <div className="body-container">
                <div className="boxes-container">
                    <div className='gallery-and-signup-boxes-row'>
                        <Link className='link-text' to={`/${path[1]}/${modelObj.className}/gallery/${modelObj?.id}`}>
                            <div className="gallery-box-container">
                                <p className='product-name'>{modelObj?.modelName} BUS GALLERY</p>
                                <p className='gallery-desc'>DISCOVER THE INTERIOR AND EXTERIOR OF QWIKIO {modelObj?.modelName} BUS</p>
                                <div className="box-bottom-row">
                                    <div>
                                        <img className='small-img' src={modelObj?.galleryBtnImg} alt="" />
                                    </div>
                                    <div className='arrow-container'>
                                        <img width={16} height={16} src={arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className='link-text' to={`/subscribe`}>
                            <div className="signup-box-container">
                                <p className='product-name'>SIGN UP</p>
                                <p className='signup-desc'>BE THE FIRST TO RECIEVE THE LATEST NEWS FROM QWIKIO</p>
                                <div className="box-bottom-row">
                                    <div></div>
                                    <div className='arrow-container'>
                                        <img width={16} height={16} src={arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={`${modelObj?.className}-feature-picture-container`}>
                    <div className='name-details-container'>
                        <div className='heading-container'>
                            <p>Features</p>
                        </div>
                        <div className='desc-of-heading-container'>
                            <p>Providing a better experience</p>
                        </div>
                    </div>
                </div>
                <div className={`${modelObj?.className}-accessibility-picture-container`}>
                    <div className='name-details-container'>
                        <div className='heading-container'>
                            <p>Accessibility</p>
                        </div>
                        <div className='desc-of-heading-container'>
                            <p>A Bus designed for everyone</p>
                        </div>
                    </div>
                </div>
                <p className='more-products-heading'>More Qwikio Products</p>
                <div className="boxes-container">
                    <div className='more-products-row'>
                        {
                            moreProducts?.map((item) => {
                                return (
                                    <div className="product-box-container">
                                        <p className='product-name'>{item?.name?.toUpperCase()}</p>
                                        <p className='product-desc-none'>DISCOVER THE INTERIOR AND EXTERIOR OF QWIKIO BUS</p>
                                        <div className="box-bottom-row">
                                            <div>
                                                <img className='small-img' src={item?.productImg} alt="" />
                                            </div>
                                            <div className='arrow-container'>
                                                <img width={16} height={16} src={arrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
