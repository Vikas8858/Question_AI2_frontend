// frontend/src/components/ResultCard.jsx
import React from "react";

function ResultCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4"> Result </h3>{" "}
      <p className="mb-2">
        <strong> Original Text: </strong> {data.originalText}{" "}
      </p>{" "}
      <p className="mb-2">
        <strong> Is a Question: </strong> {data.isQuestion ? "Yes" : "No"}{" "}
      </p>{" "}
      {data.rewrittenText && (
        <div>
          <strong> Rewritten Questions: </strong>{" "}
          <div className="mt-2 p-4 bg-gray-100 rounded-lg whitespace-pre-wrap">
            {" "}
            {data.rewrittenText}{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
}

export default ResultCard;
