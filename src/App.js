import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Sign/signup";
import Dashboard from "./components/Dashboard/dashboard";
import NewDashboard from "./components/Dashboard/newDashboard";
import Profile from "./components/Profile/profile";
import Juniors from "./components/Juniors/juniors";
import News from "./components/News/news";
import Budget from "./components/Budgets/budgeting";
import Quiz from "./components/Quiz/quiz";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import FinanceCalculator from "./components/FinanceCalculator/FinanceCalculator";
import Compound from "./components/CompoundInterest/Compound";

import Tracker from "./components/tracker/tracker";

import Seniors from "./components/Seniors/Seniors";
import Games from "./components/Games/Games";
import Savings from "./components/Savings/Savings";
import ImpSavings from "./components/ImpSavings/ImpSavings";
import Master from "./components/MasterSaving/Master";
import Bot from "./bot";
import ContextProvider from "./context/context";
import { AuthProvider, useAuth } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import PennyPlanner from "./components/PennyPlanner/PennyPlanner";
import InflationCalculator from "./components/InflationCalculator/InflationCalculator";
import Retirement from "./components/Retirement/Retirement";
import Forum from "./components/forum/Forum.tsx";
import WizPro from "./components/WizPro/WizPro.jsx";
import Hungman from "./components/hungman/hungman.jsx";
import LiveMentoring from "./components/WizPro/Livementoring";
import Goodies from "./components/WizPro/Goodies.jsx";
import Premiumcourses from "./components/WizPro/Premiumcourses.jsx";
import FinancialFortune from "./components/FinancialFortune/Home.jsx";
import Financialresult from "./components/FinancialFortune/Result.jsx";
import IntroSaving from "./components/JuniorArticles/IntroSaving.jsx";
import Booking from "./components/WizPro/Booking.jsx";
import Retire from "./components/Retireease/Retire.jsx";
import Course1 from "./components/Retireease/Course1.jsx";
import Course2 from "./components/Retireease/Course2.jsx";
import OpeningSaving from "./components/OpeningSaving/OpeningSaving";
import IncomeTax from "./components/IncomeTax/IncomeTax.jsx";

function App() {
  var isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={NewDashboard} />}
          />
          <Route
            path="/planning"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={Profile} />}
          />
          <Route
            path="/juniors"
            element={<ProtectedRoute element={Juniors} />}
          />
          <Route
            path="/seniors"
            element={<ProtectedRoute element={Seniors} />}
          />
          <Route
            path="/course1"
            element={<ProtectedRoute element={Course1} />}
          />
          <Route
            path="/course2"
            element={<ProtectedRoute element={Course2} />}
          />

          <Route
            path="/budgeting"
            element={<ProtectedRoute element={Budget} />}
          />
          <Route path="/quiz" element={<ProtectedRoute element={Quiz} />} />
          <Route
            path="/quiz/saving"
            element={<ProtectedRoute element={CaseStudy} />}
          />
          <Route
            path="/quiz/retirement"
            element={<ProtectedRoute element={CaseStudy} />}
          />
          <Route
            path="/calculate"
            element={<ProtectedRoute element={FinanceCalculator} />}
          />
          <Route
            path="/booking"
            element={<ProtectedRoute element={Booking} />}
          />
          <Route
            path="/compound-interest"
            element={<ProtectedRoute element={Compound} />}
          />
          <Route
            path="/tracker"
            element={<ProtectedRoute element={Tracker} />}
          />
          <Route path="/financialhome" element={<FinancialFortune />} />
          <Route path="/result" element={<Financialresult />} />
          <Route
            path="/retirement-calculator"
            element={<ProtectedRoute element={Retirement} />}
          />
          <Route path="/games" element={<ProtectedRoute element={Games} />} />
          <Route
            path="/savings"
            element={<ProtectedRoute element={Savings} />}
          />
          <Route
            path="/power-of-saving"
            element={<ProtectedRoute element={ImpSavings} />}
          />
          <Route
            path="/inflation"
            element={<ProtectedRoute element={InflationCalculator} />}
          />
          <Route
            path="/open-saving"
            element={<ProtectedRoute element={OpeningSaving} />}
          />
          <Route
            path="/master-saving"
            element={<ProtectedRoute element={Master} />}
          />
          <Route path="/news" element={<ProtectedRoute element={News} />} />
          <Route path="/forum" element={<ProtectedRoute element={Forum} />} />
          <Route
            path="/WizPro"
            element={<ProtectedRoute element={WizPro} />} // Add the WizPro route here
          />
          <Route
            path="/retirement"
            element={<ProtectedRoute element={Retire} />} // Add the WizPro route here
          />
          <Route
            path="/income-tax"
            element={<ProtectedRoute element={IncomeTax} />} // Add the WizPro route here
          />

          <Route
            path="/livementoring"
            element={<ProtectedRoute element={LiveMentoring} />}
          />
          <Route
            path="/premiumcourses"
            element={<ProtectedRoute element={Premiumcourses} />}
          />
          <Route
            path="/goodies"
            element={<ProtectedRoute element={Goodies} />}
          />
          <Route
            path="/introduction-to-saving"
            element={<ProtectedRoute element={IntroSaving} />}
          />
          <Route
            path="/bot"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <Bot />
                  </ContextProvider>
                )}
              />
            }
          />
          <Route
            path="/play-hangman"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <Hungman />
                  </ContextProvider>
                )}
              />
            }
          />
          <Route
            path="/play-stroop"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <FinancialFortune />
                  </ContextProvider>
                )}
              />
            }
          />
          <Route
            path="/play-penny"
            element={
              <ProtectedRoute
                element={() => (
                  <ContextProvider>
                    <PennyPlanner />
                  </ContextProvider>
                )}
              />
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
