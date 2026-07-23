import React from "react";
import "./AbhyaskramDistrictAward.css";

import graduationGif from "./Images/graduation.gif";

import districtFirst from "./Images/districtFirst.jpg";
import districtSecond from "./Images/districtSecond.jpg";
import districtThird from "./Images/districtThird.jpg";

import trophyImage from "./Images/trophy.png";

import confidenceIcon from "./Images/confidence.png";
import communicationIcon from "./Images/communication.png";
import reasoningIcon from "./Images/reasoning.png";
import decisionIcon from "./Images/decision.png";
import leadershipIcon from "./Images/leadership.png";

const districtAwards = [
  {
    image: districtFirst,
    title: "District First",
    subtitle: "ट्रॉफी + प्रमाणपत्र",
  },
  {
    image: districtSecond,
    title: "District Second",
    subtitle: "मेडल + प्रमाणपत्र",
  },
  {
    image: districtThird,
    title: "District Third",
    subtitle: "मेडल + प्रमाणपत्र",
  },
];

const interviewSkills = [
  {
    image: confidenceIcon,
    title: "आत्मविश्वास",
  },
  {
    image: communicationIcon,
    title: "संवाद कौशल्य",
  },
  {
    image: reasoningIcon,
    title: "तर्कशक्ती",
  },
  {
    image: decisionIcon,
    title: "निर्णय क्षमता",
  },
  {
    image: leadershipIcon,
    title: "नेतृत्व गुण",
  },
];

export default function AbhyaskramDistrictAward() {
  return (
    <section className="abhyaskramDistrictAwardSection">
      <div className="abhyaskramDistrictAwardContainer">
        {/* Heading */}
        <div className="abhyaskramDistrictAwardHeadingWrapper">
          <img
            src={graduationGif}
            alt="Graduation"
            className="abhyaskramDistrictAwardGif"
          />

          <h2 className="abhyaskramDistrictAwardHeading">जिल्हानिहाय सन्मान</h2>
        </div>

        {/* District Cards */}

        <div className="abhyaskramDistrictAwardCards">
          {districtAwards.map((item, index) => (
            <div className="abhyaskramDistrictAwardCard" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="abhyaskramDistrictAwardCardImage"
              />

              <h3 className="abhyaskramDistrictAwardCardTitle">{item.title}</h3>

              <p className="abhyaskramDistrictAwardCardSubtitle">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Trophy */}

        <div className="abhyaskramDistrictAwardTrophySection">
          <img
            src={trophyImage}
            alt="Trophy"
            className="abhyaskramDistrictAwardTrophyImage"
          />

          {/* <div className="abhyaskramDistrictAwardLine"></div> */}

          <h3 className="abhyaskramDistrictAwardTrophyHeading">
            भव्य पुरस्कार वितरण सोहळा
          </h3>

          <div className="abhyaskramDistrictAwardPoints">
            <span>● राज्यस्तरीय सन्मान</span>

            <span>● अधिकृत घोषण</span>

            <span>● Trophy वितरण</span>

            <span>● शाळा सन्मान योजना</span>
          </div>

          <div className="abhyaskramDistrictAwardDescription">
            <p>• ज्या शाळेतून सर्वाधिक विद्यार्थी परीक्षेमध्ये सहभागी होतील.</p>

            <p>
              • ज्या शाळेचे गुणवंत विद्यार्थी राज्य व जिल्हा स्तरावर निवडले
              जातील.
            </p>

            <p>• त्या शाळेचा विशेष सन्मान व गौरव करण्यात येईल.</p>
          </div>
        </div>

        {/* Interview */}

        <div className="abhyaskramDistrictAwardInterview">
          <h2 className="abhyaskramDistrictAwardInterviewHeading">
            राज्यस्तरीय मुलाखत प्रक्रिया (Official Interview Structure)
          </h2>

          <p className="abhyaskramDistrictAwardInterviewSubHeading">
            शिष्यवृत्तीसाठी पात्र विद्यार्थ्यांची अंतिम निवड मुलाखतीद्वारे केली
            जाते. खालील गुणांचे मूल्यमापन होईल:
          </p>

          <div className="abhyaskramDistrictAwardSkillGrid">
            {interviewSkills.map((skill, index) => (
              <div className="abhyaskramDistrictAwardSkillCard" key={index}>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="abhyaskramDistrictAwardSkillIcon"
                />

                <h4>{skill.title}</h4>
              </div>
            ))}
          </div>

          <a
            href="https://shabbas.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="abhyaskramDistrictAwardButton"
          >
            प्रत्येक इयत्तेतून Top 10 विद्यार्थ्यांना मुलाखतीसाठी पात्रता
          </a>
        </div>
      </div>
    </section>
  );
}
