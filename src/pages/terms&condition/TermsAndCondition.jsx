import React from "react";
import "./TermsAndCondition.css";
import UseTermsAndCondition from "./UseTermsAndCondition";
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
export default function TermsAndCondition() {
  const [{ stateData, setStateData }] = UseTermsAndCondition();
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
    <>
      <div>
        <Menu />
        <h2 className='terms-main-heading'>Terms & Conditions</h2>
        <div class="terms-page-container">
          <div class="terms-questions-answers-container">
            <p onClick={() => clickHandler(1, stateData[0]?.state)} className='terms-questions'>WEBSITE TERMS OF USE</p>
            {
              stateData[0]?.state &&
              <div className="qwikio-question-answer">
                <p>
                  Access to this website, www.qwikio.com (the "Site") is provided only
                  in accordance with these Website Terms of Use (the “Terms”).
                </p>
                <p>These Terms were last updated on 12 May 2022.</p>
                <h2 className="terms-heading">Please read these terms carefully</h2>
                <p>
                  Access to and use of the Site is subject to you accepting and
                  agreeing to comply with these Terms and our Acceptable Use Policy.
                  You are also responsible for ensuring that all persons who access
                  our Site through your internet connection are aware of these Terms
                  and other applicable notices, and that they comply with them. If you
                  are accessing our Site on behalf of an organisation, an authorised
                  representative of that organisation must agree to these terms.
                </p>{" "}
                <h2>Who we are and how to contact us</h2>
                <p>
                  This Site is owned and operated by Qwikio UK Limited. When we speak
                  of “Qwikio”, “we”, “us” and “our” in these Terms, we mean Qwikio UK
                  Limited and its affiliates. Qwikio is registered in England and
                  Wales under company number 09475811. Our registered office is at
                  Beaumont House, Kensington Village, London, W14 8TS. You can contact
                  us about any matters relating to our Site at info@qwikio.com
                </p>
              </div>
            }
            <p onClick={() => clickHandler(2, stateData[1]?.state)} className='privacy-questions'> THERE ARE OTHER TERMS THAT MAY APPLY TO YOU</p>
            {
              stateData[1]?.state &&
              <div className="qwikio-question-answer">
                <p>
                  These terms of use refer to the following additional terms, which
                  also apply to your use of our Site:
                </p>
                <ul class="qwikio-site">
                  <li class="qwikio-site">
                    Our Privacy Policy, which sets out how we may collect and use your
                    personal information.
                  </li>
                  <br />{" "}
                  <li class="qwikio-site">
                    Our Cookie Policy, which sets out information about the cookies on
                    our Site
                  </li>
                  <br />{" "}
                  <li class="qwikio-site">
                    Our Acceptable Use Policy, which sets out the permitted uses and
                    prohibited uses of our Site. When using our Site, you must comply
                    with this Acceptable Use Policy.
                  </li>
                  <br />{" "}
                  <li class="qwikio-site">
                    If you place a vehicle order or purchase additional services via
                    our Site, separate terms may apply. For example, you will be
                    required to enter into a separate contract with us to reserve
                    and/or purchase a vehicle.
                  </li>
                  <br />{" "}
                  <li class="qwikio-site">
                    Vehicle configurator webpages: If you are using the vehicle
                    configurator tool via our Site, the following Terms also apply:
                  </li>
                  <br />{" "}
                  <li class="qwikio-site">
                    No representation, warranty or promise: The information provided
                    on our vehicle configurator webpages is based on pre-production
                    vehicles (including all computer-generated images provided). The
                    design, technical specifications and available options in the
                    configured vehicle are subject to change. Qwikio makes no
                    representation, warranty or promise of any kind in respect of the
                    detail and information provided on the vehicle configurator
                    webpages. Any reliance placed on the information provided on the
                    vehicle configurator webpages is strictly at one’s own risk.
                  </li>
                  <br />{" "}
                  <li class="qwikio-site">
                    Battery estimate: Target battery capacity range estimations are
                    based on Qwikio's computer engineering simulations and the
                    Worldwide Harmonised Light Vehicle Test Procedure ("WLTP") drive
                    cycle methodology. These simulated battery capacity ranges are to
                    be used as an estimate and guide only and are based on L500
                    Models. Battery capacity range figures will differ depending on
                    vehicle length, height, weight and specification. More range data
                    will be available by model, variant and gross vehicle weight
                    nearer launch. Actual battery capacity range varies with
                    conditions such as external elements, driving behaviours, vehicle
                    maintenance, lithium-ion battery age and state of battery health.
                  </li>
                  <br />{" "}
                  <li class="qwikio-site">
                    Vehicle driver licenses:: Any driver licence categories stated are
                    based on the UK regulations in force at the time of publication
                    and are intended as a guideline only. These regulations may be
                    subject to change, may require additional requirements to be met
                    by licence holders and may differ outside of the UK. It is the
                    customer’s responsibility to ensure that the vehicle operator
                    holds the correct licence for the vehicle size and weight and the
                    jurisdiction that they will be operating it in.
                  </li>
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(3, stateData[2]?.state)} className='privacy-questions'>WE MAY MAKE CHANGES TO THESE TERMS</p>
            {
              stateData[2]?.state &&
              <>
                <p className="qwikio-question-answer">
                  We reserve the right to amend these Terms from time to time. Please
                  check these Terms before using our Site to ensure you understand the
                  terms that apply to your use.
                </p>
              </>
            }
            <p onClick={() => clickHandler(4, stateData[3]?.state)} className='privacy-questions'> WE MAY CHANGE, SUSPEND OR WITHDRAW OUR SITE</p>
            {
              stateData[3]?.state &&
              <div className="qwikio-question-answer">

                <p>
                  Our Site is made available as-is and free of charge. We do not
                  guarantee that our Site, or any content on it, will always be
                  available or be uninterrupted. We may update, suspend or withdraw or
                  restrict the availability of all or any part of our Site (and
                  services accessed via our Site) for business and operational
                  reasons. We will try to give you reasonable notice of any suspension
                  or withdrawal.
                </p>
                <p>
                  We then use this data to offer you products and services that are
                  most likely to interest you as a possible customer and also for
                  entering into a potential contractual relationship with you.
                </p>
                <p>
                  The data privacy law allows this as part of our legitimate interest
                  in understanding our customers and providing the highest levels of
                  service.
                </p>
              </div>
            }
            <p onClick={() => clickHandler(5, stateData[4]?.state)} className='privacy-questions'>HOW YOU MAY USE MATERIAL ON OUR SITE</p>
            {
              stateData[4]?.state &&
              <div className="qwikio-question-answer" >
                <ul >
                  <br />{" "}
                  <li >
                    We are the owner or the licensee of all copyright, trade mark and
                    other intellectual property rights in our Site, and in the
                    material published on it. Those materials and works are protected
                    by copyright laws and treaties around the world. All such rights
                    are reserved.
                  </li>
                  <br />{" "}
                  <li >
                    You may print off one copy, and may download extracts, of any
                    page(s) from our Site for your personal use and you may draw the
                    attention of others within your organisation to content posted on
                    our Site.
                  </li>
                  <br />{" "}
                  <li >
                    You must not modify the paper or digital copies of any materials
                    you have printed off or downloaded in any way, and you must not
                    use any illustrations, photographs, video or audio sequences or
                    any graphics separately from any accompanying text.
                  </li>
                  <br />{" "}
                  <li >
                    Our status (and that of any identified contributors) as the
                    authors of content on our Site must always be acknowledged.
                  </li>
                  <br />{" "}
                  <li >
                    You must not use or reproduce any part of the content on our Site
                    for commercial purposes without obtaining a licence to do so from
                    us or our licensors.
                  </li>
                  <br />{" "}
                  <li>
                    If you print off, copy or download any part of our Site in breach
                    of these Terms, your right to use our Site will cease immediately
                    and you must, at our option, return or destroy any copies of the
                    materials you have made.
                  </li>
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(6, stateData[5]?.state)} className='privacy-questions'>DO NOT RELY ON INFORMATION ON OUR SITE</p>
            {
              stateData[5]?.state &&
              <div className="qwikio-question-answer">
                <ul>
                  <li>
                    The content on our Site is provided for general information only.
                    It is not intended to amount to advice on which you should rely.
                  </li>
                  <br />
                  <li>
                    Although we make reasonable efforts to update the information on
                    our Site, we make no representations, warranties or guarantees,
                    whether express or implied, that the content on our Site is
                    accurate, complete or up to date.
                  </li>{" "}
                  <br />
                  <li>
                    Where our Site contains links to other sites and resources
                    provided by third parties, these links are provided for your
                    information only. Such links should not be interpreted as approval
                    by us of those linked websites or information you may obtain from
                    them. We have no control over the contents of those sites or
                    resources.
                  </li>
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(7, stateData[6]?.state)} className='privacy-questions'>YOU MUST KEEP YOUR ACCOUNT DETAILS SAFE</p>
            {
              stateData[6]?.state &&
              <div className="qwikio-question-answer">
                <ul>
                  <li>
                    If you choose, or you are provided with, a user identification
                    code, password or any other piece of information as part of our
                    user security procedures, you must treat such information as
                    confidential. You must not disclose it to any third party.
                  </li>{" "}
                  <br />
                  <li>
                    We have the right to disable any user identification code or
                    password, whether chosen by you or allocated by us, at any time,
                    if in our reasonable opinion you have failed to comply with any of
                    the provisions of these Terms of use.
                  </li>{" "}
                  <br />
                  <li>
                    If you know or suspect that anyone other than you knows your user
                    identification code or password, you must promptly notify us
                    info@qwikio.com.
                  </li>
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(8, stateData[7]?.state)} className='privacy-questions'>USER-GENERATED CONTENT IS NOT APPROVED BY QWIKIO</p>
            {
              stateData[7]?.state &&
              <>
                <p className="qwikio-question-answer">
                  Where our Site includes information and materials uploaded by other
                  users of the Site (for example, if we facilitate bulletin boards or
                  user reviews), any information and materials uploaded by others have
                  not been verified or approved by Qwikio. The views expressed by
                  other users on our Site do not represent Qwikio’s views or values.
                </p>
              </>
            }
            <p onClick={() => clickHandler(9, stateData[8]?.state)} className='privacy-questions'>HOW TO COMPLAIN ABOUT CONTENT UPLOADED BY OTHER</p>
            {
              stateData[8]?.state &&
              <>
                <p className="qwikio-question-answer">
                  If you wish to complain about content uploaded by other users,
                  please contact us info@qwikio.com
                </p>
              </>
            }
            <p onClick={() => clickHandler(10, stateData[9]?.state)} className='privacy-questions'>QWIKIO LIABILITY TO YOU</p>
            {
              stateData[9]?.state &&
              <div className="qwikio-question-answer">
                <ul>
                  <li>
                    Whether you are a consumer or a business / organisation user: We
                    do not exclude or limit in any way our liability to you where it
                    would be unlawful to do so. This includes liability for death or
                    personal injury caused by our negligence or the negligence of our
                    employees, agents or subcontractors and for fraud or fraudulent
                    misrepresentation.
                  </li>{" "}
                  <br />
                  <li>
                    We exclude all implied conditions, warranties, representations or
                    other terms that may apply to our Site or any content on it;
                  </li>{" "}
                  <br />
                  <li>
                    Our Site is provided ‘as-is’ and we will not be liable to you for
                    any loss or damage, whether in contract, tort (including
                    negligence), breach of statutory duty, or otherwise, even if
                    foreseeable, arising under or in connection with: (a) use of, or
                    inability to use, our Site; or (b) use of or reliance on any
                    content displayed on our Site;
                  </li>{" "}
                  <br />
                  <li>
                    In particular, we will not be liable for loss of profits, sales,
                    business, or revenue, business interruption; loss of anticipated
                    savings; loss of business opportunity, goodwill or reputation; or
                    any indirect or consequential loss or damage;
                  </li>{" "}
                  <br />
                  <li>
                    Please note that our Site is provided as-is for your personal use
                    only. You agree not to use our Site for any commercial or business
                    purposes, and we have no liability to you for any loss of profit,
                    loss of business, business interruption, or loss of business
                    opportunity;
                  </li>{" "}
                  <br />
                  <li>
                    If defective digital content that we have supplied damages a
                    device or digital content belonging to you and this is caused by
                    our failure to use reasonable care and skill, we will either
                    repair the damage or pay you compensation. However, we will not be
                    liable for damage that you could have avoided by following our
                    advice to apply an update offered to you free of charge or for
                    damage that was caused by you failing to correctly follow
                    installation instructions or to have in place the minimum system
                    requirements advised by us.
                  </li>{" "}
                  <br />
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(11, stateData[10]?.state)} className='privacy-questions'>HOW WE MAY USE YOUR PERSONAL INFORMATION</p>
            {
              stateData[10]?.state &&
              <>
                <p className="qwikio-question-answer">
                  We will only use your personal information as set out in our Privacy
                  Policy.
                </p>
              </>
            }
            <p onClick={() => clickHandler(12, stateData[11]?.state)} className='privacy-questions'>UPLOADING CONTENT OR MATERIAL TO OUR SITE</p>
            {
              stateData[11]?.state &&
              <div className="qwikio-question-answer">
                <ul>
                  <li >
                    Whenever you make use of a feature that allows you to (i) upload
                    information or content to, or store your information or content
                    on, our Site; or (ii) share your content with, or otherwise
                    contact us, or any other user via, our Site, you must comply with
                    the standards set out in our Acceptable Use Policy (our
                    “Standards”). You are solely responsible for securing and backing
                    up your content and any information you choose to store on our
                    Site .
                  </li>{" "}
                  <br />
                  <li >
                    You agree and warrant that any contribution / upload by you will
                    comply with those Standards. You will be liable to us and
                    indemnify us against any breach of this warranty. This means you
                    will be responsible for any loss or damage we suffer as a result
                    of your breach of warranty.
                  </li>{" "}
                  <br />
                  <li >
                    Any content you upload to our Site will be considered
                    non-confidential and non-proprietary. You retain all of your
                    ownership rights in your content, but you are required to grant
                    Qwikio the following licence:
                  </li>{" "}
                  <br />
                  <li>
                    a worldwide, non-exclusive, royalty-free, transferable licence to
                    use, store, reproduce, distribute, prepare derivative works of,
                    display, and perform that user-generated content in connection
                    with the service provided by the Site and across different media
                    including to promote the Site or the service forever; and
                  </li>{" "}
                  <br />
                  <li>
                    a worldwide, non-exclusive, royalty-free, transferable licence for
                    other users, partners or advertisers to use the content for their
                    purposes forever.
                  </li>{" "}
                  <br />
                  <li>
                    We also have the right to disclose your identity to any third
                    party who is claiming that any content posted or uploaded by you
                    to our Site constitutes a violation of their intellectual property
                    rights, or of their right to privacy.
                  </li>{" "}
                  <br />
                  <li>
                    We have the right to remove any content you add or upload to our
                    Site if, in our opinion, it does not comply with the Standards set
                    out in our Acceptable Use Policy.
                  </li>
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(13, stateData[12]?.state)} className='privacy-questions'>WE ARE NOT RESPONSIBLE FOR VIRUSES AND YOU MUSH NOT</p>
            {
              stateData[12]?.state &&
              <div className="qwikio-question-answer">

                <ul>
                  <li>
                    We do not guarantee that our Site will be secure or free from bugs
                    or viruses.
                  </li>{" "}
                  <br />
                  <li>
                    You are responsible for configuring your information technology,
                    computer programmes and platform to access our Site. You should
                    use your own virus protection software.
                  </li>{" "}
                  <br />
                  <li>
                    You must not misuse our Site by knowingly introducing viruses,
                    trojans, worms, logic bombs or other material that is malicious or
                    technologically harmful. You must not attempt to gain unauthorised
                    access to our Site, the server on which our Site is stored or any
                    server, computer or database connected to our Site. You must not
                    attack our Site via a denial-of-service attack or a distributed
                    denial-of service attack. By breaching this provision, you would
                    commit a criminal offence under the Computer Misuse Act 1990. We
                    will report any such breach to the relevant law enforcement
                    authorities and we will co-operate with those authorities by
                    disclosing your identity to them. In the event of such a breach,
                    your right to use our Site will cease immediately. Rules about
                    linking to our Site
                  </li>{" "}
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(14, stateData[13]?.state)} className='privacy-questions'>RULES ABOUT LINKING TO OUR SITE</p>
            {
              stateData[13]?.state &&
              <div className="qwikio-question-answer">
                <ul>
                  <li>
                    You may link to our home page, provided you do so in a way that is
                    fair and legal and does not damage Qwikio’s reputation or take
                    advantage of it. You must not establish a link in such a way as to
                    suggest any form of association, approval or endorsement on
                    Qwikio’s part where none exists.
                  </li>{" "}
                  <br />
                  <li>
                    You must not establish a link to our Site in any website that is
                    not owned by you.
                  </li>{" "}
                  <br />
                  <li>
                    Our Site must not be framed on any other site, nor may you create
                    a link to any part of our Site other than the home page.
                  </li>{" "}
                  <br />
                  <li>
                    We reserve the right to withdraw linking permission without
                    notice.
                  </li>{" "}
                  <br />
                  <li>
                    The website in which you are linking must comply in all respects
                    with the Standards set out in our Acceptable Use Policy.
                  </li>{" "}
                  <br />
                  <li>
                    If you wish to link to, or make any use of content on our Site
                    other than that set out above, please contact info@qwikio.com.
                  </li>{" "}
                  <br />
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(15, stateData[14]?.state)} className='privacy-questions'>WE MAY TRANSFER THIS AGREEMENT TO SOMEONE ELSE</p>
            {
              stateData[14]?.state &&
              <>
                <p className="qwikio-question-answer">
                  We may transfer the operation of the Site and our rights and
                  obligations under these Terms to another organisation (including
                  outside Qwikio's group).
                </p>
              </>
            }
            <p onClick={() => clickHandler(16, stateData[15]?.state)} className='privacy-questions'>WHICH COUNTRY'S LAWS APPLY TO ANY DISPUTES?</p>
            {
              stateData[15]?.state &&
              <>
                <p className="qwikio-question-answer">
                  These terms of use, their subject matter and their formation (and
                  any non-contractual disputes or claims) are governed by English law.
                  We both agree to the exclusive jurisdiction of the courts of England
                  and Wales except that if you are consumer user and a resident of
                  Northern Ireland you may also bring proceedings in Northern Ireland,
                  and if you are a consumer user and a resident of Scotland, you may
                  also bring proceedings in Scotland.
                </p>

              </>
            }
            <p onClick={() => clickHandler(17, stateData[16]?.state)} className='privacy-questions'>ACCEPTABLE USE POLICY</p>
            {
              stateData[16]?.state &&
              <>
                <p className="qwikio-question-answer">
                  This Acceptable Use Policy sets out the content standards that apply
                  when you upload any information or other content to www.qwikio.com
                  (our “Site”), make contact with Qwikio and other users on our Site,
                  link to our Site, or interact with our Site in any other way.
                </p>
              </>
            }
            <p onClick={() => clickHandler(18, stateData[17]?.state)} className='privacy-questions'>PROHIBITED USES</p>
            {
              stateData[17]?.state &&
              <div className="qwikio-question-answer">
                <p >
                  You may use our site only for lawful purposes. You may not use our site:
                  <ul>
                    <li>in any way that breaches any applicable local, national or international law or regulation;</li>
                    <li>in any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect;</li>
                    <li>for the purpose of harming or attempting to harm minors in any way;</li>
                    <li>to bully, insult, intimidate or humiliate any person;</li>
                    <li>to send, knowingly receive, upload, download, use or re-use any material which does not comply with this Policy;</li>
                    <li>to transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam);</li>
                    <li>to knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
                    You also agree:
                    <li>not to reproduce, duplicate, copy or re-sell any part of our Site in contravention of the provisions of our Site terms of use;</li>
                    <li>not to access without authority, interfere with, damage or disrupt:
                      <ul>
                        <li>any part of our Site;</li>
                        <li>any equipment or network on which our Site is stored;</li>
                        <li>any software used in the provision of our Site; or</li>
                        <li>any equipment or network or software owned or used by any third party.</li>
                      </ul>
                    </li>
                  </ul>
                </p>
              </div>
            }
            <p onClick={() => clickHandler(19, stateData[18]?.state)} className='privacy-questions'>STANDARDS</p>
            {
              stateData[18]?.state &&
              <div className="qwikio-question-answer">
                <p>These content standards (the “Standards”) apply to any and all material which you contribute to our Site (a “Contribution”), and to any interactive services associated with it. The Standards must be complied with in spirit as well as to the letter. The Standards apply to each part of any Contribution as well as to its whole. Arrival will determine, in its discretion, whether a Contribution breaches the Standards.</p>
                <p>A Contribution must:</p>
                <ul>
                  <li>be accurate (where it states facts) and genuinely held (where it states opinions);</li>
                  <li>comply with the law applicable in England and Wales and in any country from which it is posted;</li>
                </ul>
                <p>A Contribution must not:</p>
                <ul>
                  <li>be defamatory of, or likely to deceive, any person;</li>
                  <li>be obscene, offensive, hateful, inflammatory, threatening or likely to harass, upset, embarrass, alarm or annoy any other person;</li>
                  <li>bully, insult, intimidate, humiliate, promote sexually explicit material, include child sexual abuse material;</li>
                  <li>promote illegal content or activity, or violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;</li>
                  <li>infringe any copyright, database right, trade mark or other intellectual property right of any other person;</li>
                  <li>breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence;</li>
                  <li>be in contempt of court;</li>
                  <li>be threatening, abuse or invade another`s privacy, or cause annoyance, inconvenience or needless anxiety;</li>
                  <li>impersonate any person or misrepresent your identity or affiliation with any person;</li>
                  <li>advocate, promote, incite any party to commit, or assist any unlawful or criminal act such as (by way of example only) copyright infringement or computer misuse,</li>
                  <li>contain a statement which you know or believe, or have reasonable grounds for believing, that members of the public to whom the statement is, or is to be, published are likely to understand as a direct or indirect encouragement or other inducement to the commission, preparation or instigation of acts of terrorism;</li>
                  <li>contain any advertising or promote any services or web links to other sites.</li>
                </ul>
              </div>
            }
            <p onClick={() => clickHandler(20, stateData[19]?.state)} className='privacy-questions'>BREACH OF THIS POLICY</p>
            {
              stateData[19]?.state &&
              <div className="qwikio-question-answer">
                <p>When we consider that a breach of this Acceptable Use Policy has occurred, we may take such action as we deem appropriate. Failure to comply with this Acceptable Use Policy constitutes a material breach of our Site terms of use, upon which you are permitted to use our Site, and may result in our taking all or any of the following actions:</p>
                <ul>
                  <li>immediate, temporary or permanent withdrawal of your right to use our Site;</li>
                  <li>immediate, temporary or permanent removal of any Contribution uploaded by you to our Site;</li>
                  <li>issue a warning to you;</li>
                  <li>legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach;</li>
                  <li>further legal action against you; and</li>
                  <li>disclosure of such information to law enforcement authorities as we reasonably feel is necessary or as required by law.</li>
                </ul>
                <p>We exclude Arrival’s liability for all lawful action we may take in response to breaches of this Acceptable Use Policy. The actions we may take are not limited to those described above, and we may take any other action we reasonably deem appropriate.</p>
              </div>
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
