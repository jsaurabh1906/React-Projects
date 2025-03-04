import React from "react";

const getColorResults = (category) => {
  if (!category) return "bg-teal-50";
  switch (category) {
    case "Underweight":
      return "bg-blue-200 border-blue-700";
    case "Normal weight":
      return "bg-green-200 border-green-700";
    case "Overweight":
      return "bg-yellow-200 border-yellow-700";
    case "Obese":
      return "bg-red-200 border-red-700";
    default:
      return "bg-teal-50";
  }
};

const Results = ({ bmi, category }) => {
  return (
    <div
      className={`mt-6 rounded-lg border-2 ${getColorResults(
        category
      )} transition-all duration-300`}
    >
      <h2 className="text-xl font-bold text-center text-teal-800 mb-2 pt-2">
        Your Results
      </h2>
      <div className="grid grid-cols-1 gap-2 p-2">
        <div className="text-center">
          <span className="block text-sm text-gray-600">Your BMI</span>
          <span className="text-3xl font-bold text-teal-800">{bmi}</span>
        </div>
        <div className="text-center">
          <span className="block text-sm text-gray-600">Category</span>
          <span className="text-lg font-medium text-teal-500">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default Results;
