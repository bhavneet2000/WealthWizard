import React from "react";
import MainBot from "./components/Main/Main";
import ContextProvider from "./context/context";

const Bot = () => (
  <ContextProvider>
    <MainBot />
  </ContextProvider>
);

export default Bot;
