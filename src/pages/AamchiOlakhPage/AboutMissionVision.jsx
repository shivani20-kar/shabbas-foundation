import React from "react";
import "./AboutMissionVision.css";

import mainImage from "./Images/Image No. 1.png";
import rightImage from "./Images/Image No.2.png";
import thirdImage from "./Images/Image No.3.png";
import fourthImage from "./Images/Image No.4.png";
import fifthImage from "./Images/Image No.5.png";

export default function AboutMissionVision() {
  return (
    <section className="aboutMissionVision">
      {/* Heading */}
      <div className="aboutMissionVisionHeader">
        <h2 className="aboutMissionVisionMainTitle">आमचं ध्येय आणि उद्दिष्ट</h2>

        <p className="aboutMissionVisionMainSubtitle">
          विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी आमची दूरदृष्टी आणि शिक्षणाचा
          विश्वासार्ह प्रवास.
        </p>
      </div>

      <div className="aboutMissionVisionContainer">
        {/* ================= First Row ================= */}

        <div className="aboutMissionVisionRow">
          <div className="aboutMissionVisionLeft">
            <img
              src={mainImage}
              alt="Mission"
              className="aboutMissionVisionImage"
            />
          </div>

          <div className="aboutMissionVisionRight">
            <h3 className="aboutMissionVisionHeading">आमचं ध्येय</h3>

            <h4 className="aboutMissionVisionQuote">
              “शिकणं आनंददायी बनवणं आणि प्रत्येक विद्यार्थ्यामधील सुप्त क्षमता
              उजळवणं.”
            </h4>

            <p className="aboutMissionVisionText">
              शाब्बास ॲकॅडमी ही पहिली ते आठवीपर्यंतच्या विद्यार्थ्यांसाठी ज्ञान,
              कौशल्य आणि मूल्याधारित शिक्षण देणारी एक सर्वसमावेशक डिजिटल
              शिक्षणसंस्था आहे. आम्ही प्रत्येक मुलामधील वेगळेपण आणि कौशल्य
              ओळखून, त्याला योग्य दिशेने विकसित करण्यावर विश्वास ठेवतो. आमच्या
              डिजिटल प्लॅटफॉर्मद्वारे विद्यार्थी मजेशीर पद्धतीने शिकतात, परीक्षा
              देतात आणि स्वतःच्या प्रगतीचा मागोवा ठेवतात.
              <br />
              <br />
              <strong>
                शिक्षणाला ताणमुक्त आणि प्रेरणादायी बनवणं – जेणेकरून विद्यार्थी
                फक्त गुणांसाठी नाही तर ज्ञानासाठी शिकतील.
              </strong>
            </p>
          </div>
        </div>

        {/* ================= Second Row ================= */}

        <div className="aboutMissionVisionRow aboutMissionVisionReverse">
          <div className="aboutMissionVisionRight">
            <h3 className="aboutMissionVisionHeading">आमचं उद्दिष्ट</h3>

            <p className="aboutMissionVisionText">
              “शाब्बास टॅलेंट सर्च एक्झामिनेशन”च्या माध्यमातून विद्यार्थ्यांमधील
              सुप्त गुणवत्ता ओळखून, त्यांना शिक्षणाच्या आधारावर योग्य करिअरची
              दिशा मिळवून देणे हे आमचं प्रमुख उद्दिष्ट आहे. लहान वयातच
              विद्यार्थ्यांच्या आवडी, क्षमता आणि बौद्धिक कल लक्षात घेऊन त्यांना
              विविध स्पर्धा परीक्षा, करिअर पर्याय आणि भविष्यातील संधी यांची ओळख
              करून दिली जाते. आमचा प्रयत्न आहे की प्रत्येक विद्यार्थी स्वतःची
              ताकद ओळखेल, आत्मविश्वासाने योग्य निर्णय घेईल आणि शैक्षणिक तसेच
              व्यावसायिक आयुष्यात यशस्वी होण्यासाठी सक्षम बनेल.
            </p>
          </div>

          <div className="aboutMissionVisionLeft">
            <img
              src={rightImage}
              alt="Vision"
              className="aboutMissionVisionImage"
            />
          </div>
        </div>

        {/* ================= Third Row ================= */}

        <div className="aboutMissionVisionRow">
          <div className="aboutMissionVisionLeft">
            <img
              src={thirdImage}
              alt="Innovation"
              className="aboutMissionVisionImage"
            />
          </div>

          <div className="aboutMissionVisionRight">
            <h3 className="aboutMissionVisionHeading">आमचे उपक्रम</h3>

            <h4 className="aboutMissionVisionQuote">“हिरकणी महोत्सव”</h4>

            <p className="aboutMissionVisionText">
              हिरकणी महोत्सव हा शाब्बास अकॅडमीचा विद्यार्थ्यांच्या कला, संस्कार
              आणि आत्मविश्वासाला नवी दिशा देणारा विशेष उपक्रम आहे. या
              महोत्सवामध्ये नृत्य, गायन, वक्तृत्व, अभिनय, चित्रकला, कथाकथन आणि
              विविध सांस्कृतिक स्पर्धांचे आयोजन केले जाते. विद्यार्थ्यांना
              स्वतःची कला सादर करण्यासाठी एक मोठे व्यासपीठ मिळते, ज्यामुळे
              त्यांचा आत्मविश्वास वाढतो आणि नेतृत्वगुण विकसित होतात. प्रत्येक
              विद्यार्थ्यामध्ये दडलेल्या प्रतिभेला ओळखून त्यांना प्रोत्साहन
              देणे, हीच या महोत्सवामागील मुख्य प्रेरणा आहे. आनंद, उत्साह आणि
              प्रेरणेने भरलेला हा उपक्रम विद्यार्थ्यांसाठी अविस्मरणीय अनुभव
              ठरतो.
            </p>
          </div>
        </div>

        {/* ================= Fourth Row ================= */}

        <div className="aboutMissionVisionRow aboutMissionVisionReverse">
          <div className="aboutMissionVisionRight">
            {/* <h3 className="aboutMissionVisionHeading">
              विद्यार्थी केंद्रित शिक्षण
            </h3> */}

            <h4 className="aboutMissionVisionQuote">“समर कॅम्प”</h4>

            <p className="aboutMissionVisionText">
              शाब्बास अकॅडमीचा समर कॅम्प हा विद्यार्थ्यांच्या सुट्टीला शिक्षण,
              सर्जनशीलता आणि मनोरंजनाची जोड देणारा विशेष उपक्रम आहे. या
              कॅम्पमध्ये विविध शैक्षणिक अ‍ॅक्टिव्हिटी, व्यक्तिमत्व विकास सत्रे,
              क्रिएटिव्ह वर्कशॉप्स, खेळ, हस्तकला, टीम बिल्डिंग गेम्स आणि
              संवादकौशल्य विकसित करणारे उपक्रम घेतले जातात. विद्यार्थ्यांना नवीन
              गोष्टी शिकण्यासोबतच मैत्री, सहकार्य आणि आत्मविश्वास वाढवण्याची
              संधी मिळते. अभ्यासाच्या चौकटीबाहेर जाऊन आनंदी वातावरणात शिकण्याचा
              अनुभव देणे आणि विद्यार्थ्यांच्या सर्वांगीण विकासाला चालना देणे, हा
              या समर कॅम्पचा मुख्य उद्देश आहे.
            </p>
          </div>

          <div className="aboutMissionVisionLeft">
            <img
              src={fourthImage}
              alt="Student"
              className="aboutMissionVisionImage"
            />
          </div>
        </div>

        {/* ================= Fifth Row ================= */}

        <div className="aboutMissionVisionRow">
          <div className="aboutMissionVisionLeft">
            <img
              src={fifthImage}
              alt="Success"
              className="aboutMissionVisionImage"
            />
          </div>

          <div className="aboutMissionVisionRight">
            {/* <h3 className="aboutMissionVisionHeading">
              यशस्वी भविष्याची तयारी
            </h3> */}
            <h4 className="aboutMissionVisionQuote">“रोबोटिक्स”</h4>

            <p className="aboutMissionVisionText">
              शाब्बास अकॅडमीचा रोबोटिक्स उपक्रम हा विद्यार्थ्यांना आधुनिक
              तंत्रज्ञान, विज्ञान आणि नवकल्पनांची ओळख करून देणारा भविष्याभिमुख
              कार्यक्रम आहे. या उपक्रमामध्ये विद्यार्थ्यांना रोबोट तयार करणे,
              सेन्सर्स, मोटर्स, कोडिंग आणि ऑटोमेशन यांसारख्या तांत्रिक संकल्पना
              प्रत्यक्ष अनुभवातून शिकवल्या जातात. लहान वयातच विज्ञान आणि
              तंत्रज्ञानाची आवड निर्माण करून विद्यार्थ्यांमध्ये तार्किक
              विचारशक्ती, समस्या सोडवण्याची क्षमता आणि क्रिएटिव्हिटी विकसित
              करण्यावर भर दिला जातो. विविध प्रोजेक्ट्स, मॉडेल्स आणि प्रयोगांच्या
              माध्यमातून विद्यार्थी शिकताना आनंद घेतात आणि भविष्यातील
              तंत्रज्ञानाच्या जगासाठी स्वतःला तयार करतात.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
