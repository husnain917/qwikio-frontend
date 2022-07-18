import logo from './logo.svg';
import './App.css';
import HomeHeader from './components/HomeHeader/HomeHeader';
import Introduction from './components/Introduction/Introduction';
import Design from './components/Design/Design';
import Performance from './components/Performance/Performance';
import Connectivity from './components/Connectivity/Connectivity';
import Charging from './components/Charging/Charging';
import Footer from './components/Footer/Footer';
import Home2 from './pages/Home2/Home2';
import Home3 from './pages/Home3/Home3';
import Riidax from './pages/RiidaX/Riidax';
import RiidaXL from './pages/RiidaXL/RiidaXL';
import Pride from './pages/Pride/Pride';
import Models from './pages/models/Models';
import Qwlklo from './pages/Qwlklo/Qwlklo';
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import Faq from './pages/Faq/Faq'
import Reserve from './pages/Reserve/Reserve'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react';
import animateScrollTo from 'animated-scroll-to';
import Product from './pages/product/Product';
import Gallery from './pages/gallery/Gallery';
import RegisterInterest from './pages/registerInterest/RegisterInterest';
// import {Scrollbar} from 'smooth-scrollbar-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Subscribe from './pages/subscribe/Subscribe';
import TermsAndCondition from './pages/terms&condition/TermsAndCondition';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Riidax />} />
        <Route exact={true} path="/faq" element={<Faq />} />
        {/* <Route exact={true} path="/Product" element={<Home2 />} /> */}
        <Route exact={true} path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact={true} path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route exact={true} path="/subscribe" element={<Subscribe />} />
        <Route exact={true} path="/:name/:id" element={<Product />} />
        <Route exact={true} path="/:name/:className/gallery/:id" element={<Gallery />} />
        <Route exact={true} path="/register-interest/:name" element={<RegisterInterest />} />
        {/* <Route exact={true} path="/Products" element={<Home />} /> */}
        <Route exact={true} path="/:name" element={<Models />} />
        <Route exact={true} path="/RiidaXL" element={<RiidaXL />} />
        <Route exact={true} path="/Pride" element={<Pride />} />
        <Route exact={true} path="/why-qwikio" element={<Qwlklo />} />
        {/* <Route exact={true} path="/luxury" element={<Home3 />} /> */}
        <Route exact={true} path="/contact" element={<Contact />} />
        <Route exact={true} path="/reserve-now" element={<Reserve />} />
      </Routes>
    </>
  );
}

export default App;
