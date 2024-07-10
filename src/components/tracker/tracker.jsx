import React, { useEffect, useState } from "react";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { auth, db } from "../../utils/firebase";
import "tailwindcss/tailwind.css";
import Header from "../Header/header";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF4560",
  "#775DD0",
  "#00E396",
  "#0090FF",
];

const Tracker = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [budget, setBudget] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.transactions) {
            setTransactions(userData.transactions);
          }
          if (userData.budget) {
            setBudget(userData.budget);
          }
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const saveData = async (data) => {
    if (userId) {
      await setDoc(doc(db, "users", userId), data, { merge: true });
    }
  };

  const addTransaction = async (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
    };
    let updatedTransactions;
    if (editId) {
      updatedTransactions = transactions.map((t) =>
        t.id === editId ? newTransaction : t
      );
      setEditId(null);
    } else {
      updatedTransactions = [...transactions, newTransaction];
    }
    setTransactions(updatedTransactions);
    await saveData({ transactions: updatedTransactions });
    setDescription("");
    setAmount("");
    setDate("");
  };

  const handleEdit = (transaction) => {
    setEditId(transaction.id);
    setDescription(transaction.description);
    setAmount(transaction.amount);
    setDate(transaction.date ? transaction.date.substring(0, 10) : "");
  };

  const handleDelete = async (id) => {
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
    await saveData({ transactions: updatedTransactions });
  };

  const handleBudgetChange = async (e) => {
    const newBudget = parseFloat(e.target.value);
    if (newBudget < totalSpent) {
      alert("Budget cannot be less than total spent amount.");
      return;
    }
    setBudget(newBudget);
    await saveData({ budget: newBudget });
  };

  const filterTransactionsByMonthAndYear = (transactions, month, year) => {
    return transactions.filter((transaction) => {
      const date = new Date(transaction.date);
      return date.getMonth() === month && date.getFullYear() === year;
    });
  };

  const filteredTransactions = filterTransactionsByMonthAndYear(
    transactions,
    selectedMonth,
    selectedYear
  ).filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedData = filteredTransactions.reduce((acc, transaction) => {
    const existing = acc.find(
      (item) => item.description === transaction.description
    );
    if (existing) {
      existing.amount += transaction.amount;
    } else {
      acc.push({
        description: transaction.description,
        amount: transaction.amount,
      });
    }
    return acc;
  }, []);

  const totalSpent = filteredTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const remainingBudget = budget - totalSpent;

  useEffect(() => {
    if (remainingBudget < 0) {
      alert(
        "Your remaining budget is negative. Please adjust your budget or expenses."
      );
    }
  }, [remainingBudget]);

  return (
    <div>
      <Header />
      <div className="bg-teal-50 min-h-screen flex flex-col justify-center items-center py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
          Finance Tracker
        </h1>
        <div className="container mx-auto px-5">
          <div className="bg-blue-50 rounded-lg shadow-lg p-10 mb-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
              Transactions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 border border-gray-200 rounded-lg p-4">
              <div>
                <label htmlFor="month" className="block text-lg font-semibold">
                  Month:
                </label>
                <select
                  id="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                      {new Date(0, i).toLocaleString("default", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-lg font-semibold">
                  Year:
                </label>
                <input
                  id="year"
                  type="number"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="search" className="block text-lg font-semibold">
                  Search:
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex justify-between mb-5 border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col">
                <label htmlFor="budget" className="block text-lg font-semibold">
                  Budget:
                </label>
                <input
                  id="budget"
                  type="number"
                  value={budget}
                  onChange={handleBudgetChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xl font-semibold text-gray-700">
                  Total Spent: ₹{totalSpent.toFixed(2)}
                </p>
                <p className="text-xl font-semibold text-gray-700">
                  Remaining Budget: ₹{remainingBudget.toFixed(2)}
                </p>
              </div>
            </div>
            <table className="w-full text-left mb-8 border border-gray-200 rounded-lg">
              <thead>
                <tr className="flex justify-between border-b-2 border-indigo-200">
                  <th className="text-lg font-semibold w-1/4 px-2 py-3">
                    Description
                  </th>
                  <th className="text-lg font-semibold w-1/4 px-2 py-3">
                    Amount
                  </th>
                  <th className="text-lg font-semibold w-1/4 px-2 py-3">
                    Date
                  </th>
                  <th className="text-lg font-semibold w-1/4 px-2 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(filteredTransactions) &&
                  filteredTransactions.map((t) => (
                    <tr
                      key={t.id}
                      className="flex justify-between border-b border-gray-200 transition-colors hover:bg-gray-100"
                    >
                      <td className="py-3 px-2 w-1/4">{t.description}</td>
                      <td className="py-3 px-2 w-1/4">{t.amount}</td>
                      <td className="py-3 px-2 w-1/4">{t.date}</td>
                      <td className="py-3 px-2 w-1/4 flex justify-center items-center">
                        <button
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded transition-colors"
                          onClick={() => handleEdit(t)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded transition-colors"
                          onClick={() => handleDelete(t.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h1 className="text-2xl font-bold text-center mb-5 text-indigo-600">
                Add your transaction
              </h1>
              <form onSubmit={addTransaction} className="flex flex-col">
                <input
                  className="border border-indigo-300 rounded-md w-full px-3 py-2 mb-4 transition-shadow focus:shadow-lg"
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
                <input
                  type="number"
                  className="border border-indigo-300 rounded-md w-full px-3 py-2 mb-4 transition-shadow focus:shadow-lg"
                  placeholder="Amount"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
                <input
                  type="date"
                  className="border border-indigo-300 rounded-md w-full px-3 py-2 mb-4 transition-shadow focus:shadow-lg"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition-transform transform hover:scale-105"
                  type="submit"
                >
                  {editId ? "Update Transaction" : "Add Transaction"}
                </button>
              </form>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-10 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
              Transaction Summary
            </h2>
            <p className="text-2xl font-semibold text-center mb-8 text-gray-700">
              Total: ₹{totalSpent.toFixed(2)}
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={groupedData}
                  dataKey="amount"
                  nameKey="description"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  label
                >
                  {groupedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
