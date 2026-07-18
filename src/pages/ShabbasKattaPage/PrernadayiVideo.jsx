import React from "react";
import "./PrernadayiVideo.css";

import prernadayiImage from "./Images/prernadayi.png";

// import video1 from "./Images/video1.png";
// import video2 from "./Images/video2.png";
// import video3 from "./Images/video3.png";
// import video4 from "./Images/video4.png";
// import video5 from "./Images/video5.png";

// const videos = [
//   {
//     thumbnail: video1,
//     title: "प्रेरणादायी व्हिडिओ १", 
//     subtitle: "करिअर मार्गदर्शन",
//     link: "https://youtube.com/shorts/9a4RiG59wow",
//   },
//   {
//     thumbnail: video2,
//     title: "प्रेरणादायी व्हिडिओ २",
//     subtitle: "यशासाठी प्रेरणा",
//     link: "https://youtube.com/shorts/7qncpihRI88",
//   },
//   {
//     thumbnail: video3,
//     title: "प्रेरणादायी व्हिडिओ ३",
//     subtitle: "आत्मविश्वास वाढवा",
//     link: "https://youtube.com/shorts/nO-kGfZNKrA",
//   },
//   {
//     thumbnail: video4,
//     title: "प्रेरणादायी व्हिडिओ ४",
//     subtitle: "प्रेरणादायी संदेश",
//     link: "#",
//   },
//   {
//     thumbnail: video5,
//     title: "प्रेरणादायी व्हिडिओ ५",
//     subtitle: "उज्ज्वल भविष्य",
//     link: "#",
//   },
// ];

export default function PrernadayiVideo() {
  return (
    <section className="prernadayiVideo">
      {/* Top Section */}

      <div className="prernadayiVideoTop">
        <div className="prernadayiVideoImageBox">
          <img
            src={prernadayiImage}
            alt="प्रेरणादायी व्हिडिओ"
            className="prernadayiVideoImage"
          />
        </div>

        <div className="prernadayiVideoContent">
          <h2 className="prernadayiVideoTitle">प्रेरणादायी व्हिडिओ</h2>

          <p className="prernadayiVideoText">
            करिअर मार्गदर्शन,
            <br />
            आत्मविश्वास वाढवणारे
            <br />
            संदेश, यशासाठी प्रेरणा
          </p>
        </div>
      </div>

      {/* Video Cards */}

      {/* <div className="prernadayiVideoCards">
        {videos.map((item, index) => (
          <div className="prernadayiVideoCard" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="prernadayiVideoThumb">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="prernadayiVideoThumbImage"
                />

                <div className="prernadayiVideoPlay">▶</div>
              </div>
            </a>

            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
