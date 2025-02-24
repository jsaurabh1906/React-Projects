import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("0");

  const handleInput = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const clearAll = () => {
    setInput("0");
    setResult("0");
  };

  return (
    <div className="max-w-sm mx-auto p-6 mt-10 bg-black text-white rounded-lg shadow-md">
      <h1 className="text-2xl text-center font-bold mb-4">Calculator</h1>
      <div className="mb-4  p-2 pr-4 text-2xl text-right font-bold bg-gray-700 rounded-md ">
        {input}
      </div>
      <div className="mb-4 p-2 border-2 rounded-md text-right text-xl font-bold bg-gray-100/40 ">
        {result}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((item) => (
          <button
            onClick={() =>
              item === "=" ? calculateResult() : handleInput(item)
            }
            className="py-2 px-4 bg-gray-50/50 rounded hover:bg-gray-400 "
          >
            {item}
          </button>
        ))}{" "}
        <button
          className="col-span-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={clearInput}
        >
          Clear
        </button>
        <button
          className="col-span-2 px-4 py-2  bg-red-500 text-white rounded hover:bg-red-600"
          onClick={clearAll}
        >
          All Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
