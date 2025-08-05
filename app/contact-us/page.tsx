import type { Metadata } from "next"
import { generateMetadata as getMetadata } from "@/lib/metadata"
import ContactFormClient from "./contact-form-client"

export const metadata: Metadata = getMetadata("/contact-us")

export default function ContactUsPage() {
  return (
    <>
      <div className="page-header">
        <h1>Contact us</h1>
        <p>We’d love to hear from you! Reach out to us for any inquiries, feedback, or collaborations.</p>
      </div>

      <div className="container">
        <div className="contact-container py-space">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>Feel free to contact us through any of the channels below.</p>
            <div className="contact-add">
              <a className="contact-link" href="tel:+917977177351">
                <i className="ic_telephone"></i>
                <span>+91 7977177351</span>
              </a>
              <a className="contact-link" href="mailto:hello@artisanalparfumhouse.com">
                <i className="ic_mail"></i>
                <span>hello@artisanalparfumhouse.com</span>
              </a>
              <div className="contact-link">
                <i className="ic_location"></i>
                <span>
                  Pitruchhaya, Sanghavi Corporate Park, Govandi Station Rd, near Satyam Corporate Park, Deonar, Govandi
                  East, Mumbai, Maharashtra 400088, India
                </span>
              </div>
            </div>
          </div>

          <ContactFormClient />
        </div>
      </div>
    </>
  )
}
