import React from "react";

const ToggleUnitsTabs = ({ unit, setUnit }) => {
  return (
    <div className="flex justify-center mb-6 ">
      <div className="inline-flex rounded-md shadow-sm">
        <button
          onClick={() => setUnit("metric")}
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            unit === "metric"
              ? "bg-teal-600 text-white"
              : "bg-white text-teal-700 hover:bg-teal-50"
          }`}
        >
          Metric (kg/cm)
        </button>
        <button
          onClick={() => setUnit("imperial")}
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            unit === "imperial"
              ? "bg-teal-600 text-white"
              : "bg-white text-teal-700 hover:bg-teal-50"
          }`}
        >
          Imperial (lbs/in)
        </button>
      </div>
    </div>
  );
};

export default ToggleUnitsTabs;
