import { useLocation } from "react-router";
import { useState } from 'react';
import UseModels from '../models/UseModels';
import { toast } from 'react-toastify';
export default function UseRegisterInterest() {
    const location = useLocation();
    const id = location.pathname;
    const path = id?.split('/');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [step, setStep] = useState(0);
    const [model, setModel] = useState('');
    const [vehicles, setVehicles] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [access, setAccess] = useState(false);
    const [{ data }] = UseModels();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const product = data?.filter((item) => {
        if (item?.name == path[2]) {
            return item;
        }
    })
    const btnHandler = () => {
        if (step == 0) {
            setStep(1);
        }
        if (step == 1) {
            setStep(2)
        }
        if (step == 2) {
            setStep(3)
        }
        if (step == 3) {
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
    }
    return [{ mobile, setMobile, access, setAccess, subscribe, setSubscribe, email, setEmail, jobTitle, setJobTitle, companyName, setCompanyName, lastName, setLastName, firstName, setFirstName, path, country, setCountry, region, setRegion, step, setStep, btnHandler, product, model, setModel, vehicles, setVehicles }]
}
