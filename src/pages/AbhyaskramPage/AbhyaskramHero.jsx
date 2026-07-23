import React from "react";
import "./AbhyaskramHero.css";

import bookImages from "./Images/Book.gif";

export default function AbhyaskramHero() {
  return (
    <section className="abhyaskramHeroSection">
      <div className="abhyaskramHeroContainer">
        {/* Main Heading */}

        <h2 className="abhyaskramHeroMainHeading">
          शाब्बास टॅलेंट सर्च एक्झाम
        </h2>
        <h3 className="abhyaskramHeroIntroTitle">प्रस्तावना</h3>

        {/* Introduction Card */}

        <div className="abhyaskramHeroIntroCard">
          <p className="abhyaskramHeroIntroText">
            21 व्या शतकातील जागतिक कौशल्ये, जीवन कौशल्ये आणि स्पर्धात्मक
            मानसिकता विकसित करण्याच्या उद्देशाने शाब्बास टॅलेंट सर्च एक्झाम
            (STS) ही अत्यंत पारदर्शक ऑनलाइन शिष्यवृत्ती परीक्षा आयोजित करण्यात
            येत आहे. MPSC, UPSC, JEE, NEET तसेच सर्व शासकीय स्पर्धा
            परीक्षांमध्ये यशस्वी व्हायचे असेल, तर त्याची भक्कम पायाभरणी शालेय
            शिक्षणातूनच होते. हाच धागा पकडून ही परीक्षा पूर्णपणे शालेय
            पाठ्यपुस्तकाधारित ठेवण्यात आली आहे.
          </p>
        </div>

        {/* Bottom Content */}

        <div className="abhyaskramHeroContent">
          <div className="abhyaskramHeroLeft">
            <h2 className="abhyaskramHeroTitle">
              परीक्षा पद्धती, गुणांकन व अभ्यासक्रम रचना
            </h2>

            <h4 className="abhyaskramHeroSubtitle">
              पारदर्शक, टक्केवारी आधारित आणि शैक्षणिक मानदंडांनुसार रचलेली
              परीक्षा प्रणाली
            </h4>

            <p className="abhyaskramHeroDescription">
              शाब्बास टॅलेंट सर्च एक्झाम ही पूर्णतः ऑनलाइन, वस्तुनिष्ठ (MCQ)
              पद्धतीवर आधारित परीक्षा असून इयत्तानिहाय अभ्यासक्रम रचना, स्पष्ट
              गुणांकन प्रणाली आणि टक्केवारी आधारित मूल्यांकनाद्वारे
              विद्यार्थ्यांची गुणवत्ता मोजली जाते.
            </p>

            <a
              href="https://shabbas.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="abhyaskramHeroButton"
            >
              परीक्षा नोंदणी करा
            </a>
          </div>

          <div className="abhyaskramHeroRight">
            <img
              src={bookImages}
              alt="Book Animation"
              className="abhyaskramHeroImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
