import React from "react";
import "./AbhyaskramRules.css";

import marksIcon from "./Images/Vector.png";
import shieldIcon from "./Images/Vector (1).png";
import mcqIcon from "./Images/Vector (2).png";
import onlineIcon from "./Images/Vector (3).png";
import tickIcon from "./Images/Vector (4).png";
import trophyIcon from "./Images/Vector (5).png";

const rules = [
  {
    image: marksIcon,
    title: "प्रत्येक प्रश्नाला 2 गुण",
    color: "pink",
  },
  {
    image: shieldIcon,
    title: "निगेटिव्ह मार्किंग नाही",
    color: "purple",
  },
  {
    image: mcqIcon,
    title: "सर्व प्रश्न MCQ स्वरूपात",
    color: "violet",
  },
  {
    image: onlineIcon,
    title: "परीक्षा पूर्णतः ऑनलाइन",
    color: "pink",
  },
  {
    image: tickIcon,
    title: "35% गुण आवश्यक",
    color: "purple",
  },
  {
    image: trophyIcon,
    title: "प्रत्येक इयत्तेतील टॉप 10 विद्यार्थ्यांना गुणवत्तीची संधी",
    color: "violet",
  },
];

export default function AbhyaskramRules() {
  return (
    <section className="abhyaskramRulesSection">
      <div className="abhyaskramRulesContainer">
        <h2 className="abhyaskramRulesHeading">सर्व इयत्तांसाठी समान नियम</h2>

        <div className="abhyaskramRulesGrid">
          {rules.map((item, index) => (
            <div
              key={index}
              className={`abhyaskramRulesCard abhyaskramRules${item.color}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="abhyaskramRulesIcon"
              />

              <h3 className="abhyaskramRulesTitle">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="abhyaskramRulesFormula">
          <h2>टक्केवारी = (प्राप्त गुण ÷ एकूण गुण) × 100</h2>

          <p>सर्व मेडल व शिष्यवृत्ती टक्केवारीवर आधारित असतील.</p>
        </div>
      </div>
    </section>
  );
}
