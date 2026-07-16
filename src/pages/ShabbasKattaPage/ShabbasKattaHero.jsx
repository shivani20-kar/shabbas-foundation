import React from "react";
import "./ShabbasKattaHero.css";
import heroImage from "../ShabbasKattaPage/Images/shabbaskattahero.png";

const ShabbasKattaHero = () => {
  return (
    <section className="shabbaskattahero">
      <div className="shabbaskattaheroContainer">
        {/* Left */}
        <div className="shabbaskattaheroLeft">
          <h1 className="shabbaskattaheroTitle">
            “इथे फक्त अभ्यास नाही,
            <br />
            इथे घडतय भविष्य.” 
          </h1>

          <p className="shabbaskattaheroDescription">
            शाब्बास अकॅडमी घेऊन येत आहे एक खास डिजिटल मंच जिथे विद्यार्थी,
            शिक्षक आणि पालक एकत्र येतात - ज्ञान, अनुभव आणि प्रेरणा शेअर
            करण्यासाठी.
          </p>

          <h2 className="shabbaskattaheroSubTitle">
            तुम्हीही या यशस्वी प्रवासाचा भाग व्हा
          </h2>

          <a
            href="https://shabbas.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="shabbaskattaheroButton"
          >
            परीक्षा नोंदणी करा
          </a>
        </div>

        {/* Right */}

        <div className="shabbaskattaheroRight">
          <img
            src={heroImage}
            alt="Shabbas Katta"
            className="shabbaskattaheroImage"
          />
        </div>
      </div>
    </section>
  );
};

export default ShabbasKattaHero;
