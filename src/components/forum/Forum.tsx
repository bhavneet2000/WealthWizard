import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main.tsx";
import Answers from "./Answers.tsx";

const Forum = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/answers/:questionId" element={<Answers />} />
    </Routes>
  );
};

export default Forum;