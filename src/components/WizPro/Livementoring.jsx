import React from "react";
import { useNavigate } from "react-router-dom";
import FinHeader from "./FinHeader";

const MentorVideo = ({ videoUrl, isExpanded }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden md:w-1/2 transition-all duration-300 ${
        isExpanded ? "h-full md:h-auto" : "h-80 md:h-96"
      }`}
    >
      <iframe
        src={videoUrl}
        allow="autoplay"
        title="Mentor Video"
        className="w-full h-full p-4"
      ></iframe>
    </div>
  );
};

const MentorDescription = ({
  name,
  about,
  workExperience,
  menteesCount,
  expertise,
  mentorshipDetails,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 border border-gray-200 flex flex-col items-center transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-center">{name}</h2>
      <div className="text-gray-700 space-y-4 text-center md:text-left">
        <p>{about}</p>
        <p>{workExperience}</p>
        <p>{menteesCount}</p>
        <p>{expertise}</p>
        <p>{mentorshipDetails}</p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => navigate("/booking")}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600 focus:outline-none"
          >
            BOOK 1:1 Mentorship (30 mins)
            <br />
            Rs. 1500
          </button>
        </div>
      </div>
    </div>
  );
};

const Livementoring = () => {
  return (
    <div>
      <FinHeader />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-12">
          BOOK 1:1 Mentorship
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8">
            <MentorVideo
              videoUrl="https://drive.google.com/file/d/1r5LuoGiK2fj-Zem3e0MxA8gW8vxvp_rC/preview"
              isExpanded={true}
            />
            <MentorDescription
              name="Mayank Gupta"
              about="I am a Chartered Accountant with extensive experience and qualifications in finance. I've helped many individuals and businesses achieve their financial goals, and I'm excited to be your mentor. Let's make finance easy together."
              workExperience="Worked in KPMG from 2019-2022. Currently at MAX Corporation."
              menteesCount="Mentored 50+ people"
              expertise="Expertise in accounting and financial reporting, taxation, risk management, business strategy and management, career development, and personal finance."
              mentorshipDetails="I offer personalized 1:1 mentorship sessions for 30 minutes at Rs. 1500. Click 'BOOK NOW!' to schedule a session."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livementoring;
