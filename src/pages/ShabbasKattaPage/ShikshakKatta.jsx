import React from "react";
import "./ShikshakKatta.css";

import teacherImage from "./Images/teacherkatta.png";
import thumb1 from "./Images/thumb1.png";
import thumb2 from "./Images/thumb2.png";
import thumb3 from "./Images/thumb3.png";

const videos = [
  {
    thumbnail: thumb1,
    title: "श्री रवींद्र खंदारे",
    subtitle: "उपशिक्षणाधिकारी",
    link: "https://youtube.com/shorts/9a4RiG59wow",
  },
  {
    thumbnail: thumb2,
    title: "श्री प्रदीप कांबळे",
    subtitle: "सुप्रसिद्ध लेखक कवी व व्याख्याते",
    link: "https://youtube.com/shorts/7qncpihRI88?feature=share",
  },
  {
    thumbnail: thumb3,
    title: "श्री श्रीकृष्ण ढवळी",
    subtitle: "सुप्रसिद्ध मार्गदर्शक",
    link: "https://youtube.com/shorts/nO-kGfZNKrA",
  },
];

export default function ShikshakKatta() {
  return (
    <section className="shikshakkatta">
      {/* Top */}
      <div className="shikshakkattaTop">
        <div className="shikshakkattaImageBox">
          <img
            src={teacherImage}
            alt="Teacher Katta"
            className="shikshakkattaImage"
          />
        </div>

        <div className="shikshakkattaContent">
          <h2 className="shikshakkattaTitle">शिक्षक कट्टा</h2>

          <p className="shikshakkattaText">
            अनुभवी शिक्षकांचे मार्गदर्शन,
            <br />
            अभ्यास टिप्स आणि स्पर्धा परीक्षेची तयारी
          </p>
        </div>
      </div>

      {/* Videos */}
      <div className="shikshakkattaVideos">
        {videos.map((item, index) => (
          <div className="shikshakkattaCard" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="shikshakkattaThumb">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="shikshakkattaVideoImage"
                />

                <div className="shikshakkattaPlay">▶</div>
              </div>
            </a>

            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
