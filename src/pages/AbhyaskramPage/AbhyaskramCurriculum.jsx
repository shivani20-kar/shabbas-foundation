// import React from "react";
// import "./AbhyaskramCurriculum.css";

// // import img12 from "./Images/Book 1 (1) (1).gif";
// // import img345 from "./Images/Book 1 (1) (1).gif";
// // import img678 from "./Images/Book 1 (1) (1).gif";

// const curriculumData = [
//   {
//     id: 1,
//     title: "इयत्ता 1 ली व 2 री",
//     image: img12,
//     reverse: false,
//     points: [
//       "भाषा क्षमता",
//       "संख्या ज्ञान गणितीय क्रिया",
//       "चित्राधारित समज",
//       "स्वच्छता, कुटुंब, शाळा",
//       "मूलभूत तर्कशक्ती",
//     ],
//   },
//   {
//     id: 2,
//     title: "इयत्ता 3 री, 4 थी व 5 वी",
//     image: img345,
//     reverse: true,
//     points: [
//       "गद्य/पद्य आकलन भाषिक कौशल्य",
//       "चारही गणिती क्रिया",
//       "प्राथमिक विज्ञान",
//       "तालुका, जिल्हा, महाराष्ट्र व भारत परिचय",
//       "चालू घडामोडी (राज्य स्तर)",
//       "तार्किक नमुना व विश्लेषण",
//     ],
//   },
//   {
//     id: 3,
//     title: "इयत्ता 6 वी, 7 वी व 8 वी",
//     image: img678,
//     reverse: false,
//     points: [
//       "प्रगत वाचन आकलन",
//       "बीजगणित व भूमितीची मूलतत्त्वे",
//       "विज्ञान (भौतिक, रसायन, जीवशास्त्र)",
//       "भारतीय इतिहास व भूगोल",
//       "शासन योजना व चालू घडामोडी",
//       "विश्लेषण क्षमता व निर्णय कौशल्य",
//     ],
//   },
// ];

// export default function AbhyaskramCurriculum() {
//   return (
//     <section className="abhyaskramCurriculumSection">
//       <div className="abhyaskramCurriculumContainer">
//         {/* Heading */}

//         <h2 className="abhyaskramCurriculumHeading">
//           अभ्यासक्रम <span>(NCF 2010 & NEP 2020 आधारित)</span>
//         </h2>

//         {/* Sticky Cards */}

//         <div className="abhyaskramCurriculumWrapper">
//           {curriculumData.map((item, index) => (
//             <div
//               key={item.id}
//               className={`abhyaskramCurriculumSticky ${
//                 item.reverse ? "abhyaskramCurriculumReverse" : ""
//               }`}
//               style={{
//                 top: `${index * 4}vh`,
//                 zIndex: index + 1,
//               }}
//             >
//               <div className="abhyaskramCurriculumCard">
//                 {/* Image */}

//                 <div className="abhyaskramCurriculumImageBox">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="abhyaskramCurriculumImage"
//                   />
//                 </div>

//                 {/* Content */}

//                 <div className="abhyaskramCurriculumContent">
//                   <h3 className="abhyaskramCurriculumTitle">{item.title}</h3>

//                   <ul className="abhyaskramCurriculumList">
//                     {item.points.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>

//                   <button className="abhyaskramCurriculumButton">
//                     परीक्षा नोंदणी करा
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
