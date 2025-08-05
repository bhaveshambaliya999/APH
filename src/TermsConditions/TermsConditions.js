import React from 'react';
import './TermsConditions.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function TermsConditions() {
  return (
    <>
        <Header/>
        <div className='main'>
            <div className="privacy-notice">
                <section className="page-header"> 
                    <h1>Terms and Conditions</h1>
                    <p>Welcome to Artisanal Parfum House! By accessing or using our website, artisanalparfumhouse.com (the "Website"), you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully. If you do not agree with any part of these terms, you must not use our services or website.</p>  
                </section>

                <section className="container py-padding"> 
                   
                    
                   

                    <h4>1. Acceptance of Terms</h4>
                    <p>By accessing or using our Website and services, you agree to comply with these Terms and Conditions. If you do not agree with these terms, you are not authorized to use our Website or services.</p>
                    
                    <h4>2. Changes to Terms</h4>
                    <p>We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. You are encouraged to review these terms regularly. Your continued use of the Website following the posting of any changes will be deemed acceptance of those changes.</p>

                    <h4>3.Use of the Website</h4>
                    <ul>
                        <li>You agree to use the Website only for lawful purposes and in a way that does not infringe on the rights of others or restrict or inhibit anyone else’s use and enjoyment of the Website.</li>
                        <li>You are responsible for ensuring that any information you provide is accurate and up to date.</li>
                    </ul>
                    
                    <h4>4. Account Registration</h4>
                    <p>To access certain features of our Website, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate.</p>
                    <p>You are responsible for maintaining the confidentiality of your account details and password. You agree to immediately notify us if you suspect any unauthorized use of your account.</p>

                    <h4>5.Intellectual Property</h4>
                    <ul>
                        <li>All content, including but not limited to text, graphics, logos, images, and software, on the Website is the property of Artisanal Parfum House or its content suppliers and is protected by copyright and other intellectual property laws.
                        </li>
                        <li>You may not copy, reproduce, distribute, transmit, display, or create derivative works from the content on this Website without express written permission from Artisanal Parfum House.</li>
                    </ul>

                    <h4>6. Products and Services</h4>
                    <ul>
                        <li>Artisanal Parfum House offers a selection of luxury fragrances for sale via the Website. The prices, availability, and descriptions of products are subject to change without notice.
                        </li>
                        <li>We reserve the right to refuse or cancel any orders at our sole discretion, including but not limited to cases where the product is out of stock or if there are errors in the pricing or product description.</li>
                    </ul>

                    <h4>7. Payment and Billing</h4>
                    <ul>
                        <li>When you make a purchase on the Website, you agree to provide accurate and complete billing information. You authorize us to charge the payment method you provide for the total amount of your order.
                        </li>
                        <li>All payments are processed securely using third-party payment processors, and we do not store any payment information.</li>
                    </ul>
                    
                    <h4>8. Shipping and Delivery</h4>
                    <ul>
                        <li>We aim to process and ship orders within a reasonable time frame. Shipping times may vary depending on your location and the shipping method selected during checkout.
                        </li>
                        <li>Artisanal Parfum House is not responsible for delays caused by third-party carriers or for issues arising from incorrect shipping information provided by the user.</li>
                    </ul>
                    
                    <h4>9. Returns and Refunds</h4>
                    <ul>
                        <li>We strive for customer satisfaction. If you are not satisfied with your purchase, you may request a return or exchange within [insert number of days] days of receiving your order, provided the product is unused and in its original packaging.
                        </li>
                        <li>Refunds will be issued to the original payment method after we receive and process your returned product. Shipping charges are non-refundable unless the return is due to a defect or error on our part.</li>
                    </ul>

                    <h4>10. User Content</h4>
                    <p>If you post content on our Website (such as reviews, feedback, or comments), you grant Artisanal Parfum House a non-exclusive, royalty-free, worldwide license to use, display, and distribute the content in connection with our business operations, including promotional purposes.</p>
                    <p>You represent and warrant that your content does not infringe on the intellectual property rights or privacy rights of any third party.</p>

                    <h4>11. Privacy and Data Protection</h4>
                    <p>We value your privacy and are committed to protecting your personal information. Our Privacy Notice outlines how we collect, use, and protect your personal data when you use our Website and services. Please review our Privacy Notice for more information on how we handle your personal data.</p>

                    <h4>12. Disclaimer of Warranties</h4>
                    <ul>
                        <li>The Website and its content are provided "as is" without any warranties or representations, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.
                        </li>
                        <li>Artisanal Parfum House makes no warranty that the Website will meet your requirements, be uninterrupted, secure, or error-free.</li>
                    </ul>
                </section>
            </div>
        </div>
        <Footer/> 
    </>
  );
}

export default TermsConditions;