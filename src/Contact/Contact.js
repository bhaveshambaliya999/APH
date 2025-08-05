import React, { useState } from 'react';
import './Contact.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';
import commonService from '../Common/commonService';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.name !== '' && formData.email !== '' && formData.message !== '') {
            const updatedFormData = {
                a:'SendMailArtisanalParfumHouse',
                SITDeveloper:'1',
                ...formData,
            };
            commonService.postApi('/SendMail', updatedFormData).then((res) => {
                toast.success("Message sent Successfully.");
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            })
        } else {
            for (const key in formData) {
                if (formData[key].trim() === '') {
                    toast.error(`${key.charAt(0).toUpperCase() + key.slice(1)} field is required.`);
                    return;
                }
            }
        }
    }
    return (
        <>
            <Header />
            <ToastContainer />
            <div className='main'>
                <div className="contact-page">
                    <div className="page-header">
                        <h1>Contact us</h1>
                        <p>We’d love to hear from you! Reach out to us for any inquiries, feedback, or collaborations.</p>
                    </div>

                    <div className="container">
                        <div className='contact-container py-space'>
                            <div className="contact-info">
                                <h2>Get in touch</h2>
                                <p>Feel free to contact us through any of the channels below.</p>
                                <div className='contact-add'>
                                    <Link className='contact-link' to={'tel:+91 7977177351'}>
                                        <i className="ic_telephone"></i>
                                        <span>+91 7977177351</span>
                                    </Link>
                                    <Link className='contact-link' to={'mailto:hello@artisanalparfumhouse.com'}>
                                        <i className="ic_mail"></i>
                                        <span>hello@artisanalparfumhouse.com</span>
                                    </Link>
                                    <div className='contact-link'>
                                        <i className="ic_location"></i>
                                        <span>Pitruchhaya, Sanghavi Corporate Park, Govandi Station Rd, near Satyam Corporate Park, Deonar, Govandi East, Mumbai, Maharashtra 400088, India</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form">
                                <h2>Send us a message</h2>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Your name</label>
                                        <input type="text" value={formData.name} name="name" onChange={handleOnChange} id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your email</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleOnChange} placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your message</label>
                                        <textarea id="message" rows="4" value={formData.message} name="message" onChange={handleOnChange} placeholder="Enter your message"></textarea>
                                    </div>
                                    <input type="submit" value='Submit Message' className="btn btn-primary" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
