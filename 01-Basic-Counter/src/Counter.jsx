import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <p className="text-4xl font-semibold mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
