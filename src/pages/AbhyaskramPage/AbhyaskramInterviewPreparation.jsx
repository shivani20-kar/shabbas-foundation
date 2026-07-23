import React from "react";
import "./AbhyaskramInterviewPreparation.css";

const preparationData = [
  {
    heading: "इयत्ता 1 ली ते 4 थी – मुलाखत तयारी",
    leftTitle: "मुलाखतीत काय पाहिले जाईल?",
    leftPoints: [
      "आत्मविश्वासाने बोलणे",
      "स्वतःची ओळख करून देणे",
      "कुटुंबाविषयी थोडी माहिती",
      "सामान्य ज्ञानाची प्राथमिक माहिती",
      "माझ्या परिसराविषयी विचार मांडणे",
      "छंद, आवडी व मूल्ये",
    ],
    rightTitle: "तयारी कशी करावी?",
    rightPoints: [
      "स्वतःची ओळख सरावावी",
      "शाळा, कुटुंब व आवडींबद्दल बोलता यावे",
      "राष्ट्रध्वज, राष्ट्रगीत यांची माहिती असावी",
      "आत्मविश्वासाने व स्पष्ट बोलावे",
      "स्वतःचे विचार मांडण्याचा प्रयत्न करावा",
      "पाठांतरापेक्षा समजून उत्तर द्यावे",
    ],
  },

  {
    heading: "इयत्ता 5 वी ते 8 वी – मुलाखत तयारी",
    leftTitle: "मुलाखतीत काय पाहिले जाईल?",
    leftPoints: [
      "आत्मविश्वास व संवाद कौशल्य",
      "तार्किक व विश्लेषणात्मक विचार",
      "सामान्य ज्ञान व सामाजिक जाण",
      "नेतृत्व व निर्णयक्षमता",
      "डिजिटल साक्षरता",
      "व्यक्तिमत्व व सकारात्मक दृष्टिकोन",
    ],
    rightTitle: "तयारी कशी करावी?",
    rightPoints: [
      "Introduce Yourself चा सराव करावा",
      "चालू घडामोडी व सामान्य ज्ञान वाचावे",
      "पाठांतराऐवजी प्रश्नांवर विचार करावा",
      "डिजिटल सुरक्षिततेची जाण",
      "आत्मविश्वासाने व स्पष्टपणे उत्तर द्यावे",
      "पर्यावरण व सामाजिक समज वाढवावी",
    ],
  },
];

export default function AbhyaskramInterviewPreparation() {
  return (
    <section className="abhyaskramInterviewSection">
      <div className="abhyaskramInterviewContainer">

        {preparationData.map((item, index) => (
          <div
            className="abhyaskramInterviewBlock"
            key={index}
          >
            <h2 className="abhyaskramInterviewHeading">
              {item.heading}
            </h2>

            <div className="abhyaskramInterviewCard">

              <div className="abhyaskramInterviewColumn">
                <h3 className="abhyaskramInterviewTitle">
                  {item.leftTitle}
                </h3>

                <ul className="abhyaskramInterviewList">
                  {item.leftPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="abhyaskramInterviewColumn">
                <h3 className="abhyaskramInterviewTitle">
                  {item.rightTitle}
                </h3>

                <ul className="abhyaskramInterviewList">
                  {item.rightPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}