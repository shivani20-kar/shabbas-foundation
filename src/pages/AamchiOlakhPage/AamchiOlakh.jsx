import React from "react";
import "./AamchiOlakh.css";

import aboutImage from "./Images/aamchiolakh.png";

export default function AamchiOlakh() {
  return (
    <section className="aboutAamchiOlakh">
      <div className="aboutAamchiOlakhContainer">
        <h2 className="aboutAamchiOlakhTitle">आमची ओळख</h2>

        <h3 className="aboutAamchiOlakhSubtitle">
          शिक्षणातून उज्ज्वल भविष्य घडवण्याचा विश्वासार्ह प्रवास!
        </h3>

        <p className="aboutAamchiOlakhTopText">
          शाब्बास अकॅडमीची स्थापना विद्यार्थ्यांच्या सर्वांगीण विकासासाठी आणि
          गुणवत्तापूर्ण शिक्षण प्रत्येकापर्यंत पोहोचवण्याच्या उद्देशाने करण्यात
          आली आहे. साध्या सुरुवातीपासून आजपर्यंत, शाब्बास अकॅडमीने हजारो
          विद्यार्थ्यांच्या यशस्वी प्रवासाला दिशा दिली आहे.
        </p>

        <div className="aboutAamchiOlakhImageBox">
          <img
            src={aboutImage}
            alt="Aamchi Olakh"
            className="aboutAamchiOlakhImage"
          />
        </div>

        <div className="aboutAamchiOlakhBottomContent">
          <p>
            शाब्बास अकॅडमीची सुरुवात विद्यार्थ्यांना योग्य दिशा, दर्जेदार शिक्षण
            आणि वैयक्तिक मार्गदर्शन देण्याच्या उद्देशाने करण्यात आली.
            <br />
            ही अकॅडमी विद्यार्थ्यांच्या अभ्यासासोबतच त्यांच्या आत्मविश्वास,
            शिस्त आणि यशस्वी भविष्याच्या घडणीसाठी उभारली आहे.
            <br />
            आज शाब्बास अकॅडमी विद्यार्थ्यांच्या प्रगतीचा विश्वासार्ह आधार बनली
            आहे.
          </p>
        </div>
      </div>
    </section>
  );
}