import React, { useState } from "react";
import { toast } from "react-toastify";
import ActionButtons from "./ActionButtons";
import ToggleUnitsTabs from "./ToggleUnitsTabs";
import InputField from "./InputField";
import Results from "./Results";
import HealthTips from "./HealthTips";
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("metric");

  const calculateBMI = () => {
    if (!height || !weight) {
      toast.error("Please enter height and weight");
      return;
    }

    let bmiValue;
    if (unit === "metric") {
      const heightInMeters = height / 100;
      bmiValue = weight / (heightInMeters * heightInMeters);
    } else {
      bmiValue = (weight / (height * height)) * 703;
    }

    bmiValue = bmiValue.toFixed(1);

    let categoryValue;
    if (bmiValue < 18.5) {
      categoryValue = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      categoryValue = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      categoryValue = "Overweight";
    } else {
      categoryValue = "Obese";
    }

    setBMI(bmiValue);
    setCategory(categoryValue);

    toast.info(`Your BMI is ${bmiValue} and you are ${categoryValue}`);
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setBMI(null);
    setCategory(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg shadow-xl">
      <div className="bg-white p-6 rounded-lg shadow-inner">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">
          BMI Calculator
        </h1>

        {/*Toggle Units */}
        <ToggleUnitsTabs unit={unit} setUnit={setUnit} />

        <div className="space-y-4">
          {/*Height Input */}
          <InputField
            label={unit === "metric" ? "Height (cm)" : "Height (in)"}
            value={height}
            setValue={setHeight}
            placeholder={
              unit === "metric"
                ? "Enter height in cm"
                : "Enter height in inches"
            }
          />
          {/* Weight  Input*/}
          <InputField
            label={unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}
            value={weight}
            setValue={setWeight}
            placeholder={
              unit === "metric"
                ? "Enter weight in kg"
                : "Enter weight in pounds"
            }
          />
          {/* Buttons */}
          <ActionButtons calculateBMI={calculateBMI} resetForm={resetForm} />
        </div>

        {/* Results */}
        {bmi && <Results bmi={bmi} category={category} />}

        {/* Health Tips */}
        <HealthTips />
      </div>
    </div>
  );
};

export default BMICalculator;
