import React from 'react';
import Menu from '../../components/Menu/Menu';
import './Subscribe.css';
import blackArrow from '../../image/black-arrow.png';
import whiteArrow from '../../image/arrow.png';
import Footer from '../../components/Footer/Footer';
import { toast } from 'react-toastify';
export default function Subscribe() {
    const [email, setEmail] = React.useState('');
    const [access, setAccess] = React.useState('');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const btnHandler = () => {
        if (!email.match(validRegex)) {
            toast.error('Please enter valid email!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            });
        }
        else {
            toast.success('Request submitted', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            });
        }
    }
    return (
        <div>
            <Menu />
            <div className='subscribe-page-container'>
                <p>
                    <span className='upper-line-text'>Subscribe to the newsletter.</span>
                    <span className='lower-line-text'>Be the first to receive the latest news from Qwikio.</span>
                </p>
                <input placeholder='Business Email' value={email} onChange={(e) => setEmail(e.target.value)} className='subscribe-email-input' type="text" />
                <div onClick={email && access ? btnHandler : null} className={email && access ? 'active-submit-btn-container' : 'not-active-submit-btn-container'}>
                    <div className={email && access ? 'activefooter-btn-text' : 'not-activefooter-btn-text'}>
                        SUBMIT
                    </div>
                    <div>
                        <img width={15} height={15} src={email && access ? whiteArrow : blackArrow} alt="" />
                    </div>
                </div>
                <div className='checkbox-row'><input checked={access} value={access} onChange={(e) => setAccess(e.target.checked)} className='register-interest-details-checkbox' type="checkbox" />
                    <p className='checkbox-text'>
                        I hereby agree to and accept Privacy Policy ↗ and give permission to access my personal data</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
