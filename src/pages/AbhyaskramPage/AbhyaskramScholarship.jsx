import React from "react";
import "./AbhyaskramScholarship.css";

import studentGif from "./Images/student.gif";

import timerIcon from "./Images/timer.png";
import certificateIcon from "./Images/certificate.png";
import percentageIcon from "./Images/percentage.png";

import goldMedal from "./Images/goldMedal.png";
import silverMedal from "./Images/silverMedal.png";
import bronzeMedal from "./Images/bronzeMedal.png";

const topCards = [
  {
    image: timerIcon,
    title: "तत्काळ निकाल",
  },
  {
    image: certificateIcon,
    title: "35% व त्यापुढील विद्यार्थ्यांना डिजिटल प्रमाणपत्र तात्काळ उपलब्ध",
  },
  {
    image: percentageIcon,
    title: "पारदर्शक टक्केवारी",
  },
];

const medals = [
  {
    image: goldMedal,
    percentage: "96%+",
    title: "Gold Medal",
  },
  {
    image: silverMedal,
    percentage: "91% - 95%",
    title: "Silver Medal",
  },
  {
    image: bronzeMedal,
    percentage: "85% - 90%",
    title: "Bronze Medal",
  },
];

export default function AbhyaskramScholarship() {
  return (
    <section className="abhyaskramScholarshipSection">
      <div className="abhyaskramScholarshipContainer">
        {/* Heading */}
        <div className="abhyaskramScholarshipHeadingRow">
          <h2 className="abhyaskramScholarshipHeading">
            राज्यस्तरीय बक्षीस, मेडल व शिष्यवृत्ती योजना
          </h2>

          <img
            src={studentGif}
            alt="Student"
            className="abhyaskramScholarshipStudent"
          />
        </div>

        {/* Top Cards */}
        <div className="abhyaskramScholarshipTopCards">
          {topCards.map((item, index) => (
            <div className="abhyaskramScholarshipTopCard" key={index}>
              <img
                src={item.image}
                alt=""
                className="abhyaskramScholarshipTopIcon"
              />

              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Medal Section */}
        <h2 className="abhyaskramScholarshipSubHeading">मेडल रचना</h2>

        <div className="abhyaskramScholarshipMedals">
          {medals.map((item, index) => (
            <div className="abhyaskramScholarshipMedalCard" key={index}>
              <img
                src={item.image}
                alt=""
                className="abhyaskramScholarshipMedalImage"
              />

              <div className="abhyaskramScholarshipLine"></div>

              <h3>{item.percentage}</h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Scholarship */}
        <h2 className="abhyaskramScholarshipSubHeading">
          राज्यस्तरीय शिष्यवृत्ती
        </h2>

        <div className="abhyaskramScholarshipBottom">
          <div className="abhyaskramScholarshipBottomCard">
            <h3>
              प्रत्येक इयत्तेतून
              <br />
              Top 10
            </h3>
          </div>

          <div className="abhyaskramScholarshipBottomCard">
            <h3>
              संयुक्त गुणवत्तेवर
              <br />
              अंतिम क्रमवारी
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
