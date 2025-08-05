import React from 'react';
import "./Fragrance.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WhatWeOffer from "../Assets/img/What-We-Offer.jpg";

function Fragrance() {
  return (
    <>
        <Header/>
        <div className='main'>
            <div className="fragrance-laboratory">
                <section className="page-header"> 
                    <h1>Fragrance laboratory</h1>
                    <p>Our state-of-the-art fragrance laboratory is where the magic
                                happens. Equipped with cutting-edge technology and a vast array of
                                the world’s best raw materials, our skilled perfumers transform
                                creative concepts into captivating scents.</p>
                    
                </section>
                <section className="offerings py-space">
                    <div className="container">
                        <div className="offering-body">
                            <div className="offering-left">
                                <div className="mb-4 offer-title" >
                                    <h2>What we offer</h2>
                                </div>
                                <div className="offering-item">
                                    <div className="offering-row">
                                        <div>
                                            <div className="title">Research & development</div>
                                            <p> Continuous exploration of new scent profiles and formulations to keep your brand ahead of market trends. </p>
                                        </div>  
                                    </div> 
                                </div>
                                <div className="offering-item">
                                    <div className="offering-row">
                                        <div>
                                            <div className="title">Quality control</div>
                                            <p> Rigorous testing and evaluation processes to ensure each fragrance meets our high standards before it reaches the market.  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offering-right">
                                <img src={WhatWeOffer} alt='Fragrance laboratory'/>
                            </div>
                        </div>   
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default Fragrance;