import React from "react";
import "./ExamRegistrationSection.css";

import boyImage from "./Images/image 125.png";
import girlImage from "./Images/image 126.png";

const ExamRegistrationSection = () => {
  return (
    <section className="exam-registration-section">
      <div className="exam-registration-container">
        <div className="exam-registration-heading">
          <h2>परीक्षा दिनदर्शिका</h2>

          <p>
            आजच नोंदणी करा आणि राज्यस्तरीय गुणवत्तेच्या स्पर्धेत सहभागी व्हा.
          </p>
        </div>

        <div className="exam-registration-cards">
          <article className="exam-card regular-registration-card">
            <img
              src={boyImage}
              alt="Student"
              className="exam-student-image boy-image"
            />

            <div className="exam-card-content">
              <h3>नियमित ऑनलाइन नोंदणी</h3>

              <p className="exam-highlight">
                अंतिम तारीख : 31
                <br />
                ऑगस्ट 2026
              </p>
            </div>
          </article>

          <article className="exam-card late-registration-card">
            <div className="exam-card-content">
              <h3>विलंब शुल्कासह नोंदणी</h3>

              <p className="exam-highlight">
                01 सप्टेंबर 2026 पासून
              </p>

              <p className="exam-note">
                (अंतिम तारीख नंतर जाहीर
                <br />
                करण्यात येईल)
              </p>
            </div>

            <img
              src={girlImage}
              alt="Student"
              className="exam-student-image girl-image"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExamRegistrationSection;