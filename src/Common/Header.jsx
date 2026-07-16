import React, { useEffect, useRef, useState } from "react";
import {
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  NavLink,
  useLocation,
} from "react-router-dom";

import "./Header.css";
import logo from "./Images/shabbas-logo.png";

export default function Header() {
  const location = useLocation();
  const accountRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [accountMenuOpen, setAccountMenuOpen] =
    useState(false);

  const accountRoutes = [
    "/shope",
    "/checkout",
    "/cart",
  ];

  const accountRouteActive = accountRoutes.some(
    (route) =>
      location.pathname === route ||
      location.pathname.startsWith(`${route}/`),
  );
  const accountActive =
    accountMenuOpen || accountRouteActive;

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setAccountMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previous) => !previous);
    setAccountMenuOpen(false);
  };

  const toggleAccountMenu = () => {
    setAccountMenuOpen((previous) => !previous);
  };
  useEffect(() => {
    setMobileMenuOpen(false);
    setAccountMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  const getNavClass = ({ isActive }) => {
    if (isActive && !accountMenuOpen) {
      return "nav-link active-link";
    }

    return "nav-link";
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <NavLink
          to="/"
          className="header-brand"
          onClick={closeAllMenus}
        >
          <img
            src={logo}
            alt="शाब्बास फाऊंडेशन"
            className="header-logo"
          />

          <div className="brand-content">
            <h1>"शाब्बास फाऊंडेशन"</h1>
          </div>
        </NavLink>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label={
            mobileMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`header-navigation ${
            mobileMenuOpen
              ? "navigation-open"
              : ""
          }`}
        >
          <NavLink
            to="/"
            end
            className={getNavClass}
            onClick={closeAllMenus}
          >
            होम
          </NavLink>

          <NavLink
            to="/shabbas-katta"
            className={getNavClass}
            onClick={closeAllMenus}
          >
            शाब्बास कट्टा
          </NavLink>

          <NavLink
            to="/about"
            className={getNavClass}
            onClick={closeAllMenus}
          >
            आमची ओळख
          </NavLink>

          <NavLink
            to="/courses"
            className={getNavClass}
            onClick={closeAllMenus}
          >
            अभ्यासक्रम
          </NavLink>

          <NavLink
            to="/blog"
            className={getNavClass}
            onClick={closeAllMenus}
          >
            ब्लॉग
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavClass}
            onClick={closeAllMenus}
          >
            संपर्क
          </NavLink>

          <div
            className="account-dropdown"
            ref={accountRef}
          >
            <button
              type="button"
              className={`nav-link account-button ${
                accountActive
                  ? "active-link"
                  : ""
              }`}
              onClick={toggleAccountMenu}
              aria-expanded={accountMenuOpen}
              aria-haspopup="true"
            >
              <span>माझे खाते</span>

              <FiChevronDown
                className={
                  accountMenuOpen
                    ? "rotate-arrow"
                    : ""
                }
              />
            </button>

            {accountMenuOpen && (
              <div className="account-dropdown-menu">
                <NavLink
                  to="/shope"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-link active-menu-item"
                      : "dropdown-link"
                  }
                  onClick={closeAllMenus}
                >
                  शॉप
                </NavLink>

                <NavLink
                  to="/checkout"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-link active-menu-item"
                      : "dropdown-link"
                  }
                  onClick={closeAllMenus}
                >
                  चेकआउट
                </NavLink>

                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-link active-menu-item"
                      : "dropdown-link"
                  }
                  onClick={closeAllMenus}
                >
                  कार्ट
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/result"
            className={({ isActive }) => {
              if (isActive && !accountMenuOpen) {
                return "nav-link result-link active-link";
              }

              return "nav-link result-link";
            }}
            onClick={closeAllMenus}
          >
            STS 25–26 Result
          </NavLink>
        </nav>
      </div>
    </header>
  );
}