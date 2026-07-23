import React from "react";
import "./AbhyaskramQuestionTable.css";

import bookGif from "./Images/books.gif";

const tableData = [
  {
    standard: "इयत्ता 1 ली",
    questions: "40 प्रश्न",
    marks: "80 गुण",
    time: "45 मिनिटे",
    language: "10 प्रश्न (20 गुण)",
    maths: "10 प्रश्न (20 गुण)",
    environment: "8 प्रश्न (16 गुण)",
    gk: "4 प्रश्न (8 गुण)",
    reasoning: "4 प्रश्न (8 गुण)",
    life: "4 प्रश्न (8 गुण)",
  },
  {
    standard: "इयत्ता 2 री",
    questions: "50 प्रश्न",
    marks: "100 गुण",
    time: "60 मिनिटे",
    language: "12 प्रश्न (24 गुण)",
    maths: "12 प्रश्न (24 गुण)",
    environment: "10 प्रश्न (20 गुण)",
    gk: "6 प्रश्न (12 गुण)",
    reasoning: "5 प्रश्न (10 गुण)",
    life: "5 प्रश्न (10 गुण)",
  },
  {
    standard: "इयत्ता 3 री",
    questions: "50 प्रश्न",
    marks: "100 गुण",
    time: "60 मिनिटे",
    language: "12 प्रश्न (24 गुण)",
    maths: "12 प्रश्न (24 गुण)",
    environment: "10 प्रश्न (20 गुण)",
    gk: "6 प्रश्न (12 गुण)",
    reasoning: "5 प्रश्न (10 गुण)",
    life: "5 प्रश्न (10 गुण)",
  },
  {
    standard: "इयत्ता 4 थी",
    questions: "60 प्रश्न",
    marks: "120 गुण",
    time: "75 मिनिटे",
    language: "15 प्रश्न (30 गुण)",
    maths: "15 प्रश्न (30 गुण)",
    environment: "12 प्रश्न (24 गुण)",
    gk: "6 प्रश्न (12 गुण)",
    reasoning: "6 प्रश्न (12 गुण)",
    life: "6 प्रश्न (12 गुण)",
  },
];

export default function AbhyaskramQuestionTable() {
  return (
    <section className="abhyaskramQuestionTableSection">
      <div className="abhyaskramQuestionTableContainer">
        <div className="abhyaskramQuestionTableImageWrapper">
          <img
            src={bookGif}
            alt="Books Animation"
            className="abhyaskramQuestionTableImage"
          />
        </div>

        <h2 className="abhyaskramQuestionTableHeading">
          इयत्तानिहाय प्रश्नसंख्या व गुणांकन
        </h2>

        <h3 className="abhyaskramQuestionTableSubHeading">
          इयत्ता 1 ली ते इयत्ता 4 थी
        </h3>

        <div className="abhyaskramQuestionTableWrapper">
          <table className="abhyaskramQuestionTable">
            <thead>
              <tr>
                <th>इयत्ता</th>
                <th>प्रश्नसंख्या</th>
                <th>एकूण गुण</th>
                <th>वेळ</th>
                <th>भाषा विकास</th>
                <th>गणित</th>
                <th>परिसर अभ्यास</th>
                <th>सामान्य ज्ञान</th>
                <th>तार्किक विचार</th>
                <th>जीवनकौशल्ये</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.standard}</td>
                  <td>{row.questions}</td>
                  <td className="abhyaskramQuestionTableBold">{row.marks}</td>
                  <td>{row.time}</td>
                  <td>{row.language}</td>
                  <td>{row.maths}</td>
                  <td>{row.environment}</td>
                  <td>{row.gk}</td>
                  <td>{row.reasoning}</td>
                  <td>{row.life}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
