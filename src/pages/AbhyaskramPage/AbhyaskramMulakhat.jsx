import React from "react";
import "./AbhyaskramMulakhat.css";

import graduationGif from "./Images/graduation.gif";

import onlineIcon from "./Images/online.png";
import clockIcon from "./Images/clock1.png";
import marksIcon from "./Images/marksi.png";

const interviewCards = [
  {
    icon: onlineIcon,
    title: "Online / Offline",
    color: "Pink",
  },
  {
    icon: clockIcon,
    title: "5 - 7 मिनिटे",
    color: "Purple",
  },
  {
    icon: marksIcon,
    title: "100 गुण",
    color: "Violet",
  },
];

const interviewTable = [
  {
    title: "आत्मविश्वास",
    marks: "20",
  },
  {
    title: "विषय समज",
    marks: "20",
  },
  {
    title: "तर्कशक्ती",
    marks: "20",
  },
  {
    title: "संवाद कौशल्य",
    marks: "20",
  },
  {
    title: "निर्णय क्षमता",
    marks: "20",
  },
];

export default function AbhyaskramMulakhat() {
  return (
    <section className="abhyaskrammulakhatSection">
      <div className="abhyaskrammulakhatContainer">
        {/* Heading */}
        <div className="abhyaskrammulakhatHeadingWrapper">
          <h2 className="abhyaskrammulakhatHeading">मुलाखत स्वरूप</h2>

          <img
            src={graduationGif}
            alt="Graduation"
            className="abhyaskrammulakhatHeadingGif"
          />
        </div>

        {/* Cards */}
        <div className="abhyaskrammulakhatCards">
          {interviewCards.map((item, index) => (
            <div
              key={index}
              className={`abhyaskrammulakhatCard abhyaskrammulakhat${item.color}`}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="abhyaskrammulakhatCardIcon"
              />

              <h3 className="abhyaskrammulakhatCardTitle">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Table Heading */}
        <h2 className="abhyaskrammulakhatTableHeading">
          राज्यस्तरीय शिष्यवृत्ती
        </h2>

        {/* Table */}
        <div className="abhyaskrammulakhatTableWrapper">
          <table className="abhyaskrammulakhatTable">
            <colgroup>
              <col />
              <col />
            </colgroup>

            <thead>
              <tr>
                <th>घटक</th>
                <th>गुण</th>
              </tr>
            </thead>

            <tbody>
              {interviewTable.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.marks}</td>
                </tr>
              ))}

              <tr className="abhyaskrammulakhatTotalRow">
                <td>एकूण</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Formula */}
        <div className="abhyaskrammulakhatFormula">
          <h2 className="abhyaskrammulakhatFormulaHeading">
            अंतिम गुणवत्ता सूत्र
          </h2>

          <div className="abhyaskrammulakhatFormulaRow">
            <div className="abhyaskrammulakhatFormulaBox">लेखी गुण × 0.80</div>

            <div className="abhyaskrammulakhatFormulaDivider"></div>

            <div className="abhyaskrammulakhatFormulaBox">
              मुलाखत गुण × 0.20
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
