import React from 'react';
import "./Industry.scss";
import { Link } from 'react-router-dom';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import b1 from "../Assets/img/bolg-1.jpg";
import b2 from "../Assets/img/3e126df5b637ae365c4c331b920a0519.jpg";
import b3 from "../Assets/img/bolg-3.jpg";


function Industry() {
    const blogs = [
        { 
            id: 1, title: "The Indian Perfume Market A Blend of Heritage and Modernity", 
            image: b1, 
            description: "The Indian perfume market is a fascinating mix of tradition and modernity, deeply rooted in the country’s cultural heritage. With a history that dates back thousands of years, perfumery in India has evolved into a thriving industry that reflects both its rich past and innovative future." },
        { 
            id: 2, title: "Exploring Different Types of Perfumes and Their Applications", 
            image: b2, 
            description: "Perfumes are more than just fragrances; they are a reflection of personal style, mood, and occasion. With a variety of types available, each perfume has unique characteristics and applications suited to different needs and preferences. Understanding these categories can help you make the right choice for every moment" 
        },
        { 
            id: 3, title: "Natural and Synthetic Ingredients in Perfume", 
            image: b3, 
            description: "The art of perfumery revolves around blending various ingredients to create captivating scents. These ingredients, derived from both natural and synthetic sources, form the backbone of the fragrance industry, each bringing unique qualities to the final product."
        }
      ];
  return (
    <>
        <Header/>
        <div className='main'>
            <div className="industry-laboratory">
                <section className="page-header"> 
                    <h1>Industry Insights</h1>
                    <p>Stay ahead of the curve with our expert-driven insights into the latest trends, innovations, and best practices across various industries. Gain valuable knowledge to navigate challenges and unlock new opportunities for your business growth.</p>
                    
                </section>
                <section className="industry py-space">
                    <div className="container">
                        <div  className="row">
                            {blogs.map(blog => (
                                <div key={blog.id} className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <div className="industry-card">
                                        <div className="industry-img">
                                        <img src={blog.image} alt={blog.title} />
                                        </div>
                                        <div className="industry-body">
                                        <div className="fra-title">{blog.title}</div>
                                        <div className="fra-text">{blog.description}</div>
                                        <Link to={`/industry-insights/${blog.title.replace(/\s+/g, '-').toLowerCase()}`} className="btn btn-primary">Learn more</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default Industry;