import React from "react";

function ResultCard({ data }) {
  console.log("data");
  if (data.isQuestion === "no") {
    return (
      <div className="bg-gray-100 mt-4 p-6 rounded-lg shadow-lg">
        Enter Valid Question.
      </div>
    );
  }
  return (
    <div className="bg-gray-100 mt-4 p-6 rounded-lg shadow-lg">
      <div dangerouslySetInnerHTML={{ __html: data.question }}></div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: data.answer }}></div>
    </div>
  );
}

export default ResultCard;
