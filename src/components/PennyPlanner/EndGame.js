import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

const EndGame = ({
  budget,
  bestBudget,
  bestChoices,
  decisions,
  onPlayAgain,
}) => {
  const handlePlayAgain = () => {
    onPlayAgain();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card
        variant="outlined"
        style={{
          marginTop: "16px",
          backgroundColor: "#f0f0f0",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h4" component="div" align="center" gutterBottom>
            Game Over
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" component="div" align="center">
                Your final budget:
              </Typography>
              <Typography variant="h5" component="div" align="center">
                ₹{budget}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" component="div" align="center">
                Best possible budget:
              </Typography>
              <Typography variant="h5" component="div" align="center">
                ₹{bestBudget}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            component="div"
            align="center"
            style={{ marginTop: "16px" }}
          >
            {budget >= 1000
              ? "Congratulations on reaching your financial goals!"
              : "You can do better! Try again to improve your budget."}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            align="center"
            style={{ marginTop: "24px" }}
          >
            Your Decisions:
          </Typography>
          {decisions.map((decision, index) => (
            <Typography
              key={index}
              variant="body2"
              component="div"
              align="center"
            >
              {decision.text} - {decision.accepted ? "Accepted" : "Rejected"}
            </Typography>
          ))}
          <Typography
            variant="h6"
            component="div"
            align="center"
            style={{ marginTop: "24px" }}
          >
            Best Choices:
          </Typography>
          {bestChoices.map((choice, index) => (
            <Typography
              key={index}
              variant="body2"
              component="div"
              align="center"
            >
              {choice.text} - {choice.accepted ? "Accepted" : "Rejected"}
            </Typography>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handlePlayAgain}
            style={{ marginTop: "24px", width: "100%" }}
          >
            Play Again
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EndGame;
