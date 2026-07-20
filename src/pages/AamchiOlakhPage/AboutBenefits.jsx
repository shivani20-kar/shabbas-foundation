import React from "react";
import "./AboutBenefits.css";

import {
  FaCrown,
  FaMedal,
  FaBook,
  FaClipboardList,
  FaRegCopy,
  FaTrophy,
  FaAtom,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaCrown />,
    title: "गुणवत्तापूर्ण अभ्यास साहित्य",
    text: "NCERT व महाराष्ट्र राज्य मंडळाच्या अभ्यासक्रमावर आधारित दर्जेदार अध्ययन सामग्री.",
  },
  {
    icon: <FaMedal />,
    title: "स्वतःच्या प्रगतीचे सखोल विश्लेषण",
    text: "विद्यार्थ्यांच्या ताकदी व सुधारणे आवश्यक असलेल्या विषयांचे स्पष्ट मूल्यांकन.",
  },
  {
    icon: <FaBook />,
    title: "नियमित सराव व तयारी",
    text: "नियमित सराव चाचण्यांद्वारे परीक्षेची प्रभावी तयारी करण्याची संधी.",
  },
  {
    icon: <FaClipboardList />,
    title: "राज्यस्तरीय स्पर्धेचा अनुभव",
    text: "महाराष्ट्रभरातील विद्यार्थ्यांसोबत स्पर्धा करून स्वतःचे स्थान जाणून घ्या.",
  },
  {
    icon: <FaRegCopy />,
    title: "डिजिटल प्रमाणपत्र",
    text: "परीक्षेत सहभाग व यशाची नोंद करणारे अधिकृत डिजिटल प्रमाणपत्र.",
  },
  {
    icon: <FaTrophy />,
    title: "रोख बक्षिसे व विशेष गौरव",
    text: "उत्कृष्ट कामगिरी करणाऱ्या विद्यार्थ्यांना रोख पारितोषिके व सन्मान.",
  },
  {
    icon: <FaAtom />,
    title: "राज्यस्तरीय मुलाखतीची संधी",
    text: "यशस्वी विद्यार्थ्यांना राज्यस्तरावर आपली गुणवत्ता सादर करण्याची विशेष संधी.",
  },
];

export default function AboutBenefits() {
  return (
    <section className="aboutBenefits">
      <div className="aboutBenefitsContainer">
        <h2 className="aboutBenefitsTitle">
          विद्यार्थ्यांच्या सर्वांगीण विकासासाठी खास फायदे
        </h2>

        <p className="aboutBenefitsSubtitle">
          शाब्बास टॅलेंट सर्च परीक्षेमुळे विद्यार्थ्यांना अभ्यास, सराव,
          मूल्यांकन आणि राज्यस्तरीय स्पर्धेचा अनुभव मिळतो.
        </p>

        <div className="aboutBenefitsGrid">
          {benefits.map((item, index) => (
            <div
              className={`aboutBenefitsCard ${
                index === 6 ? "aboutBenefitsLastCard" : ""
              }`}
              key={index}
            >
              <div className="aboutBenefitsIcon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
