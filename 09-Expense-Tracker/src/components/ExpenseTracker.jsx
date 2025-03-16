import { useState } from "react";

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddTransaction = () => {
    if (!description || !amount) return;

    setTransactions([
      ...transactions,
      { id: Date.now(), description, amount: parseFloat(amount) },
    ]);
    setDescription("");
    setAmount("");
  };

  const totalBalance = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <main className="flex-grow max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-blue-500 mb-4 ">Add Transaction</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 mb-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (use negative for expense)"
          className="w-full p-2 mb-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleAddTransaction}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mt-4">
        Balance: ${totalBalance.toFixed(2)}
      </h3>
      {transactions.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-blue-900 mt-4">
            Transactions:
          </h4>
          <ul className="mt-4">
            {transactions.map((t) => (
              <li
                key={t.id}
                className={`p-2 mt-2 border rounded ${
                  t.amount >= 0 ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {t.description}: ${t.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
