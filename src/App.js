

import "./icon.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';
import "./Assets/css/animate.min.css"
import React from "react";
import {Routes, Route } from "react-router-dom";


import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About"; 
import OurServices from "./Service/OurServices";
import Fragrance from "./Fragrance/Fragrance";
import Industry from "./Industry/Industry";
import IndustryDetail from "./Industry/IndustryDetail/IndustryDetail";
import TitleMetaTags from './TitleMetaTags/TitleMetaTags';
import ServiceDetails from './Service/ServiceDetails/ServiceDetails';
import PrivacyNotice from "./PrivacyNotice/PrivacyNotice";
import TermsConditions from "./TermsConditions/TermsConditions";

function App() {
  
  return (
    <div className="App">
      <TitleMetaTags />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-service" element={<OurServices />} />
        <Route path="/fragrance-laboratory" element={<Fragrance />} />
        <Route path="/industry-insights" element={<Industry />} />
        <Route path="/industry-insights/:title" element={<IndustryDetail />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-notice" element={<PrivacyNotice />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </div>
  );
}

export default App;
