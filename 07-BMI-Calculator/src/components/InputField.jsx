import React from "react";

const InputField = ({ label, value, setValue, placeholder }) => {
  return (
    <div>
      <label className="text-teal-800 font-medium">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 mt-1 border border-teal-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      />
    </div>
  );
};

export default InputField;
