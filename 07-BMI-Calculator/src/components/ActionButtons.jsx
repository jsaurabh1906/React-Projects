import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoCalculator } from "react-icons/io5";

const ActionButtons = ({ calculateBMI, resetForm }) => {
  return (
    <div className="flex space-x-2 pt-2">
      <button
        onClick={calculateBMI}
        className="flex flex-1 justify-center items-center bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
      >
        <IoCalculator size={20} className="mr-1" /> Calculate
      </button>
      <button
        onClick={resetForm}
        className="flex flex-1 justify-center items-center bg-teal-100 hover:bg-teal-200 text-teal-600 py-2 px-4 rounded-lg transition-all duration-300"
      >
        <HiOutlineRefresh size={20} className="mr-1" /> Reset
      </button>
    </div>
  );
};

export default ActionButtons;
