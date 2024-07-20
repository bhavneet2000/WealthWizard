import React, { useState } from "react";
import FinHeader from "./FinHeader";

const MentorshipBooking = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [qualification, setQualification] = useState("");
  const [assistance, setAssistance] = useState("");

  return (
    <div>
      <FinHeader />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-12">
          Book Your Mentorship Session
        </h1>
        <form
          action="https://formspree.io/f/xpzvvbpb"
          method="POST"
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="qualification"
            >
              Qualification
            </label>
            <div className="flex">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="qualification"
                  value="In School"
                  checked={qualification === "In School"}
                  onChange={(e) => setQualification(e.target.value)}
                  className="mr-2"
                />
                In School
              </label>
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="qualification"
                  value="In College"
                  checked={qualification === "In College"}
                  onChange={(e) => setQualification(e.target.value)}
                  className="mr-2"
                />
                In College
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="qualification"
                  value="Office Going"
                  checked={qualification === "Office Going"}
                  onChange={(e) => setQualification(e.target.value)}
                  className="mr-2"
                />
                Office Going
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="assistance"
            >
              Assistance
            </label>
            <textarea
              id="assistance"
              value={assistance}
              onChange={(e) => setAssistance(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MentorshipBooking;
