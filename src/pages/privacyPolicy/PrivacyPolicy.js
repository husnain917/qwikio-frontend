import React from 'react';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import './PrivacyPolicy.css';
import UsePrivacyPolicy from './UsePrivacyPolicy';
export default function PrivacyPolicy() {
    const [{ stateData, setStateData }] = UsePrivacyPolicy();
    const clickHandler = (n, state) => {
        const data = {
            id: n,
            state: !state,
        }
        const arr = stateData?.map((item) => {
            if (item?.id == n) {
                return data;
            }
            else {
                return item;
            }
        })
        setStateData(arr)
    }
    return (
        <div>
            <Menu />
            <div class="privacy-page-container">
                <div className='about-privacy-of-qwikio'>
                    <h2>About Qwikio Privacy Policy</h2>

                    <p className='about-qwikio-privacy-text'>Qwikio is committed to protecting your privacy and complying with Data Protection Legislation.This Privacy Policy relates to your use of our website www.Qwikio.com, when you contact us by any means using the details available on it and the details which are gathered in connection with services and products offered by Qwikio.</p>

                    <p className='about-qwikio-privacy-text'>Throughout our website we may link to other websites owned and operated by certain trusted third parties.These other third-party websites may also gather information about you in accordance with their own separate privacy policies.For privacy information relating to these other third-party websites, please consult their privacy policies as appropriate.</p>

                    <p className='about-qwikio-privacy-text'>This Privacy Policy explains in detail the types of personal data we may collect about you when you interact with us.It also explains how we’ll store and handle that data and keep it safe.It also informs you of your data protection rights and how you can get in touch with us.</p>

                    <p className='about-qwikio-privacy-text'>We know that there’s a lot of information here, but we want you to be fully informed about your rights, and how Qwikio uses your data.</p>

                    <p className='about-qwikio-privacy-text'>It’s likely that we’ll need to update this Privacy Notice from time to time.We’ll notify you of any significant changes via email, but you’re welcome to come back and check it whenever you wish.</p>

                    <p className='about-qwikio-privacy-text'>While you are using the Qwikio website, Qwikio UK Ltd is the data controller.A controller is a company that decides why and how your information is processed.References to Qwikio mean Qwikio UK Limited and affiliates.Qwikio UK Limited are registered with the ICO under registration number ZA593319.</p>

                </div>
                <div class="privacy-questions-answers-container">
                    <h2>Questions & Answers</h2>

                    <p onClick={() => clickHandler(1, stateData[0]?.state)} className='privacy-questions'>CONTENTS OF THIS PRIVACY POLICY</p>
                    {
                        stateData[0]?.state &&
                        <>
                            <ul><li className="qwikio-question-answer">Explaining the legal basis we rely on</li>
                                <br /> <li className="qwikio-question-answer">When do we collect your personal data?</li>
                                <br />     <li className="qwikio-question-answer">What sort of personal data do we collect?</li>
                                <br /> <li className="qwikio-question-answer">How and why do we use your personal data?</li>
                                <br /><li className="qwikio-question-answer">Personalised direct marketing</li>
                                <br /><li className="qwikio-question-answer">Cookies and other tracking technologies</li>
                                <br /><li className="qwikio-question-answer">How we protect your personal data</li>
                                <br /> <li className="qwikio-question-answer">How long will we keep your personal data?</li>
                                <br /><li className="qwikio-question-answer">Who do we share your personal data with?</li>
                                <br /><li className="qwikio-question-answer">Where your personal data may be processed</li>
                                <br /><li className="qwikio-question-answer">What are your rights over your personal data?</li>
                                <br /><li className="qwikio-question-answer">How can you stop the use of your personal data for direct marketing?</li>
                                <br /><li className="qwikio-question-answer">Contacting the Regulator</li>
                                <br /><li className="qwikio-question-answer">If you live outside the UK</li>
                                <br /><li className="qwikio-question-answer">Any questions?</li>
                            </ul>
                        </>
                    }
                    <p onClick={() => clickHandler(2, stateData[1]?.state)} className='privacy-questions'>EXPLAINING THE LEGAL BASIS WE RELY ON</p>
                    {
                        stateData[1]?.state &&
                        <>
                            <p className="qwikio-question-answer">We collect, use and are responsible for certain personal information about you.When we do so we are regulated under the relevant data protection legislation applicable in your territory.If European Union (EU) or United Kingdom (UK) data protection law applies to the processing of your information, we provide the controls described in this policy so you can exercise your right to request access to, update, remove, and restrict the processing of your information.You also have the right to object to the processing of your information or export your information to another service.</p>

                            <p className="qwikio-question-answer">The legal bases we may rely on include: </p>

                            <ul >
                                <li className="qwikio-question-answer">consent: where you have given us clear consent for us to process your personal information for a specific purpose</li>
                                <br />    <li className="qwikio-question-answer">contract: where our use of your personal information is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract</li>
                                <br />   <li className="qwikio-question-answer">legal obligation: where our use of your personal information is necessary for us to comply with the law (not including contractual obligations)</li>
                                <br />  <li className="qwikio-question-answer">public task: where our use of your personal information is necessary for us to perform a task in the public interest or for our official functions, and the task or function has a clear basis in law</li>
                                <br />  <li className="qwikio-question-answer">legitimate interests: where our use of your personal information is necessary for our legitimate interests or the legitimate interests of a third party (unless there is a good reason to protect your personal information, which overrides our legitimate interests)</li></ul>
                        </>
                    }
                    <p onClick={() => clickHandler(3, stateData[2]?.state)} className='privacy-questions'>WHEN DO WE COLLECT YOUR PERSONAL DATA?</p>
                    {
                        stateData[2]?.state &&
                        <>
                            <ul>
                                <br /> <li className="qwikio-question-answer">When you access our website</li>
                                <br /> <li className="qwikio-question-answer">When you sign up to our mailing list to receive information relating to our products and services</li>
                                <br />    <li className="qwikio-question-answer">When you register with us for a MyQwikio account</li>
                                <br />   <li className="qwikio-question-answer">When you provide details to us as part of the sales process or through the normal course of business in the provision of our services to you under contract</li>
                                <br />  <li className="qwikio-question-answer">When you provide details to us as part of the application process for asset financing</li>
                                <br />   <li className="qwikio-question-answer">When you submit an application for a job role to us or through a third party</li>
                                <br />  <li className="qwikio-question-answer">When we perform background checks on you following to a job offer with us with third parties including former employers, credit reference agencies or other background check agencies</li>
                                <br />   <li className="qwikio-question-answer">When you contact us by any means.This includes via contact details provided or forms made available on the website</li>
                                <br />  <li className="qwikio-question-answer">When you engage with us on social media or post material</li>
                                <br />   <li className="qwikio-question-answer">When you choose to complete any surveys on our website</li>
                                <br />   <li className="qwikio-question-answer">When you choose to participate in our research activities</li>
                                <br />  <li className="qwikio-question-answer">When you provide information and interact with any of the QWIKIO career pages</li>
                                <br />   <li className="qwikio-question-answer">When you attend our sites which usually have CCTV systems operated for the safety of our staff and premises.These systems may record your image during your visit.</li>
                                <br />  <li className="qwikio-question-answer">When you are engaged with us an interested or existing supplier</li></ul>
                        </>
                    }
                    <p onClick={() => clickHandler(4, stateData[3]?.state)} className='privacy-questions'>WHAT SORT OF PERSONAL DATA WE MIGHT COLLECT?</p>
                    {
                        stateData[3]?.state &&
                        <>
                            <br />  <ul >
                                <br />    <li className="qwikio-question-answer">Your name and contact details (this may be company or personal contact information depending on your interaction with us)</li>
                                <br />  <li className="qwikio-question-answer">Details of any feedback you give us by phone, email, post or via social media</li>
                                <br />  <li className="qwikio-question-answer">Your social media username, if you interact with us through those channels, to help us respond to your comments, questions or feedback</li>
                                <br />  <li className="qwikio-question-answer">E-commerce payment details where purchasing items from our website &nbsp; required for facilitating purchase/ reserving/ financing (including lease/loan)</li>
                                <br /> <li className="qwikio-question-answer">Your address and relevant contact details to enable payment and delivery of goods and services</li>
                                <br /> <li className="qwikio-question-answer">CCTV footage if you attend our premises</li>
                                <br />  <li className="qwikio-question-answer">Information related to your device and log information about your usage such as: device type , unique device ID, internet protocol (IP) address used to connect your computer or device to the internet, your log in information, device operating system, version of operating system and app, mobile browser being used and/or time zone setting, an unique device identifier (e.g., your device’s IMEI number, the MAC address of the device’s wireless network interface , or the mobile phone number used by the device) – Automatically collected via  Web and mobile analytics technologies and any actions taken on any of our sites.</li>
                                <br /> <li className="qwikio-question-answer">In addition, if you should be undertaking the recruitment process with us, we may also collect: </li>
                                <br />  <ul className="qwikio-question-answer">
                                    <br />    <li className="qwikio-question-answer">Recruitment information (including copies of right to work documentation, references, interview notes and opinions taken during and following interviews and other information included in a CV or cover letter or as part of the application process)</li>
                                    <br />    <li className="qwikio-question-answer">Employment records (including job titles, work history, working hours, training records and professional memberships)</li><li class="qwikio-site__sc-8judsk-4 iAYRlI">Any test results of any tests, psychometric or other, included in the recruitment process</li>
                                    <br />    <li className="qwikio-question-answer">Date of birth</li>
                                    <br />    <li className="qwikio-question-answer">Gender</li>
                                    <br />    <li className="qwikio-question-answer">National Insurance number</li>
                                    <br />    <li className="qwikio-question-answer">Compensation history</li>
                                    <br />    <li className="qwikio-question-answer">Information necessary to complete pre-employment security checks</li>
                                    <br />    <li className="qwikio-question-answer">Details of your professional qualifications and education history</li>
                                    <br />    <li className="qwikio-question-answer">Contact details of referees</li>
                                </ul></ul>

                            <br /> <p>We may also collect, store and use the following "special categories" of more sensitive personal information: </p>
                            <ul >
                                <li className="qwikio-question-answer">Information about your race or ethnicity, religious beliefs, sexual orientation and political opinions</li>
                                <li className="qwikio-question-answer">Information about your health, including any medical condition, health and sickness records</li>
                                <li className="qwikio-question-answer">Biometric data</li>
                                <li className="qwikio-question-answer">Information about criminal convictions and offences</li></ul>
                        </>
                    }
                    <p onClick={() => clickHandler(5, stateData[4]?.state)} className='privacy-questions'>HOW AND WHY WE USE YOUR PERSONAL DATA?</p>
                    {
                        stateData[4]?.state &&
                        <>

                            <p className="qwikio-question-answer">We want to give you the best possible customer and employee experience.One way to achieve that is to get the richest picture we can of who you are by combining the data we have about you.</p>

                            <p className="qwikio-question-answer">We then use this data to offer you products and services that are most likely to interest you as a possible customer and also for entering into a potential contractual relationship with you.</p>

                            <p className="qwikio-question-answer">The data privacy law allows this as part of our legitimate interest in understanding our customers and providing the highest levels of service.</p>

                            <p className="qwikio-question-answer">Of course, if you wish to change how we use your data, you’ll find details in the ‘What are my rights?’ section below.</p>

                            <p className="qwikio-question-answer">Remember, if you choose not to share your personal data with us, or refuse certain contact permissions, we might not be able to provide some services you’ve asked for.</p>

                            <p className="qwikio-question-answer">Here’s how we’ll use your personal data and why: </p>
                            <ul >
                                <li className="qwikio-question-answer">To send you communications required by law or which are necessary to inform you about our changes to the services we provide you.For example, updates to this Privacy Notice, product recall notices, and legally required information relating to your orders.These service messages will not include any promotional content and do not require prior consent when sent by email or text message.If we do not use your personal data for these purposes, we would be unable to comply with our legal obligations.</li>
                                <br />    <li className="qwikio-question-answer">With your consent, we will use your personal data and preferences to keep you informed by email, web, text and telephone about relevant products and services including events, competitions and so on.Of course, you are free to opt out of hearing from us by any of these channels at any time</li>
                                <br />    <li className="qwikio-question-answer">To build a personalized experience for you in your interactions with us both online and offline and to inform our business decisions.To do this we may combine data captured from across Qwikio, third parties and data from publicly-available lists as we have described in the section <a className='privacylink' href="/cookies#sort-of-data">'What Sort of Personal Data do we collect?'</a>.We’ll do this on the basis of our legitimate business interest.</li>
                                <br />    <li className="qwikio-question-answer">To respond to your queries and complaints.Handling the information you sent enables us to respond.We may also keep a record of these to inform any future communication with us and to demonstrate how we communicated with you throughout.We do this on the basis of our contractual obligations to you, our legal obligations and our legitimate interests in providing you with the best service and understanding how we can improve our service based on your experience.</li>
                                <br />    <li className="qwikio-question-answer">To develop, test and improve the systems, services and products we provide to you.We’ll do this on the basis of our legitimate business interests.</li>
                                <br />    <li className="qwikio-question-answer">We will use your personal information for the purposes of providing our services which have been purchased by you, your employer or a third party.Your personal data will be provided to trusted partners and our affiliates who work on behalf of Qwikio in order to help us provide the service.</li>
                                <br />    <li className="qwikio-question-answer">To comply with our contractual or legal obligations to share data with law enforcement.</li>
                                <br />    <li className="qwikio-question-answer">To send you survey and feedback requests to help improve our services.These messages will not include any promotional content and do not require prior consent when sent by email or text message.We have a legitimate interest to do so as this helps make our products or services more relevant to you</li>
                                <br />    <li className="qwikio-question-answer">To protect our employees, premises and assets from crime, we operate CCTV systems in our sites which record images for the safety and security of our staff, visitors and premises.We do this on the basis of our legitimate business interests.</li>
                                <br />    <li className="qwikio-question-answer">To protect your interests (or someone else's interests) and you are not capable of giving your consent. For example, if you became seriously unwell or had an accident in our premises, we may need to provide a hospital with medical information we are aware of.</li>
                                <br />    <li className="qwikio-question-answer">To make a decision about your recruitment or appointment, determining the terms on which you work for us, assessing qualifications for a particular job or task and ascertaining your fitness to carry out the role.</li>
                                <br />    <li className="qwikio-question-answer">To check if you are legally entitled to work in the UK.</li>
                                <br />    <li className="qwikio-question-answer">To comply with health and safety obligations, including where it is needed to assess your working capacity on health grounds, subject to appropriate confidentiality safeguards.</li>
                                <br />    <li className="qwikio-question-answer">To consider whether we need to provide appropriate adjustments during the recruitment process, for example whether adjustments need to be made during a test or interview if you should have a disability.</li>
                                <br />    <li className="qwikio-question-answer">To ensure meaningful equal opportunity monitoring and reporting.We may use information about your race or national or ethnic origin, religious, philosophical or moral beliefs, or your sexual life or sexual orientation solely for this purpose.</li>
                                <br />    <li className="qwikio-question-answer">To deal with and defend any legal disputes involving you.</li>
                                <br />    <li className="qwikio-question-answer">To improve the safety and reliability of our services.This includes detecting preventing and responding to fraud, security risks and technical issues which could harm Qwikio or our users.</li>
                                <br />    <li className="qwikio-question-answer">We will process supplier data to consider whether to enter into a contract with a supplier or following the placement of a contract with a supplier and to meet its obligations under the contract.</li>
                            </ul>
                        </>
                    }
                    <p onClick={() => clickHandler(6, stateData[5]?.state)} className='privacy-questions'> PERSONALISED DIRECT MARKETING</p>
                    {
                        stateData[5]?.state &&
                        <>
                            <p className="qwikio-question-answer">We want to send you information about products and services that are most relevant to your interests at particular times.</p>

                            <p className="qwikio-question-answer">We will only ask whether you would like us to send you marketing messages when you tick the relevant boxes when you fill in a form or survey indicating your interest in receiving this information.</p>

                            <p className="qwikio-question-answer">To help us form a better, overall understanding of you as a customer, we combine the data that we collect directly from you with data that we obtain from third parties to whom you have given your consent to pass that data onto us.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(7, stateData[6]?.state)} className='privacy-questions'>COOKIES AND OTHER TRACKING TECHNOLOGIES</p>
                    {
                        stateData[6]?.state &&
                        <>
                            <p className="qwikio-question-answer">A cookie is a small text file which is placed onto your device (e.g.computer, smartphone or another electronic device) when you use our website.</p>
                            <p className="qwikio-question-answer">We use cookies on our website.These help us recognise you and your device and store some information about your preferences or past actions.</p>
                            <p className="qwikio-question-answer">For further information on our use of cookies and how to disable them, please see our Cookies Policy.</p>
                            <p className="qwikio-question-answer">We know how much data security matters to you.With this in mind we will treat your data with the utmost care and take all appropriate steps to protect it.</p>
                            <p className="qwikio-question-answer">We have put in place appropriate security measures to prevent your personal information from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.In addition, we limit access to your personal information to those employees, agents, contractors and other third parties who have a business need to know.</p>
                            <p className="qwikio-question-answer">They will only process your personal information on our instructions and they are subject to a duty of confidentiality.</p>
                            <p className="qwikio-question-answer">We have put in place procedures to deal with any suspected data security breach and will notify you and any applicable regulator of a suspected breach where we are legally required to do so.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(8, stateData[7]?.state)} className='privacy-questions'>HOW WE PROTECT YOUR PERSONAL DATA</p>
                    {
                        stateData[7]?.state &&
                        <>
                            <p className="qwikio-question-answer">We know how much data security matters to you. With this in mind we will treat your data with the utmost care and take all appropriate steps to protect it.</p>
                            <p className="qwikio-question-answer">We have put in place appropriate security measures to prevent your personal information from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal information to those employees, agents, contractors and other third parties who have a business need to know.</p>
                            <p className="qwikio-question-answer">They will only process your personal information on our instructions and they are subject to a duty of confidentiality.</p>
                            <p className="qwikio-question-answer">We have put in place procedures to deal with any suspected data security breach and will notify you and any applicable regulator of a suspected breach where we are legally required to do so.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(9, stateData[8]?.state)} className='privacy-questions'> HOW LONG WILL WE KEEP YOUR PERSONAL DATA?</p>
                    {
                        stateData[8]?.state &&
                        <>
                            <p className="qwikio-question-answer">Whenever we collect or process your personal data, we’ll only keep it for as long as is necessary for the purpose for which it was collected.The length of time the data is retained is determined by a number of factors including the purpose for which it was collected and our obligations under other laws.</p>
                            <p className="qwikio-question-answer">If you have unsuccessfully applied for a position with us, we will only retain your personal information for 6 months following an unsuccessful application.This will include retaining information so that we can show, in the event of a legal claim, that we have not discriminated against candidates on prohibited grounds and that we have conducted the recruitment exercise in a fair and transparent way.</p>
                            <p className="qwikio-question-answer">At the end of that retention period, your data will either be deleted completely or anonymised, for example by aggregation with other data so that it can be used in a non-identifiable way for statistical analysis and business planning.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(10, stateData[9]?.state)}  className='privacy-questions'> WHO DO WE SHARE YOUR PERSONAL DATA WITH</p>
                    {
                        stateData[9]?.state &&
                        <>
                            <p className="qwikio-question-answer">We sometimes share your personal data with trusted third parties.</p>
                            <p className="qwikio-question-answer">Here’s the policy we apply to those organisations to keep your data safe and protect your privacy: </p>
                            <ul ><li>We provide only the information they need to perform their specific services.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">They may only use your data for the exact purposes we specify in our contract with them.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">We work closely with them to ensure that your privacy is respected and protected at all times.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">If we stop using their services, any of your data held by them with either be deleted or rendered anonymous.</li></ul>
                            <p className="qwikio-question-answer">Examples of the kind of third parties we work with are: </p>
                            <ul ><li className="qwikio-question-answer">Direct marketing companies who help us manage our electronic communications with you.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">Google/Facebook to show you our content which might interest you while you’re browsing the internet.This is based on either your marketing consent or your acceptance of cookies on our website.See our <a href="/cookies" className='privacylink' target="_blank">Cookies Notice</a> for details</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">Data insight companies to ensure your details are up to date and accurate</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">Recruitment agencies and platforms who assist with recruitment activities</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">Psychometric testing companies who assist with the recruitment process</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">Payment gateway providers and IT companies who support our website and other business systems.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">Operational companies such as delivery couriers</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">Management software to assist with supplier information</li></ul>
                            <p className="qwikio-question-answer">We will only share your data with third parties for their own purposes in very specific circumstances, for example: </p>
                            <ul><li className="qwikio-question-answer">With your consent, given at the time you supply your personal data, we may pass that data to a third party for their direct marketing purposes.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">For fraud management, we may share information about fraudulent or potentially fraudulent activity in our premises or systems.This may include sharing data about individuals with law enforcement bodies.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">We may also be required to disclose your personal data to the police or other enforcement, regulatory or Government body, in your country of origin or elsewhere, upon a valid request to do so.These requests are assessed on a case-by-case basis and take the privacy of our customers into consideration.</li><li class="qwikio-site__sc-8judsk-4 iAYRhR">We may, from time to time, expand, reduce or sell QWIKIO and this may involve the transfer of divisions or the whole business to new owners.If this happens, your personal data will, where relevant, be transferred to the new owner or controlling party, under the terms of this Privacy Notice.</li></ul>
                            <p className="qwikio-question-answer">We currently use the following companies, who will process your personal data as part of their contracts with us: </p>

                            <ul >
                                <br /> <li className="qwikio-question-answer">Google</li>
                                <br /> <li className="qwikio-question-answer">Facebook</li>
                                <br /> <li className="qwikio-question-answer">LinkedIn</li>
                                <br /> <li className="qwikio-question-answer">Mailchimp</li>
                                <br /> <li className="qwikio-question-answer">Odoo</li>
                                <br /> <li className="qwikio-question-answer">Airtable</li>
                                <br /> <li className="qwikio-question-answer">Lever</li>
                                <br /> <li className="qwikio-question-answer">Stripe</li>
                                <br /> <li className="qwikio-question-answer">Instagram</li>
                                <br /> <li className="qwikio-question-answer">Twitter</li>
                                <br /> <li className="qwikio-question-answer">Sprout social</li>
                                <br /> <li className="qwikio-question-answer">Procore</li>
                            </ul>
                        </>
                    }
                    <p onClick={() => clickHandler(11, stateData[10]?.state)} className='privacy-questions'> WHERE YOUR PERSONAL DATA MAY BE PROCESSED</p>
                    {
                        stateData[10]?.state &&
                        <>
                            <p className="qwikio-question-answer">Sometimes we will need to share your personal data with third parties and suppliers outside of the UK and European Economic Area (EEA).The EEA includes all EU Member countries as well as Iceland, Liechtenstein and Norway.We may transfer personal data that we collect from you to third-party data processors in countries that are outside the EEA.</p>

                            <p className="qwikio-question-answer">If we do this, we have procedures in place to ensure your data receives the same protection as if it were being processed inside the EEA.For example, our contracts with third parties stipulate the standards they must follow at all times.If you wish for more information about these contracts, please contact our Legal Department.</p>

                            <p className="qwikio-question-answer">Any transfer of your personal data will follow applicable laws and we will treat the information under the guiding principles of this Privacy Notice.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(12, stateData[11]?.state)} className='privacy-questions'>What are your rights over your personal data?</p>
                    {
                        stateData[11]?.state &&
                        <>
                            <p className="qwikio-question-answer">You have the right to request: </p>
                            <ul >
                                <br />   <li className="qwikio-question-answer">Access to the personal data we hold about you, free of charge in most cases.</li>
                                <br />  <li className="qwikio-question-answer">The correction of your personal data when incorrect, out of date or incomplete.</li>
                                <br />   <li className="qwikio-question-answer">The deletion of the data we hold about you, in specific circumstances; for example, when you withdraw consent or object, and we have no legitimate overriding interest, or once the purpose for which we hold the data has come to an end.</li>
                                <br />   <li className="qwikio-question-answer">A computer file in a common format (CSV or similar) containing the personal data that you have previously provided to us, and the right to have your information transferred to another entity where this is technically possible.</li>
                                <br />   <li className="qwikio-question-answer">Restriction of the use of your personal data, in specific circumstances, generally while we are deciding on an objection you have made.</li>
                                <br />   <li className="qwikio-question-answer">That we stop processing your personal data, in specific circumstances; for example, when you have withdrawn consent, or object for reasons related to your individual circumstances.</li>
                                <br />   <li className="qwikio-question-answer">That we stop using your personal data for direct marketing (either through specific channels, or all channels).</li>
                                <br />   <li className="qwikio-question-answer">That we stop any consent-based processing of your personal data after you withdraw that consent.</li>
                                <br />  <li className="qwikio-question-answer">Object to decisions being taken by automated means which produce legal effects concerning you or similarly significantly affect you.</li></ul>
                            <br />    <p className="qwikio-question-answer">You can contact us to request to exercise these rights at any time by sending an email to privacy @qwikio.com.If we choose not to action your request, we will explain the reasons for our refusal.</p>
                            <p className="qwikio-question-answer">Whenever you have given us your consent to use your personal data, you have the right to change your mind at any time and withdraw that consent.</p>
                            <p className="qwikio-question-answer">In cases where we are processing your personal data on the basis of our legitimate interest, you can ask us to stop for reasons connected to your individual situation.We must then do so unless we believe we have a legitimate overriding reason to continue processing your personal data, such as administration of an extended warranty.</p>

                            <p className="qwikio-question-answer">You have the right to stop the use of your personal data for direct marketing activity through all channels, or selected channels.We must always comply with your request.</p>

                            <p className="qwikio-question-answer">To protect the confidentiality of your information, we will ask you to verify your identity before proceeding with any request you make under this Privacy Notice.</p>
                            <p className="qwikio-question-answer">If you have authorised a third party to submit a request on your behalf, we will ask them to prove they have your permission to act.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(13, stateData[12]?.state)} className='privacy-questions'> HOW CAN YOU STOP THE USE OF YOUR PERSONAL DATA FOR DIRECT MARKETING</p>
                    {
                        stateData[12]?.state &&
                        <>

                            <p className="qwikio-question-answer">There are several ways you can stop direct marketing communications from us: </p>
                            <ul >
                                <li className="qwikio-question-answer">Click the ‘unsubscribe’ link in any email communications that we send you.We will then stop any further emails.</li>
                                <li className="qwikio-question-answer">Write to the Legal team at QWIKIO Ltd, Beaumont House, Avnomore Road, London W14 8TS.</li>
                                <li className="qwikio-question-answer">Send an email to <a className='privacylink' href="mailto:privacy@qwikio.com">privacy @qwikio.com</a>.</li>
                            </ul>

                            <p className="qwikio-question-answer">Please note that you may continue to receive communications for a short period after changing your preferences while our systems are fully updated.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(14, stateData[13]?.state)} className='privacy-questions'>  CONTACTING THE REGULATOR </p>
                    {
                        stateData[13]?.state &&
                        <>
                            <p className="qwikio-question-answer">If you feel that your data has not been handled correctly, or you are unhappy with our response to any requests you have made to us regarding the use of your personal data, you have the right to lodge a complaint with the Information Commissioner’s Office.</p>
                            <p className="qwikio-question-answer">You can contact them by calling 0303 123 1113.</p>
                            <p className="qwikio-question-answer">Or you can go online to www.ico.org.uk/concerns (opens in a new window; please note we can’t be responsible for the content of external websites).</p>
                            <p className="qwikio-question-answer">If you are based outside the UK, you have the right to lodge your complaint with the relevant data protection regulator in your country of residence.Details can be found in the section below.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(15, stateData[14]?.state)} className='privacy-questions'>IF YOU LIVE OUTSIDE THE UK </p>
                    {
                        stateData[14]?.state &&
                        <>
                            <p className="qwikio-question-answer">By placing an order with us, browsing our website, including for analytics and website usage research, and/or agreeing to receive direct marketing electronic communications as described in this Privacy Policy and our Cookies Policy, you expressly consent to the processing of your personal data by us or on behalf of us.Of course, you still have the right to ask us not to process your data in these ways, and if you do so, we will respect your wishes.</p>
                            <p className="qwikio-question-answer">Sometimes we will need to transfer your personal data between countries to enable us to supply the goods or services you have requested.In the ordinary course of business, we may transfer your personal data to third parties located in the UK to your country of residence.You hereby expressly consent to such overseas use, transferring and disclosure of your personal data outside of your country of residence for such purposes.</p>
                            <p className="qwikio-question-answer">We shall endeavour to ensure that reasonable steps are taken to procure that all such third parties outside of your country of residence shall not use your personal data other than for that part of the purposes as set out in this Privacy Policy and to adequately protect the confidentiality and privacy of your personal data.</p>
                            <p className="qwikio-question-answer">If you have any questions, please contact our Data Privacy Team, and we will respond within your local timeframe response requirements.To complain about an alleged breach of this Privacy Policy or our privacy obligations at law, please provide us with as much detail as possible in relation to your complaint.We will take any privacy complaint seriously and any complaint will be assessed with the aim of resolving any issue in a timely and efficient manner.</p>
                        </>
                    }
                    <p onClick={() => clickHandler(16, stateData[15]?.state)} className='privacy-questions'>ANY QUESTIONS?</p>
                    {
                        stateData[15]?.state &&
                        <>
                            <p className="qwikio-question-answer">We hope this Privacy Policy has been helpful in setting out the way we handle your personal data and your rights to control it.
                                If you have any questions that haven’t been covered, please contact our Legal team who will be pleased to help you: </p>
                            <ul >
                                <li className="qwikio-question-answer">Email us at <a className='privacylink' href="mailto:privacy@qwikio.com">privacy @qwikio.com</a></li>
                                <br />     <li className="qwikio-question-answer">Or write to us at For the Attention of the Data Privacy Team, QWIKIO UK Ltd, Beaumont House, Avonmore Road, London W14 8TS.</li></ul>
                            <p className="qwikio-question-answer">This Policy was last updated on the 7th June 2022.</p>
                        </>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
