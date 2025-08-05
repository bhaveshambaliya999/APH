"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <footer className="footer pt-padding">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-log">
              <Image src="/images/logo_b.png" alt="Artisanal Parfum logo" width={160} height={50} />
            </div>
            <div className="footer-description">
              <p>
                Artisanal Parfum House – crafting exquisite fragrances to elevate your senses. experience the essence of
                elegance and sophistication with every drop.
              </p>
            </div>
            <div className="social-links">
              <Link href="https://www.instagram.com/artisanalparfumhouse/" target="_blank">
                <i className="ic_instagram"></i>
              </Link>
              <Link href="https://www.facebook.com/ArtisanalParfumHouse" target="_blank">
                <i className="ic_facebook"></i>
              </Link>
              <Link href="https://www.linkedin.com/company/artisanal-parfum-house" target="_blank">
                <i className="ic_linkedin"></i>
              </Link>
            </div>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Additional links</h5>
            <div className="additional-row">
              <ul className="simple">
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
                <li>
                  <Link href="/our-service">Our services</Link>
                </li>
                <li>
                  <Link href="/industry-insights">Industry insights</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
              <ul className="simple">
                <li>
                  <Link href="/fragrance-laboratory">Fragrance laboratory</Link>
                </li>
                <li>
                  <Link href="/privacy-notice">Privacy notice</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms and conditions</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-title">Get in touch</h5>
            <div className="footer-contact">
              <Link className="contact-link" href="tel:+917977177351">
                <i className="ic_telephone"></i>
                <span>+91 7977177351</span>
              </Link>
              <Link className="contact-link" href="mailto:hello@artisanalparfumhouse.com">
                <i className="ic_mail"></i>
                <span>hello@artisanalparfumhouse.com</span>
              </Link>
              <div className="contact-link">
                <i className="ic_location"></i>
                <span>
                  Pitruchhaya, Sanghavi Corporate Park, Govandi Station Rd, near Satyam Corporate Park, Deonar, Govandi
                  East, Mumbai, Maharashtra 400088, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom text-center background-10-b">
        Copyright © 2024{" "}
        <Link href="/" target="_blank" className="heading">
          Artisanal Parfum House.
        </Link>{" "}
        <Link href="https://upqor.com">Powered by UPQOR PVT LTD</Link>
      </div>
      <div className="sticky-whatsapp">
        <Link
          className="whatsapp-link"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=917977177351&text=I%27m%20interested%20in%20your%20services"
        >
          <Image src="/images/whatsapp.svg" alt="Artisanal Parfum Whatsapp" width={45} height={45} />
        </Link>
      </div>
    </footer>
  )
}
