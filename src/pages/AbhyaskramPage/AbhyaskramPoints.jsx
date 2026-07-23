import React from "react";
import "./AbhyaskramPoints.css";

export default function AbhyaskramPoints() {
  return (
    <section className="abhyaskramPointsSection">
      <div className="abhyaskramPointsContainer">

        <div className="abhyaskramPointsRow">
          <div className="abhyaskramPointsCard abhyaskramPointsYellow">
            प्रश्न शालेय अधिकृत पाठ्यपुस्तकांवर आधारित असतील
          </div>

          <div className="abhyaskramPointsCard abhyaskramPointsBlue">
            अतिरिक्त खासगी संदर्भ पुस्तकांची आवश्यकता नाही
          </div>
        </div>

        <div className="abhyaskramPointsBottom">
          <div className="abhyaskramPointsCard abhyaskramPointsPink">
            अध्ययन निष्पत्ती व राष्ट्रीय शैक्षणिक धोरण अनुरूप मूल्यमापन
          </div>
        </div>

      </div>
    </section>
  );
}