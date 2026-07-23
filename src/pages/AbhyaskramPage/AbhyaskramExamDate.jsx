import React from "react";
import "./AbhyaskramExamDate.css";

import studentImage from "./Images/studentdate.png";
import bgImage from "./Images/examBgdate.jpg";

import calendarIcon from "./Images/calendar.png";
import clockIcon from "./Images/clock.png";

export default function AbhyaskramExamDate() {
  return (
    <section
      className="abhyaskramExamDateSection"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="abhyaskramExamDateOverlay">
        <div className="abhyaskramExamDateContainer">
          {/* Student */}
          <div className="abhyaskramExamDateStudent">
            <img
              src={studentImage}
              alt="Student"
              className="abhyaskramExamDateStudentImage"
            />
          </div>

          {/* Content */}
          <div className="abhyaskramExamDateContent">
            <h2 className="abhyaskramExamDateHeading">परीक्षा दिनांक व वेळ</h2>

            <div className="abhyaskramExamDateInfoWrapper">
              <div className="abhyaskramExamDateLeft">
                <div className="abhyaskramExamDateItem">
                  <img
                    src={calendarIcon}
                    alt="Calendar"
                    className="abhyaskramExamDateIcon"
                  />
                  <span>STS परीक्षा दिनांक : ४ एप्रिल २०२७</span>
                </div>

                <div className="abhyaskramExamDateItem">
                  <img
                    src={clockIcon}
                    alt="Clock"
                    className="abhyaskramExamDateIcon"
                  />
                  <span>सकाळी ९.०० ते सायंकाळी ६.००</span>
                </div>
              </div>

              <div className="abhyaskramExamDateDivider"></div>

              <div className="abhyaskramExamDateRight">
                <ul>
                  <li>राज्यस्तरीय ऑनलाइन परीक्षा</li>
                  <li>इयत्ता १ ली ते ८ वी</li>
                  <li>सर्व माध्यमांसाठी उपलब्ध</li>
                </ul>
              </div>
            </div>

            <a
              href="https://shabbas.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="abhyaskramExamDateButton"
            >
              परीक्षा नोंदणी करा
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
