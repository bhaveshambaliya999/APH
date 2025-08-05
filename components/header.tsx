"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomepage = pathname === "/"
  const logoSrc = isHomepage ? (isSticky ? "/images/logo_b.png" : "/images/logo_w.svg") : "/images/logo_b.png"

  return (
    <header className={`header ${isSticky ? "sticky" : ""} ${isHomepage ? "homepage" : ""}`} id="header">
      <nav className="navbar container">
        <section className="navbar-left">
          <Link className="brand" href="/">
            <Image src={logoSrc || "/placeholder.svg"} alt="Artisanal Parfum House" width={150} height={50} priority />
          </Link>

          <div className="burger" onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </section>
        <section className="navbar-center">
          <span className={`overlay ${isMenuOpen ? "is-active" : ""}`} onClick={closeMenu}></span>
          <div id="menu" className={`menu ${isMenuOpen ? "is-active" : ""}`}>
            <div className="menu-header">
              <div className="menu-arrow close"></div>
              <div className="menu-title">Artisanal Parfum House</div>
            </div>
            <ul>
              <li className="menu-item">
                <Link href="/" className={`menu-link ${pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/about-us"
                  className={`menu-link ${pathname === "/about-us" ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  About us
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/our-service"
                  className={`menu-link ${pathname === "/our-service" ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Our services
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/fragrance-laboratory"
                  className={`menu-link ${pathname === "/fragrance-laboratory" ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Fragrance laboratory
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/industry-insights"
                  className={`menu-link ${pathname === "/industry-insights" ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Industry insights
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/contact-us"
                  className={`menu-link ${pathname === "/contact-us" ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Contact us
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/user-panel/#/login" target="_blank" className="menu-link login-link" onClick={closeMenu}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  )
}
