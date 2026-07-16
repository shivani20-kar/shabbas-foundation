import React from "react";
import "../Common/Footer.css";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import logo from "../Common/Images/shabbas-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerMain">
        {/* Left Section */}
        <div className="footerLeft">
          <h2>संपर्क तपशील</h2>

          <p>
            शिक्षण, परीक्षा किंवा सदस्यत्वासंबंधी
            <br />
            काही शंका आहे?
            <br />
            आमच्याशी लगेच संपर्क साधा!
          </p>

          <div className="contactDetails">
            <p>
              शाब्बास अकॅडमी
              <br />
              १२२३ ब, करंजे पेठ,
              <br />
              सातारा.
              <br />
              <a href="tel:+919145699909">+91 9145699909</a>
              <br />
              <a href="mailto:info@shabbasacademy.com">
                info@shabbasacademy.com
              </a>
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="footerCenter">
          <img src={logo} alt="Shabbas Academy" className="footerLogo" />

          <h1>"शाब्बास फाऊंडेशन"</h1>

          <p>एक नवी पिढी घडवणारा आधुनिक शैक्षणिक उपक्रम.</p>

          <div className="socialIcons">
            <a
              href="https://wa.me/919145699909"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon youtube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footerRight">
          <h2>Important Links</h2>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/disclaimer">Disclaimer</Link>
            </li>

            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>

            <li>
              <Link to="/cancellation-and-refund-policy">
                Cancellation and Refund Policy
              </Link>
            </li>

            <li>
              <Link to="/delivery-and-shipping-policy">
                Delivery and Shipping Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footerBottom">
        <p>
          All Copyright © Powered & Reserved by
          <a
            href="https://designvio.framer.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Designvio
          </a>
        </p>

        <p>
          Shabbas Talent Scholarship Exam is an independent voluntary
          competitive examination conducted by Shabbas Academy. It is not
          affiliated with or recognized by any government authority and does not
          affect school admissions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
