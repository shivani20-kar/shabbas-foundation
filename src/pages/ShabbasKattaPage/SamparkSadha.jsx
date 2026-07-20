import React from "react";
import "./SamparkSadha.css";

import {
  FaUniversity,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaPlus,
} from "react-icons/fa";

import student1 from "./Images/stu1.png";
import student2 from "./Images/stu2.png";
import student3 from "./Images/stu3.png";
import student4 from "./Images/stu4.png";
import student5 from "./Images/stu5.png";

const students = [student1, student2, student3, student4, student5];

export default function SamparkSadha() {
  return (
    <section className="samparkSadha">
      <h2 className="samparkSadhaTitle">संपर्क साधा</h2>

      <p className="samparkSadhaSubTitle">
        तुमचे प्रश्न, शंका किंवा सूचना – आम्हाला कळवा!
      </p>

      <div className="samparkSadhaContainer">
        {/* LEFT */}

        <div className="samparkSadhaLeft">
          <div className="samparkSadhaInfo">
            <div className="samparkSadhaRow">
              <FaUniversity className="samparkSadhaIcon" />
              <span>शाब्बास अकॅडमी</span>
            </div>

            <div className="samparkSadhaRow">
              <FaMapMarkerAlt className="samparkSadhaIcon" />
              <span>५२३ ब, करंजी पेठ, करंजे, सातारा.</span>
            </div>

            <div className="samparkSadhaRow">
              <FaPhoneAlt className="samparkSadhaIcon" />
              <span>+91 98765 43210</span>
            </div>

            <div className="samparkSadhaRow">
              <FaEnvelope className="samparkSadhaIcon" />
              <span>info@shabbasacademy.com</span>
            </div>
          </div>

          <div className="samparkSadhaTrust">
            <h3>विद्यार्थ्यांचा विश्वास</h3>

            <div className="samparkSadhaAvatars">
              {students.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt=""
                  className="samparkSadhaAvatar"
                />
              ))}

              <div className="samparkSadhaMore">
                <FaPlus />
              </div>
            </div>

            <div className="samparkSadhaRating">
              <FaStar />
              <span>Excellent 4.9 out of 5</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="samparkSadhaRight">
          <iframe
            title="Shabbas Academy"
            src="https://maps.google.com/maps?q=Shabbas%20Academy%20Satara&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
