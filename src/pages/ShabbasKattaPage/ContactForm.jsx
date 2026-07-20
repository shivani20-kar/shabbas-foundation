import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contactForm">
      <div className="contactFormContainer">
        {/* Left Content */}

        <div className="contactFormLeft">
          <h2 className="contactFormTitle">संपर्क फॉर्म</h2>

          <p className="contactFormText">
            शाब्बास अकॅडमीमध्ये आम्ही शिक्षण, स्पर्धा परीक्षा आणि करिअर
            मार्गदर्शन यासाठी सदैव तत्पर आहोत. फॉर्म भरून आमच्याशी संपर्क करा
            आमची टीम तुमचं मार्गदर्शन करण्यास सदैव तयार आहे.
          </p>
        </div>

        {/* Right Form */}

        <div className="contactFormRight">
          <form className="contactFormBox">
            <div className="contactFormField">
              <label>नाव</label>

              <input type="text" placeholder="नाव" />
            </div>

            <div className="contactFormField">
              <label>ई-मेल</label>

              <input type="email" placeholder="ई-मेल" />
            </div>

            <div className="contactFormField">
              <label>मोबाईल क्रमांक</label>

              <input type="tel" placeholder="मोबाईल क्रमांक" />
            </div>

            <div className="contactFormField">
              <label>विषय / संदेश</label>

              <textarea rows="5" placeholder="विषय / संदेश" />
            </div>

            <button type="submit" className="contactFormButton">
              संदेश पाठवा →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
