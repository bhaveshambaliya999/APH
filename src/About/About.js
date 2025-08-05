import React from 'react';
import "./About.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Team1 from "../Assets/img/team-1.jpg";
import Team2 from "../Assets/img/team-2.jpg";
import Team3 from "../Assets/img/team-3.jpg";
import Team4 from "../Assets/img/team-4.jpg";

// Import marker images explicitly
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet's default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const About = () => {
    const locations = [
        { country: 'India', position: [20.5937, 78.9629] },
        { country: 'Hong Kong', position: [22.3193, 114.1694] },
        { country: 'UAE', position: [23.4241, 53.8478] },
        { country: 'Bahrain', position: [26.0667, 50.5577] },
        { country: 'France', position: [46.6034, 1.8883] },
        { country: 'Switzerland', position: [46.8182, 8.2275] },
        { country: 'Turkey', position: [38.9637, 35.2433] },
        { country: 'Malaysia', position: [4.2105, 101.9758] },
    ];
                                                                                      
  return (
    <>
        <Header/>
        <div className='main'>
            <div className="about-us">
                <div className="page-header">
                    <h1>About us</h1>
                    <p>Discover who we are, our mission, and what drives us.</p>
                </div>

                <div className="container">
                    <div className="row py-space">
                        <div className="col-md-6">
                            <h2>Our story</h2>
                            <p>
                                At Artisanal Parfum House, Luxury Meets Nature
                            </p>
                            <p>
                            Our journey began with a passion for fine fragrance, and today, we create exquisite artisanal perfumes that blend luxury with nature. Committed to sustainability and craftsmanship, we use only the finest ingredients to craft unique scents that tell a story, evoke emotions, and spark memories.
                            </p>
                            <p>
                            Each fragrance is a masterpiece, meticulously crafted by expert artisans who share our dedication to quality and artistry. We believe that every scent should not only captivate the senses but also connect deeply with the wearer, creating a lasting impression. At Artisanal Parfum House, we offer more than just perfume—we offer a sensory experience built on sustainability, craftsmanship, and luxury.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2>Our mission</h2>
                            <p>
                            Our Mission: Crafting Personalized Fragrance Experiences
                            </p>
                            <p>
                            At Artisanal Parfum House, our mission is to offer each of our customers a truly personalized fragrance experience. We are dedicated to creating unique, luxurious scents that capture the essence of elegance while celebrating the beauty of nature. Every perfume we craft is a blend of artistry, innovation, and sustainability, designed to evoke emotions and memories that last.
                            </p>
                            <p>
                            By sourcing the finest ingredients and working closely with skilled artisans, we ensure that our perfumes exceed the highest standards of quality. We believe that fragrance is more than just a scent; it’s an experience that connects deeply with the wearer. Our commitment is to provide perfumes that are as exceptional as the individuals who wear them, offering a lasting impression of luxury and sophistication.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="meet-team py-padding">
                    <div className="container">
                        <div className="row ">
                            <div className="col">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="heading">
                                            <h2 className="section-title mb-0">Meet the team</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <div className="card team-card">
                                            <img className="card-img-top" src={Team1} alt='Jugal Jain' />
                                            <div className="card-body">
                                                <div className="card-title">Jugal Jain</div>
                                                <div className="card-text">CEO - Industry veteran</div>
                                                <div className="card-last">Brings extensive experience and strategic vision, driving innovation and excellence.</div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <div className="card team-card">
                                            <img className="card-img-top" src={Team2} alt='Sunny Sanghavi'/>
                                            <div className="card-body">
                                                <div className="card-title">Sunny Sanghavi</div>
                                                <div className="card-text">Manufacturing expertise</div>
                                                <div className="card-last">Sunny ensures high-quality production with his deep expertise in manufacturing processes, focusing on precision and efficiency.
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <div className="card team-card">
                                            <img className="card-img-top" src={Team3} alt='Himanshu Gandhi'/>
                                            <div className="card-body">
                                                <div className="card-title">Himanshu Gandhi</div>
                                                <div className="card-text">30+ years in the world of hospitality</div>
                                                <div className="card-last">Brings extensive experience and strategic vision, driving innovation and excellence.</div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <div className="card team-card">
                                            <img className="card-img-top" src={Team4} alt='Naresh Surana ' />
                                            <div className="card-body">
                                                <div className="card-title">Riddhi Surana</div>
                                                <div className="card-text">Business and operations</div>
                                                <div className="card-last">Riddhi optimizes our operations and client relationships, leveraging her analytical skills to drive seamless collaboration.</div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="who-we-are py-space">
                    <div className="container">
                        <div className="heading">
                            <h2 className="section-title">Who we are</h2>
                            <p className="text-description">Artisanal Parfum House is founded on the belief that fragrance is a powerful form of expression, we bring together a passionate team of perfumers, industry veterans, and creative minds. With over 50 years of collective experience, our team hails from different corners of the globe, blending diverse perspectives and expertise to push the boundaries of scent-making. Together, we craft perfumes that are not just scents, but emotional experiences that resonate deeply with those who wear them.</p>
                        </div>
                        <div className='who-we-map'>
                            <MapContainer center={[20.5937, 78.9629]} zoom={3} style={{ height: '100%' }} scrollWheelZoom={false}>
                                <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
                                />
                                {locations.map((loc, idx) => (
                                    <Marker key={idx} position={loc.position}>
                                        <Popup>{loc.country}</Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default About;
