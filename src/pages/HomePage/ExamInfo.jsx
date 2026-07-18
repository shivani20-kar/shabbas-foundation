import React from "react";
import "./ExamInfo.css";

import trophyImage from "./Images/Frame 2087328414.png";
import graduationImage from "./Images/Group 1321314380.png";

const ExamInfoSection = () => {
  return (
    <section className="exam-info-section">
      <div className="exam-info-container">
        {/* Fees Card */}
        <article className="exam-info-card fees-card">
          <div className="fees-content">
            <p className="fees-label">परीक्षा शुल्क</p>

            <h2 className="fees-price">
              <span>₹</span>289 फक्त
            </h2>

            <p className="fees-description">
              इयत्ता 1 ली ते 8 वी
              <br />
              सर्व विद्यार्थ्यांसाठी
            </p>
          </div>

          <div className="fees-image-wrapper">
            <img
              src={trophyImage}
              alt="शाब्बास अकॅडमी परीक्षा पुरस्कार"
              className="fees-image"
            />
          </div>
        </article>

        {/* Exam Dates Card */}
        <article className="exam-info-card dates-card">
          <div className="dates-content">
            <div className="date-item">
              <p className="date-label">नोंदणी तारीख</p>
              <span className="small-line" />

              <h3 className="date-value">30 सप्टेंबर 2026</h3>
              <span className="date-divider" />
            </div>

            <div className="date-item exam-date-item">
              <p className="date-label">परीक्षा तारीख</p>
              <span className="small-line" />

              <h3 className="date-value">04 एप्रिल 2027</h3>
            </div>
          </div>

          <div className="trust-content">
            <div className="trust-text">
              <h2>10,000+</h2>
              <p>विद्यार्थ्यांचा विश्वास</p>
            </div>

            <div className="graduation-image-wrapper">
              <img
                src={graduationImage}
                alt="शाब्बास अकॅडमी विद्यार्थ्यांचा विश्वास"
                className="graduation-image"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ExamInfoSection;