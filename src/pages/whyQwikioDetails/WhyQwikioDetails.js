import React from 'react';
import './WhyQwikioDetails.css';
import Menu from '../../components/Menu/Menu';
import UseWhyQwikio from '../whyQwikio/UseWhyQwikio';
import { useLocation } from "react-router";
export default function WhyQwikioDetails() {
    const [{ data }] = UseWhyQwikio();
    const location = useLocation();
    const id = location.pathname;
    const path = id?.split('/');
    const filterdArr = data?.filter((item) => {
        if (item?.route == path[2]) {
            return item;
        }
    })
    const dataObj = filterdArr[0];
    console.log(dataObj);
    return (
        <div>
            <Menu name="we're-qwikio" />
            <div className='full-page-black-body-container'>
                <div className='empty-and-content-row'>
                    <div className='empty-container'></div>
                    <div className='content-container'>
                        <div className="top-picture-container"></div>
                        {
                            path[2] === 'why-qwikio-true-sustainability' &&
                            <>
                                <p className='why-qwikio-page-title-heading'>True Sustainability</p>
                                <p className='title-info-text'>A clean, circular, equitable future</p>
                            </>
                        }
                        {
                            dataObj?.title &&
                            <>
                                <p className='why-qwikio-page-title-heading'>{dataObj?.title}</p>
                                {
                                    dataObj?.empoweringCommunities &&
                                    <p className='title-info-text'>{dataObj?.empoweringCommunities}</p>
                                }
                            </>
                        }
                        <div className='text-content-and-empty-container-row'>
                            <div className='empty-content-container'></div>
                            <div className='text-content-body'>
                                {
                                    path[2] === 'why-qwikio-true-sustainability' &&
                                    <>
                                        <p className='simple-text-of-why-qwikio-details'>The world we live in isn’t the one we want: we’re facing a drastic climate and ecological crisis that needs transformative solutions. Road transportation accounts for 10% of global CO₂ emissions, with emissions rising faster than any other sector. This is the time for radical impact.</p>
                                        <p className='simple-text-of-why-qwikio-details'>We created a revolutionary new method of design and production to remove the cost barrier to electrification. For a clean, circular and equitable future, we need true sustainability that’s accountable and transparent.</p>
                                        {/* Clean */}
                                        <p className='inside-content-body-heading'>Clean.</p>
                                        <p className='simple-text-of-why-qwikio-details-of-clean'>We want to lower carbon emissions and reduce air pollution in our cities.</p>
                                        <ul>
                                            <li className='simple-text-of-why-qwikio-details'>Zero
                                                <p>Electrifying commercial vehicles reduce emissions.</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Low impact.
                                                <p>Measuring and minimising environmental impact in our processes.</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Low carbon production.
                                                <p>Using composite materials that remove the need for large footprint processes.</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Net-zero.
                                                <p>Committed to The Climate Pledge to achieve net-zero carbon emissions by 2040.</p>
                                            </li>
                                        </ul>
                                        {/* Circular */}
                                        <p className='inside-content-body-heading'>Circular.</p>
                                        <p className='simple-text-of-why-qwikio-details-of-clean'>We make products designed to last longer – they can be repaired, reused and recycled.</p>
                                        <ul>
                                            <li className='simple-text-of-why-qwikio-details'>Upgradable.
                                                <p>Updating the software and hardware over time means our vehicles last longer.</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Modularity.
                                                <p>Engineering a grid-based architecture ensures components are easily replaceable in vehicles</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Environmental management system.
                                                <p>Aiming for ISO 14001 accreditation for all production sites.</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Zero waste to landfill.
                                                <p>Using only what we need in our Microfactories, with production offcuts recycled into vehicle components.</p>
                                            </li>
                                        </ul>
                                        {/* Equitable */}
                                        <p className='inside-content-body-heading'>Equitable.</p>
                                        <p className='simple-text-of-why-qwikio-details-of-clean'>We empower communities so everyone benefits from green technologies.</p>
                                        <ul>
                                            <li className='simple-text-of-why-qwikio-details'>Accessible.
                                                <p>Designing for the diversity of users makes our vehicles more inclusive.</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Local supply chains.
                                                <p>Providing work for local talent and economic uplift for communities.</p>
                                            </li>
                                            <li className='simple-text-of-why-qwikio-details'>Transparency.
                                                <p>Implementing industry-leading supply chain traceability and code of conduct.</p>
                                            </li>
                                        </ul>
                                    </>
                                }
                                {
                                    dataObj?.desc?.map((item) => {
                                        return (
                                            <>
                                                <p className='inside-content-body-heading'>{item?.heading}</p>
                                                <p className='simple-text-of-why-qwikio-details-of-clean'>{item?.detail}</p>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
