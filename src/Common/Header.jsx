import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

import logo from "./Images/shabbas-logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setAccountMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="/" className="header-brand" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="शाब्बास अकॅडमी"
            className="header-logo"
          />

          <div className="brand-content">
            <h1>
              "शाब्बास फाऊंडेशन"
            </h1>

          </div>
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`header-navigation ${
            mobileMenuOpen ? "navigation-open" : ""
          }`}
        >
          <a
            href="/"
            className="nav-link active-link"
            onClick={closeMobileMenu}
          >
            होम
          </a>

          <a
            href="/shabbas-katta"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            शाब्बास कट्टा
          </a>

          <a
            href="/about"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            आमची ओळख
          </a>

          <a
            href="/courses"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            अभ्यासक्रम
          </a>

          <a
            href="/blog"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            ब्लॉग
          </a>

          <a
            href="/contact"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            संपर्क
          </a>

          <div className="account-dropdown">
            <button
              type="button"
              className="nav-link account-button"
              onClick={() => setAccountMenuOpen((prev) => !prev)}
            >
              माझे खाते

              <FiChevronDown
                className={accountMenuOpen ? "rotate-arrow" : ""}
              />
            </button>

            {accountMenuOpen && (
              <div className="account-dropdown-menu">
                <a href="/shope" onClick={closeMobileMenu}>
                  शॉप 
                </a>

                <a href="/checkout" onClick={closeMobileMenu}>
                  चेकऊट
                </a>
                 <a href="/cart" onClick={closeMobileMenu}>
                  कार्ट
                </a>
              </div>
            )}
          </div>

          <a
            href="/result"
            className="nav-link result-link"
            onClick={closeMobileMenu}
          >
            STS 25–26 Result
          </a>
        </nav>
      </div>
    </header>
  );
}