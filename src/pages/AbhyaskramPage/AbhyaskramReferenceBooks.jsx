import React from "react";
import "./AbhyaskramReferenceBooks.css";

import booksGif from "./Images/books.gif";

const referenceCards = [
  {
    title: "महाराष्ट्र राज्य बोर्ड - Balbharati (इयत्ता 1 ते 8)",
    color: "Yellow",
    points: [
      "अधिकृत शालेय पाठ्यपुस्तके",
      "मराठी व सेमी इंग्रजी माध्यमासाठी",
      "विषय: भाषा, गणित, पर्यावरण/विज्ञान, इतिहास, भूगोल",
    ],
    footer: "अधिकृत संकेतस्थळ:",
    link: "https://balbharati.in",
    background: "#FFD129",
  },
  {
    title: "CBSE - NCERT Textbooks (Class 1-8)",
    color: "Green",
    points: [
      "English Medium विद्यार्थ्यांसाठी",
      "अधिकृत NCERT पाठ्यपुस्तके",
      "Subjects: English, Mathematics, EVS, Science, Social Science",
    ],
    footer: "NCERT अधिकृत वेबसाइट",
    link: "https://ncert.nic.in",
    background: "#C2FF29",
  },
  {
    title: "अध्ययन निष्पत्ती",
    subtitle: "परीक्षा रचना खालील अध्ययन निष्पत्तीवर आधारित असेल:",
    color: "Blue",
    left: ["संकल्पनात्मक समज", "वाचन आकलन क्षमता", "गणिती तर्कशक्ती"],
    right: [
      "वैज्ञानिक दृष्टिकोन",
      "सामाजिक व नागरिक जाणिवा",
      "विश्लेषण व निर्णय क्षमता",
    ],
    footer: "अधिकृत संकेतस्थळ:",
    link: "https://shorturl.at/lutr2",
    background: "#29EDFF",
  },
  {
    title: "राष्ट्रीय शैक्षणिक धोरण 2020 (NEP 2020)",
    color: "Pink",
    points: [
      "Competency-Based Assessment",
      "Critical Thinking",
      "Experiential Learning",
      "Holistic Development",
      "FLN (Foundational Literacy & Numeracy)",
    ],
    footer: "अधिकृत संकेतस्थळ:",
    link: "https://shorturl.at/9BFzn",
    background: "#FF66F5",
  },
];

export default function AbhyaskramReferenceBooks() {
  return (
    <section className="abhyaskramReferenceSection">
      <div className="abhyaskramReferenceContainer">
        <div className="abhyaskramReferenceHeadingWrap">
          <h2 className="abhyaskramReferenceHeading">
            अधिकृत संदर्भ पुस्तके व अभ्यास स्रोत
          </h2>

          <img src={booksGif} alt="Books" className="abhyaskramReferenceGif" />
        </div>

        <p className="abhyaskramReferenceDescription">
          शाब्बास टॅलेंट सर्च एक्झाम ही पूर्णतः अधिकृत शालेय पाठ्यपुस्तकांवर
          आधारित, अध्ययन निष्पत्ती अनुभव व राष्ट्रीय शैक्षणिक धोरण 2020 च्या
          तत्त्वांवर आधारित राज्यस्तरीय ऑनलाइन परीक्षा आहे.
        </p>

        <div className="abhyaskramReferenceGrid">
          {referenceCards.map((card, index) => (
            <div key={index} className="abhyaskramReferenceCard">
              <div
                className="abhyaskramReferenceCardHeader"
                style={{ background: card.background }}
              >
                {card.title}
              </div>

              <div className="abhyaskramReferenceCardBody">
                {card.subtitle && (
                  <p className="abhyaskramReferenceSubtitle">{card.subtitle}</p>
                )}

                {card.left ? (
                  <div className="abhyaskramReferenceTwoCol">
                    <ul>
                      {card.left.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <ul>
                      {card.right.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul>
                    {card.points.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="abhyaskramReferenceFooter">
                {card.footer}{" "}
                <a href={card.link} target="_blank" rel="noreferrer">
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="abhyaskramReferenceBottomCard">
          <div className="abhyaskramReferenceBottomHeader">
            चालू घडामोडी संदर्भ
          </div>

          <div className="abhyaskramReferenceBottomBody">
            <ul>
              <li>महाराष्ट्र शासन अधिकृत संकेतस्थळ</li>
            </ul>

            <a
              href="https://www.maharashtra.gov.in"
              target="_blank"
              rel="noreferrer"
            >
              https://www.maharashtra.gov.in
            </a>

            <ul>
              <li>भारत सरकार अधिकृत पोर्टल</li>
            </ul>

            <a href="https://www.india.gov.in" target="_blank" rel="noreferrer">
              https://www.india.gov.in
            </a>

            <ul>
              <li>PIB (Press Information Bureau)</li>
            </ul>

            <a href="https://pib.gov.in" target="_blank" rel="noreferrer">
              https://pib.gov.in
            </a>
          </div>

          <div className="abhyaskramReferenceBottomFooter">
            चालू घडामोडी प्रश्न खालील शासकीय स्रोतांवर आधारित असतील.
          </div>
        </div>
      </div>
    </section>
  );
}
