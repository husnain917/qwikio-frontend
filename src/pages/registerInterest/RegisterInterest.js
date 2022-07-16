import React from 'react';
import Menu from '../../components/Menu/Menu';
import './RegisterInterest.css';
import UseRegisterInterest from './UseRegisterInterest';
import van from '../../image/half-van.png';
import blackArrow from '../../image/black-arrow.png';
import whiteArrow from '../../image/arrow.png';
import backArrow from '../../image/back-arrow.png';
import { CountryDropdown, RegionDropdown, } from 'react-country-region-selector';
export default function RegisterInterest() {
    const [{ mobile, setMobile, access, setAccess, subscribe, setSubscribe, email, setEmail, jobTitle, setJobTitle, companyName, setCompanyName, lastName, setLastName, firstName, setFirstName, path, country, setCountry, region, setRegion, step, setStep, btnHandler, product, model, setModel, vehicles, setVehicles }] = UseRegisterInterest();
    return (
        <div>
            <Menu />
            <div className='main-row'>
                <div className="from-container">
                    <button className="page-heading-container">
                        register interest : {path[2]}
                    </button>
                    {
                        step == 0 ?
                            <p className='question'>Where are you operating?</p>
                            :
                            step == 1 ?
                                <p className='question'>What types of <span className='product-name-transform'>{path[2]}</span>  are you looking for?</p>
                                :
                                step == 2 ?
                                    <p className='question'>How many vehicles are you likely to need in the next 1-3 years?</p>
                                    :
                                    step == 3 &&
                                    <p className='question'>Please provide your contact details to receive the latest news, updates, and product information from Arrival.</p>

                    }
                    {
                        step == 3 ?
                            '' :
                            <p className='options-heading'>Please select one option below</p>
                    }
                    {
                        step == 0 ?
                            <>
                                <div>
                                    <CountryDropdown
                                        value={country}
                                        onChange={(e) => setCountry(e)}
                                        className="drop-down"
                                    />
                                </div>
                                <div>
                                    {
                                        country &&
                                        <RegionDropdown
                                            country={country}
                                            value={region}
                                            className="drop-down"
                                            onChange={(e) => setRegion(e)} />
                                    }
                                </div>
                            </>
                            :
                            step == 1 ?
                                <select value={model} onChange={(e) => setModel(e.target.value)} className='drop-down' name="" id="">
                                    <option selected disabled value="">Select Model</option>
                                    {
                                        product[0]?.models?.map((item) => {
                                            return (
                                                <option value={item?.modelName}>{item?.modelName}</option>
                                            )
                                        })
                                    }
                                </select>
                                :
                                step == 2 ?
                                    <select value={vehicles} onChange={(e) => setVehicles(e.target.value)} className='drop-down' name="" id="">
                                        <option selected disabled value="">Select how much vehicles you need</option>
                                        <option value="1-25">1-25</option>
                                        <option value="25-50">25-50</option>
                                        <option value="50-100">50-100</option>
                                        <option value="100-250">100-250</option>
                                        <option value="250-500">250-500</option>
                                        <option value="500+">500+</option>
                                    </select>
                                    :
                                    step == 3 &&
                                    <div className='register-interest-inputs-container'>
                                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First name*' className='register-interest-details-input' type="text" /><br />
                                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last name*' className='register-interest-details-input' type="text" /><br />
                                        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company name*' className='register-interest-details-input' type="text" /><br />
                                        <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder='Job Title' className='register-interest-details-input' type="text" /><br />
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Business Email*' className='register-interest-details-input' type="text" /><br />
                                        <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Phone*' className='register-interest-details-input' type="text" /><br />
                                        <div className='checkbox-row'><input value={subscribe} onChange={(e) => setSubscribe(e.target.checked)} className='register-interest-details-checkbox' type="checkbox" />
                                            <p className='checkbox-text'>Yes, please send me updates to my email. For more information check Privacy Policy ↗</p>
                                        </div>
                                        <div className='checkbox-row'><input checked={access} value={access} onChange={(e) => setAccess(e.target.checked)} className='register-interest-details-checkbox' type="checkbox" />
                                            <p className='checkbox-text'>
                                                I hereby agree to and accept Privacy Policy ↗ and give permission to access my personal data</p>
                                        </div>
                                    </div>
                    }
                </div>
                <div className="bg-picture-container">
                    <img src={van} alt="" />
                </div>
            </div>
            {
                step > 0 &&
                <div onClick={() => setStep(step - 1)} className='back-btn-container'>
                    <div className='back-btn-text'>BACK</div>
                    <div>
                        <img width={15} height={15} src={backArrow} />
                    </div>
                </div>
            }
            <div onClick={step == 0 ? country && region ? btnHandler : null : step == 1 ? model && btnHandler : step == 2 ? vehicles && btnHandler : step == 3 ? firstName && lastName && companyName && jobTitle && email && mobile && access ? btnHandler : null : null} className={step == 0 ? country && region ? 'active-footer-btn-container' : 'not-active-footer-btn-container' : step == 1 ? model ? 'active-footer-btn-container' : 'not-active-footer-btn-container' : step == 2 ? vehicles ? 'active-footer-btn-container' : 'not-active-footer-btn-container' : step == 3 ? firstName && lastName && companyName && jobTitle && email && mobile && access ? 'active-footer-btn-container' : 'not-active-footer-btn-container' : null}>
                <div className={step == 0 ? country && region ? 'activefooter-btn-text' : 'not-activefooter-btn-text' : step == 1 ? model ? 'activefooter-btn-text' : 'not-activefooter-btn-text' : step == 2 ? vehicles ? 'activefooter-btn-text' : 'not-activefooter-btn-text' : step == 3 ? firstName && lastName && companyName && jobTitle && email && mobile && access ? 'activefooter-btn-text' : 'not-activefooter-btn-text' : null}>
                    {step == 0 ? 'START' : step == 1 ? 'NEXT' : step == 2 ? 'NEXT' : step == 3 ? 'SUBMIT' : null}
                </div>
                <div>
                    <img width={15} height={15} src={step == 0 ? country && region ? whiteArrow : blackArrow : step == 1 ? model ? whiteArrow : blackArrow : step == 2 ? vehicles ? whiteArrow : blackArrow : step == 3 ? firstName && lastName && companyName && jobTitle && email && mobile && access ? whiteArrow : blackArrow : null} alt="" />
                </div>
            </div>
        </div>
    )
}
