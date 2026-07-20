import React from "react";
import "./AboutFAQ.css";

const faqData = [
  {
    question: "STS 2027 म्हणजे काय?",
    answer:
      "STS 2027 ही इयत्ता 1 ली ते 8 वीच्या विद्यार्थ्यांसाठी आयोजित करण्यात येणारी महाराष्ट्राची राज्यस्तरीय ऑनलाइन गुणवत्ता शोध परीक्षा आहे.",
  },
  {
    question: "परीक्षा कोणासाठी आहे?",
    answer:
      "महाराष्ट्र बोर्ड व CBSE बोर्डच्या इयत्ता 1 ली ते 8 वीच्या सर्व विद्यार्थ्यांसाठी.",
  },
  {
    question: "परीक्षा कोणत्या माध्यमात उपलब्ध आहे?",
    answer: ["मराठी", "English"],
  },
  {
    question: "परीक्षा ऑफलाइन आहे की ऑनलाइन?",
    answer: "परीक्षा पूर्णतः ऑनलाइन आहे.",
  },
  {
    question: "परीक्षा कुठे द्यावी लागेल?",
    answer:
      "विद्यार्थी घरबसल्या मोबाईल, टॅबलेट, लॅपटॉप किंवा संगणकावर परीक्षा देऊ शकतात.",
  },
  {
    question: "परीक्षा वेळ काय आहे?",
    answer:
      "सकाळी 09:00 ते रात्री 09:00 पर्यंत परीक्षा देण्याची सुविधा उपलब्ध आहे.",
  },
  {
    question: "विद्यार्थी कोणत्याही वेळी परीक्षा देऊ शकतो का?",
    answer: "होय, दिलेल्या कालावधीत एकदाच परीक्षा देता येईल.",
  },
  {
    question: "परीक्षा स्वरूप काय असेल?",
    answer: "सर्व प्रश्न MCQ स्वरूपातील असतील.",
  },

  {
    question: "प्रत्येक प्रश्नाला किती गुण असतील?",
    answer: "प्रत्येक प्रश्नाला 2 गुण.",
  },

  {
    question: "निगेटिव्ह मार्किंग आहे का?",
    answer: "नाही, निगेटिव्ह मार्किंग नाही.",
  },

  {
    question: "पात्रतेसाठी किती गुण आवश्यक आहेत?",
    answer: "35% गुण मिळवणे आवश्यक आहे.",
  },

  {
    question: "स्वतंत्र मार्गदर्शक पुस्तक आवश्यक आहे का?",
    answer: "नाही, स्वतंत्र मार्गदर्शक पुस्तक आवश्यक नाही.",
  },
  {
    question: "कोणत्या पुस्तकांचा अभ्यास करावा?",
    answer: ["NCERT", "महाराष्ट्र राज्य मंडळ"],
  },
  {
    question: "मेडल कोणाला मिळेल?",
    answer: "85% पेक्षा जास्त गुण मिळवणाऱ्या विद्यार्थ्यांना.",
  },
  {
    question: "Bronze Medal कोणाला मिळेल?",
    answer: "85% ते 90% गुण मिळवणाऱ्या विद्यार्थ्यांना.",
  },
  {
    question: "Silver Medal कोणाला मिळेल?",
    answer: "91% ते 95% गुण मिळवणाऱ्या विद्यार्थ्यांना.",
  },
  {
    question: "Gold Medal कोणाला मिळेल?",
    answer: "96% ते 100% गुण मिळवणाऱ्या विद्यार्थ्यांना.",
  },
];

export default function AboutFAQ() {
  return (
    <section className="aboutFaqSection">
      <div className="aboutFaqContainer">
        <h2 className="aboutFaqHeading">वारंवार विचारले जाणारे प्रश्न</h2>

        <p className="aboutFaqSubHeading">
          विद्यार्थी आणि पालकांकडून सर्वाधिक विचारले जाणारे प्रश्न.
        </p>

        <div className="aboutFaqWrapper">
          {faqData.map((item, index) => (
            <div className="aboutFaqCard" key={index}>
              <div className="aboutFaqQuestion">
                <span>{item.question}</span>

                <div className="aboutFaqIcon">
                  <span className="aboutFaqHorizontal"></span>
                  <span className="aboutFaqVertical"></span>
                </div>
              </div>

              <div className="aboutFaqAnswer">
                {Array.isArray(item.answer) ? (
                  <ul className="aboutFaqList">
                    {item.answer.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
