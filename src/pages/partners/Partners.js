import React from 'react'
import "./partners.css";
import { FaLessThan } from "react-icons/fa";
export default function Partners() {
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
                  BECOME A PARTNER
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
                        We Welcome proposals on all subjects
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
                        <div className="mb-3">
                          <label className="form-label">Email address</label>
                          <input type="email" className="form-control form-control-lg" placeholder="Email address" />
                        </div>
                        <div className="mb-3">
                          <textarea className="form-control textAreaText" rows="5">
                            I would like to perpose...
                          </textarea>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Attach any materials</label>
                          <input className="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
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
