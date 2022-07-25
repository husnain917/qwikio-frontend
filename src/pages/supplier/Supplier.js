import React from 'react'
import "./supplier.css";
import { FaLessThan } from "react-icons/fa";
export default function Supplier() {
    return (
        <>
            <div className='bg-dark'>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-12 bg-dark text-light closeDiv">
                            <div>
                                <p className='closeTxt'>CLOSE</p>
                            </div>
                            <div className='closeTxt'>
                                <p>
                                    PARTNERS \
                                </p>
                                <p>
                                    BECOME A SUPPLIER
                                </p>
                                <p>
                                    SHARE
                                </p>
                            </div>
                        </div>


                        <div className="col-lg-8 col-md-8 col-sm-12 bg-light px-5 py-4 mb-3 secondContent">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-10 col-sm-12">
                                        <div className='txtDiv'>
                                            <h1>
                                                Become a Supplier
                                            </h1>
                                            <p className='heading'>
                                                Leave your details below and we will be in touch.
                                            </p>
                                        </div>

                                        <div>
                                            <div>
                                                <p>Indicates required fields</p>
                                            </div>
                                            <div>
                                                <form className="row g-3">
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control form-control-lg" placeholder='First Name' />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control form-control-lg" placeholder='Last Name' />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type={'email'} className="form-control form-control-lg" placeholder="Business Email" />
                                                    </div>
                                                    <div className="col-12">
                                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                            <option selected>Job Title</option>
                                                            <option value="1">Owner</option>
                                                            <option value="2">Executive</option>
                                                            <option value="3">Sales</option>
                                                            <option value="4">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check mb-3">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                            <label className="form-check-label" for="flexRadioDefault1">
                                                                COMPANY
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-3">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                            <label className="form-check-label" for="flexRadioDefault2">
                                                                INDIVIDUAL
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <input type={'text'} className="form-control form-control-lg" placeholder="Company Name" />
                                                    </div>
                                                    <div className="col-12">
                                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                            <option selected>Country or territory of operation</option>
                                                            <option value="1">United States</option>
                                                            <option value="2">United Kingdom</option>
                                                            <option value="3">Andorra</option>
                                                            <option value="4">United Arab Emirates</option>
                                                            <option value="5">Afghanistan</option>
                                                            <option value="6">India</option>
                                                            <option value="7">Pakistan</option>
                                                            <option value="8">Iran</option>
                                                            <option value="9">Albania</option>
                                                            <option value="10">Angola</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <input type={'text'} className="form-control form-control-lg" placeholder="Website" />
                                                    </div>
                                                    <div className="col-12">
                                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                            <option selected>Company Type</option>
                                                            <option value="1">Distributer</option>
                                                            <option value="2">Service Provider</option>
                                                            <option value="3">Manufacturer</option>
                                                            <option value="4">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 mb-3">
                                                        <textarea className="form-control" style={{fontSize:'20px'}} rows="5">
                                                            Products and / or services
                                                        </textarea>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label">Attach any materials</label>
                                                        <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            .jpg. .png. .pdf <FaLessThan /> 10MB
                                                        </p>
                                                        <p>
                                                            I hereby agree to and accept Privacy Policy ↗ and give permission to access my personal data
                                                        </p>
                                                        <p>
                                                            This site is protected by reCAPTCHA and the Google Privacy Policy ↗ and Terms of Service ↗ apply.
                                                        </p>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <input className='form-control form-control-lg text-start' disabled type={'submit'} />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
