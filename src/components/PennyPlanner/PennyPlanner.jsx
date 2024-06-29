import React, { useState } from "react";
import {
  Container,
  Typography,
  LinearProgress,
  CssBaseline,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, orange } from "@mui/material/colors";
import EndGame from "./EndGame";
import Budget from "./Budget";
import Scenario from "./Scenario";
import Header from "../Header/header";

const additionalScenarios = [
  { text: "Buy concert tickets for ₹100", cost: 100, icon: "🎤" },
  { text: "Renew gym membership for ₹50", cost: 50, icon: "💪" },
  { text: "Receive a refund of ₹75", cost: -75, icon: "💸" },
  { text: "Go on a weekend getaway for ₹300", cost: 300, icon: "✈️" },
  { text: "Donate ₹20 to charity", cost: 20, icon: "❤️" },
  { text: "Pay off credit card debt of ₹200", cost: 200, icon: "💳" },
  { text: "Buy new clothes for ₹80", cost: 80, icon: "👗" },
  { text: "Take a taxi for ₹30", cost: 30, icon: "🚕" },
  { text: "Receive a salary bonus of ₹500", cost: -500, icon: "🎉" },
  { text: "Purchase a new laptop for ₹1000", cost: 1000, icon: "💻" },
  { text: "Pay for a subscription service of ₹15/month", cost: 15, icon: "📱" },
  { text: "Buy gifts for ₹50", cost: 50, icon: "🎁" },
  { text: "Save ₹50 in a piggy bank", cost: -50, icon: "🐷" },
];

const scenarios = [
  { text: "Buy a new phone for ₹500", cost: 500, icon: "📱" },
  { text: "Save ₹200", cost: -200, icon: "💰" },
  { text: "Unexpected car repair for ₹300", cost: 300, icon: "🚗" },
  { text: "Receive a bonus of ₹150", cost: -150, icon: "🎁" },
  { text: "Invest ₹100 in stocks", cost: 100, gain: 150, icon: "📈" },
  { text: "Dinner with friends for ₹50", cost: 50, icon: "🍽️" },
  { text: "Rent payment of ₹700", cost: 700, icon: "🏠" },
  { text: "Grocery shopping for ₹100", cost: 100, icon: "🛒" },
  { text: "Sell old furniture for ₹200", cost: -200, icon: "🛋️" },
  { text: "Utility bills for ₹150", cost: 150, icon: "💡" },
  { text: "Monthly subscription service for ₹30", cost: 30, icon: "📺" },
  ...additionalScenarios,
];

const calculateBestChoices = (initialBudget, scenarios) => {
  let budget = initialBudget;
  const bestChoices = [];
  for (let scenario of scenarios) {
    if (scenario.gain) {
      if (budget >= scenario.cost) {
        budget += scenario.gain - scenario.cost;
        bestChoices.push({ ...scenario, accepted: true });
      }
    } else if (scenario.cost < 0) {
      budget += Math.abs(scenario.cost);
      bestChoices.push({ ...scenario, accepted: true });
    } else {
      if (budget >= scenario.cost) {
        budget -= scenario.cost;
        bestChoices.push({ ...scenario, accepted: false });
      }
    }
  }
  return { budget, bestChoices };
};

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
});

const PennyPlanner = () => {
  const initialBudget = 1000;
  const initialTurns = 0;

  const [budget, setBudget] = useState(initialBudget);
  const [turns, setTurns] = useState(initialTurns);
  const [gameOver, setGameOver] = useState(false);
  const [decisions, setDecisions] = useState([]);

  const handleChoice = (scenario, accepted) => {
    let newBudget = budget;
    if (accepted) {
      newBudget -= scenario.gain
        ? scenario.cost - scenario.gain
        : scenario.cost;
    }
    if (newBudget >= 0) {
      setBudget(newBudget);
      setTurns(turns + 1);
      setDecisions([...decisions, { ...scenario, accepted }]);
    }
    if (turns >= 9) {
      setGameOver(true);
    }
  };

  const { budget: bestBudget, bestChoices } = calculateBestChoices(
    initialBudget,
    scenarios
  );

  const handlePlayAgain = () => {
    setBudget(initialBudget);
    setTurns(initialTurns);
    setGameOver(false);
    setDecisions([]);
  };

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper
            style={{
              padding: "20px",
              marginTop: "20px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography variant="h3" gutterBottom align="center">
              Penny Planner
            </Typography>
            <LinearProgress variant="determinate" value={(turns / 10) * 100} />
            {gameOver ? (
              <EndGame
                budget={budget}
                bestBudget={bestBudget}
                bestChoices={bestChoices}
                decisions={decisions}
                onPlayAgain={handlePlayAgain}
              />
            ) : (
              <>
                <Budget budget={budget} />
                <Scenario scenarios={scenarios} onChoose={handleChoice} />
              </>
            )}
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default PennyPlanner;
