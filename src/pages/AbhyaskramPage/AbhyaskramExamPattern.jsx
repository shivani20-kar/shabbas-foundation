import React from "react";
import "./AbhyaskramExamPattern.css";

import {
  Monitor,
  ClipboardList,
  Medal,
  ShieldCheck,
  Clock3,
  ChartColumn,
} from "lucide-react";

export default function AbhyaskramExamPattern() {
  const patternData = [
    {
      icon: <Monitor size={70} strokeWidth={1.8} />,
      title: "पूर्णतः ऑनलाइन",
    },
    {
      icon: <ClipboardList size={70} strokeWidth={1.8} />,
      title: "वस्तुनिष्ठ (MCQ) प्रश्न",
    },
    {
      icon: <Medal size={70} strokeWidth={1.8} />,
      title: "प्रत्येक प्रश्नास 2 गुण",
    },
    {
      icon: <ShieldCheck size={70} strokeWidth={1.8} />,
      title: "निगेटिव्ह मार्किंग नाही",
    },
    {
      icon: <Clock3 size={70} strokeWidth={1.8} />,
      title: "Auto Submit प्रणाली",
    },
    {
      icon: <ChartColumn size={70} strokeWidth={1.8} />,
      title: "प्रश्न कठीणता: 30% सोपे | 40% मध्यम | 30% उच्च",
    },
  ];

  return (
    <section className="abhyaskramExamPatternSection">
      <div className="abhyaskramExamPatternContainer">
        <div className="abhyaskramExamPatternGrid">
          {patternData.map((item, index) => (
            <div className="abhyaskramExamPatternCard" key={index}>
              <div className="abhyaskramExamPatternIcon">{item.icon}</div>

              <h3 className="abhyaskramExamPatternTitle">{item.title}</h3>

              {item.subtitle && (
                <p className="abhyaskramExamPatternSubtitle">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        <a
          href="https://shabbas.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="abhyaskramExamPatternButton"
        >
          परीक्षा नोंदणी करा
        </a>
      </div>
    </section>
  );
}
