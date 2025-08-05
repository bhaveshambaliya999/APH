import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./OurServices.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RawMaterial from "../Assets/img/Raw-Materials.jpg";

import fragrance from "../Assets/img/fragrance.jpg";
import BottlesCaps from "../Assets/img/Bottles-caps-perfume.webp";
import BoxingPerfume from "../Assets/img/Boxing-Perfume.webp";
import ScentCards from "../Assets/img/Scent-cards.jpg";
import manufacturing from "../Assets/img/GIV_FB_Jasmine_NoAudio_0.mp4";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function OurServices() {
    const navigate = useNavigate();

    const handleLearnMore = (id) => {
        navigate(`/service-details/${id}`);
    };
  return (
    <>
        <Header/>
        <div className='main'>
            <div className="our-services">
                <div className="page-header" >
                    <h1>Our services</h1>
                    <p>
                        At Artisanal Parfum House, we offer a wide range of services to meet
                        your fragrance needs, from sourcing premium raw materials to
                        creating bespoke marketing solutions.
                    </p>
                </div>
                <div className="container py-padding">
                    <section className="service-tab">
                        <Tabs defaultActiveKey="fragrance" id="service"  fill>
                            <Tab eventKey="fragrance" title={<span>Fragrance</span>}>
                                <div className="service-section"> 
                                    <div className="fragrance-info">
                                        <div className="fragrance-item">
                                            <div className={`fragrance-inner`}>
                                                <div className="box-img">
                                                    <div className="fragrance-img">
                                                        <img src={RawMaterial} alt="Custom Scent Creations" />
                                                    </div>
                                                    <div className="box-text">
                                                        <h3>Custom scent creations</h3>
                                                        <button className="btn btn-primary" onClick={() => handleLearnMore('custom-scent')} > Learn more
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fragrance-item">
                                            <div className={`fragrance-inner`}>
                                                <div className="box-img">
                                                    <div className="fragrance-img">
                                                        <img src={fragrance} alt="Exclusive In-House Library" />
                                                    </div>
                                                    <div className="box-text">
                                                        <h3>Exclusive in-house library</h3>
                                                        <button className="btn btn-primary" onClick={() => handleLearnMore('in-house-library')} > Learn more
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="bottle" title={<span>Packaging</span>}>
                                {/* <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h2 className='tab-content-title'>Boxing and packaging</h2>
                                        <p>At Artisanal Parfum House, we offer comprehensive in-house boxing and packaging solutions for all types of perfume brands. From 6ml roll-on bottles to 100ml eau de parfums, we provide a wide range of boxes in various shapes and sizes to meet diverse client needs.
                                        </p>
                                        <p>Our dedicated team is committed to innovation, constantly introducing modern and creative packaging options to elevate brand presentation. Additionally, our in-house design team collaborates closely with clients to develop exceptional designs and branding concepts tailored to their vision. We ensure every brand receives the finest packaging solutions to stand out in the competitive market.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={Bottles} alt='Crystal clear luxury glass'/>
                                    </div>
                                </div> */}
                                 <div className="service-section"> 
                                    <div className="fragrance-info">
                                        <div className="fragrance-item">
                                            <div className={`fragrance-inner`}>
                                                <div className="box-img">
                                                    <div className="fragrance-img">
                                                        <img src={BottlesCaps} alt="bottles, caps and components" />
                                                    </div>
                                                    <div className="box-text">
                                                        <h3>Bottles, caps and components</h3>
                                                        <button className="btn btn-primary" onClick={() => handleLearnMore('bottles-caps-components')} > Learn more
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fragrance-item">
                                            <div className={`fragrance-inner`}>
                                                <div className="box-img">
                                                    <div className="fragrance-img">
                                                        <img src={BoxingPerfume} alt="Boxing and packaging" />
                                                    </div>
                                                    <div className="box-text">
                                                        <h3>Boxing and packaging</h3>
                                                        <button className="btn btn-primary" onClick={() => handleLearnMore('boxing-and-packaging')} > Learn more
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="boxing" title={<span>End to end manufacturing</span>}>
                                <div className="row align-items-center">
                                    <div className="col-md-6 ">
                                        <h2 className='tab-content-title'>End to end manufacturing</h2>
                                        <p>Establish your presence in the fragrance industry with our state-of-the-art, end-to-end manufacturing facilities at Artisanal Parfum House. From 6ml attar bottles and 100ml eau de parfums to body mists and hair perfumes, we provide comprehensive solutions to meet your brand’s unique requirements.
                                        </p>
                                        <p>With advanced infrastructure and expertise, we specialize in crafting niche and designer perfume brands, ensuring exceptional quality and precision at every step. Our facilities are designed to support diverse product lines, empowering you to create a standout brand in the competitive market. Trust us to bring your fragrance vision to life with unparalleled professionalism and excellence.</p>
                                       
                                    </div>
                                    <div className="col-md-6 ">
                                        <video autoPlay muted controls loop width="600">
                                            <source src={manufacturing} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="service-step pt-3">
                                        <div className='heading'>
                                            <h2 className='section-title'>Get there in 5 steps</h2>
                                        </div>
                                        <div className='step-row'>
                                            <div className='step-box'>
                                                <div className='step-icon'>
                                                    <div className='number'>1</div>
                                                    <div className='step'>Step</div>
                                                </div>
                                                <div className='step-title'>Create your brand story / theme </div>
                                            </div>
                                            <div className='step-box'>
                                                <div className='step-icon'>
                                                    <div className='number'>2</div>
                                                    <div className='step'>Step</div>
                                                </div>
                                                <div className='step-title'>Choose your fragrances from our diverse library</div>
                                            </div>
                                            <div className='step-box'>
                                                <div className='step-icon'>
                                                    <div className='number'>3</div>
                                                    <div className='step'>Step</div>
                                                </div>
                                                <div className='step-title'>Develop your bottling and packaging </div>
                                            </div>
                                            <div className='step-box'>
                                                <div className='step-icon'>
                                                    <div className='number'>4</div>
                                                    <div className='step'>Step</div>
                                                </div>
                                                <div className='step-title'>Let us manufacture the final product</div>
                                            </div>
                                            <div className='step-box'>
                                                <div className='step-icon'>
                                                    <div className='number'>5</div>
                                                    <div className='step'>Step</div>
                                                </div>
                                                <div className='step-title'>Market with our inhouse team</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="marketing" title={<span>Marketing</span>}>
                                <div className="row align-items-center">
                                     <div className="col-md-6">
                                        <h2 className='tab-content-title'>Marketing</h2>
                                        <div className="services-item">
                                            <h3>Digital content</h3>
                                            <ul>
                                                <li>Stock photography</li> 
                                            </ul>
                                            <h3>eCommerce</h3>
                                            <ul>
                                                <li>Website</li>
                                                <li>Social media management</li>
                                            </ul>
                                            <h3>Promotional material</h3>
                                            <ul>
                                                <li>Sample vials (with postcard inserts)</li>
                                                <li>Scent cards</li>
                                            </ul> 
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={ScentCards} alt='Marketing'/>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </section>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default OurServices;
