import React from "react";
import "./AamcheKshanachitra.css";

import image1 from "./Images/Frame 2087327953 (1).png";
import image2 from "./Images/Frame 2087327958.png";
import image3 from "./Images/Frame 2087327958 (1).png";
import image4 from "./Images/Frame 2087327958 (1).png";
import image5 from "./Images/Frame 2087327958 (1).png";

const firstRowImages = [
  {
    id: 1,
    image: image1,
    alt: "विद्यार्थी विज्ञान प्रकल्प तयार करताना",
  },
  {
    id: 2,
    image: image2,
    alt: "शाळेतील विद्यार्थ्यांचा समूह",
  },
  {
    id: 3,
    image: image3,
    alt: "विद्यार्थ्यांसाठी आयोजित उपक्रम",
  },
  {
    id: 4,
    image: image4,
    alt: "शैक्षणिक कार्यक्रम",
  },
  {
    id: 5,
    image: image5,
    alt: "विद्यार्थ्यांचा सहभाग",
  },
];

const secondRowImages = [
  {
    id: 6,
    image: image3,
    alt: "विद्यार्थ्यांचा शैक्षणिक उपक्रम",
  },
  {
    id: 7,
    image: image5,
    alt: "पुरस्कार वितरण सोहळा",
  },
  {
    id: 8,
    image: image1,
    alt: "विज्ञान प्रदर्शन",
  },
  {
    id: 9,
    image: image2,
    alt: "विद्यार्थ्यांचा समूह",
  },
  {
    id: 10,
    image: image4,
    alt: "शालेय कार्यक्रम",
  },
];

const GalleryRow = ({ images, className = "" }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="moment-gallery-wrapper">
      <div className={`moment-gallery-track ${className}`}>
        {duplicatedImages.map((item, index) => (
          <article
            className="moment-gallery-card"
            key={`${item.id}-${index}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="moment-gallery-image"
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </div>
  );
};

const MomentGallery = () => {
  return (
    <section className="moment-gallery-section">
      <div className="moment-gallery-heading">
        <h2>आमचे क्षणचित्र</h2>

        <p className="moment-gallery-description">
          स्पर्धा, पुरस्कार वितरण, साहित्य संमेलन आणि विद्यार्थ्यांच्या
          सर्जनशील उपक्रमांची झलक.
        </p>

        <p className="moment-gallery-subtitle">
          शिक्षण क्षेत्रातील अधिकृत सूचना, परिपत्रके आणि स्पर्धा माहिती
          नियमित अद्ययावत.
        </p>
      </div>

     <div className="moment-gallery-rows">
  <GalleryRow
    images={firstRowImages}
    className="moment-gallery-track-left-to-right"
  />

  <GalleryRow
    images={secondRowImages}
    className="moment-gallery-track-right-to-left"
  />
</div>
    </section>
  );
};

export default MomentGallery;