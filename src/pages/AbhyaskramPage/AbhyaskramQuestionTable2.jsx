import React from "react";
import "./AbhyaskramQuestionTable2.css";

const tableData = [
  {
    standard: "इयत्ता 5 वी",
    questions: "75 प्रश्न",
    marks: "150 गुण",
    time: "90 मिनिटे",
    marathi: "12 प्रश्न (24 गुण)",
    english: "12 प्रश्न (24 गुण)",
    maths: "15 प्रश्न (30 गुण)",
    science: "10 प्रश्न (20 गुण)",
    social: "10 प्रश्न (20 गुण)",
    gk: "6 प्रश्न (12 गुण)",
    reasoning: "5 प्रश्न (10 गुण)",
    future: "5 प्रश्न (10 गुण)",
  },
  {
    standard: "इयत्ता 6 वी",
    questions: "75 प्रश्न",
    marks: "150 गुण",
    time: "90 मिनिटे",
    marathi: "12 प्रश्न (24 गुण)",
    english: "12 प्रश्न (24 गुण)",
    maths: "15 प्रश्न (30 गुण)",
    science: "10 प्रश्न (20 गुण)",
    social: "10 प्रश्न (20 गुण)",
    gk: "6 प्रश्न (12 गुण)",
    reasoning: "5 प्रश्न (10 गुण)",
    future: "5 प्रश्न (10 गुण)",
  },
  {
    standard: "इयत्ता 7 वी",
    questions: "100 प्रश्न",
    marks: "200 गुण",
    time: "120 मिनिटे",
    marathi: "15 प्रश्न (30 गुण)",
    english: "15 प्रश्न (30 गुण)",
    maths: "20 प्रश्न (40 गुण)",
    science: "15 प्रश्न (30 गुण)",
    social: "10 प्रश्न (20 गुण)",
    gk: "8 प्रश्न (16 गुण)",
    reasoning: "10 प्रश्न (20 गुण)",
    future: "7 प्रश्न (14 गुण)",
  },
  {
    standard: "इयत्ता 8 वी",
    questions: "100 प्रश्न",
    marks: "200 गुण",
    time: "120 मिनिटे",
    marathi: "15 प्रश्न (30 गुण)",
    english: "15 प्रश्न (30 गुण)",
    maths: "20 प्रश्न (40 गुण)",
    science: "15 प्रश्न (30 गुण)",
    social: "10 प्रश्न (20 गुण)",
    gk: "8 प्रश्न (16 गुण)",
    reasoning: "10 प्रश्न (20 गुण)",
    future: "7 प्रश्न (14 गुण)",
  },
];

export default function AbhyaskramQuestionTable2() {
  return (
    <section className="abhyaskramQuestionTable2Section">
      <div className="abhyaskramQuestionTable2Container">

        <h2 className="abhyaskramQuestionTable2Heading">
          इयत्ता ५ वी ते इयत्ता ८ वी
        </h2>

        <div className="abhyaskramQuestionTable2Wrapper">
          <table className="abhyaskramQuestionTable2">
            <thead>
              <tr>
                <th>इयत्ता</th>
                <th>प्रश्नसंख्या</th>
                <th>एकूण गुण</th>
                <th>वेळ</th>
                <th>मराठी</th>
                <th>English</th>
                <th>गणित</th>
                <th>विज्ञान</th>
                <th>सामाजिक शास्त्रे</th>
                <th>सामान्य ज्ञान</th>
                <th>तार्किक विचार</th>
                <th>जीवनकौशल्ये व Future Skills</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.standard}</td>
                  <td>{row.questions}</td>
                  <td className="abhyaskramQuestionTable2Bold">{row.marks}</td>
                  <td>{row.time}</td>
                  <td>{row.marathi}</td>
                  <td>{row.english}</td>
                  <td>{row.maths}</td>
                  <td>{row.science}</td>
                  <td>{row.social}</td>
                  <td>{row.gk}</td>
                  <td>{row.reasoning}</td>
                  <td>{row.future}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}