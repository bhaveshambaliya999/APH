import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss";
import Slider from "react-slick";
import slider1 from "../Assets/img/slider-1.webp";
import b1 from "../Assets/img/expertise.webp";
import b2 from "../Assets/img/quality-sourcing.webp";
import b3 from "../Assets/img/tailored-solutions.webp";
import { Link } from 'react-router-dom';
function Home() {
    const settings = {
        dots: false, // Enable dots for navigation
        infinite: true, // Loop the slider
        speed: 500, // Transition speed
        fade: true, // Enable fade effect instead of sliding
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Delay for autoplay
        arrows: false, // Disable arrows (optional)
    };
    
    const slides = [
        {
            id: 1,
            title: "Discover the essence of artisanal luxury",
            description: "Experience handcrafted fragrances that capture elegance and individuality. Awaken your senses with the finest artisanal perfumes.",
            img: slider1,
        },
        
    ];
    return (
        <>
            <Header/>
            <section className="hero-slider">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="slider-item">
                            <div className="hero-header-filter"></div>
                            <div className="slider-img">
                                <img src={slide.img} alt={slide.title} className="slider-image" />
                            </div>
                            <div className="field-content"> 
                                <div className="slider-content container">
                                    <h1 data-animation-in="fadeInRight">{slide.title}</h1>
                                    <p data-animation-in="fadeInLeft">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="fragrance py-space">
                <div className="container">
                    <div  className="row">
                        <div className="col-12">
                            <div className="heading">
                                <h2 className="section-title">World class fragrance</h2>
                                <p className="text-description">Redefining the Fragrance Industry Through Innovation, Artistry, and Collaboration</p>
                                <p className="text-description">As a leading partner in the perfume trade and manufacturing, we are committed to reshaping the fragrance landscape. Our focus is on creating exceptional olfactory experiences that not only engage the senses but also connect deeply with consumers. We combine cutting-edge innovation with the timeless artistry of scent creation, offering brands the ability to stand out in a competitive market. Through our expertise and collaborative approach, we help brands craft unique, signature fragrances that resonate with their target audience and reflect their identity. From concept to creation, we guide every step of the process, ensuring that each fragrance tells an unforgettable story. With a relentless dedication to quality and creativity, we are proud to be a trusted partner, pushing the boundaries of what fragrance can be and delivering products that inspire, captivate, and endure.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="fragrance-card">
                                <div className="fragrance-img">
                                    <img src={b1} alt='Expertise'/>
                                </div>
                                <div className="fragrance-body">
                                    <div className="fra-title">Expertise</div>
                                    <div className="fra-text">With decades of combined experience in the fragrance industry, manufacturing, operations, and hospitality, our team is well-versed in the nuances of scent creation and market trends.</div>
                                    <Link className="btn btn-primary" to={'/about-us'}>Learn more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="fragrance-card">
                                <div className="fragrance-img">
                                    <img src={b2} alt='Quality sourcing'/>
                                </div>
                                <div className="fragrance-body">
                                    <div className="fra-title">Quality sourcing</div>
                                    <div className="fra-text">We pride ourselves on sourcing only the finest French oils and raw materials, ensuring that each fragrance embodies purity and sophistication.
                                    </div>
                                    <Link className="btn btn-primary" to={'/our-service'}>Learn more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="fragrance-card">
                                <div className="fragrance-img">
                                    <img src={b3} alt='Tailored solutions'/>
                                </div>
                                <div className="fragrance-body">
                                    <div className="fra-title">Tailored solutions</div>
                                    <div className="fra-text">Understanding that every brand has its own unique identity, we offer customized fragrance development, packaging, and marketing solutions to meet your specific needs.
                                    </div>
                                    <Link className="btn btn-primary" to={'/our-service'}>Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Home;