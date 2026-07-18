import React from "react";
import "./VidhyarthiAnubhav.css";

import vidhyarthiImage from "./Images/vidhyarthianubhav.png";

import vidhyarthi1 from "./Images/stu1.png";
import vidhyarthi2 from "./Images/stu2.png";
import vidhyarthi3 from "./Images/stu3.png";
import vidhyarthi4 from "./Images/stu4.png";
import vidhyarthi5 from "./Images/stu5.png";

const videos = [
  {
    thumbnail: vidhyarthi1,
    title: "प्रीती जाधव",
    subtitle: "इयत्ता 5 वी",
    link: "https://youtube.com/shorts/nTVyJoKk2Lk?feature=share",
  },
  {
    thumbnail: vidhyarthi2,
    title: "रिया माळी",
    subtitle: "इयत्ता 7 वी",
    link: "https://youtube.com/shorts/j1bRLVXfI_I?feature=share",
  },
  {
    thumbnail: vidhyarthi3,
    title: "राज यादव",
    subtitle: "इयत्ता 4 थी",
    link: "https://youtube.com/shorts/snwvUrPWCgE",
  },
  {
    thumbnail: vidhyarthi4,
    title: "प्रिया जाधव",
    subtitle: "इयत्ता 7 वी",
    link: "https://youtube.com/shorts/FUt47Zj0s9w?feature=share",
  },
  {
    thumbnail: vidhyarthi5,
    title: "राहुल जाधव",
    subtitle: "इयत्ता 5 वी",
    link: "https://youtube.com/shorts/oF26X_xR2XM?feature=share",
  },
];

export default function VidhyarthiAnubhav() {
  return (
    <section className="vidhyarthianubhav">
      <div className="vidhyarthianubhavTop">
        <div className="vidhyarthianubhavImageBox">
          <img
            src={vidhyarthiImage}
            alt="विद्यार्थी अनुभव"
            className="vidhyarthianubhavImage"
          />
        </div>

        <div className="vidhyarthianubhavContent">
          <h2 className="vidhyarthianubhavTitle">विद्यार्थी अनुभव</h2>

          <p className="vidhyarthianubhavText">
            यशस्वी विद्यार्थ्यांच्या गोष्टी,
            <br />
            त्यांचा प्रवास आणि परीक्षा
            <br />
            अनुभव
          </p>
        </div>
      </div>

      <div className="vidhyarthianubhavVideos">
        {videos.map((item, index) => (
          <div className="vidhyarthianubhavCard" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="vidhyarthianubhavThumb">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="vidhyarthianubhavVideoImage"
                />

                <div className="vidhyarthianubhavPlay">▶</div>
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
