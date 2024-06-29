import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const Scenario = ({ scenarios, onChoose }) => {
  const [currentScenario, setCurrentScenario] = useState(
    scenarios[Math.floor(Math.random() * scenarios.length)]
  );

  const handleChoice = (accepted) => {
    onChoose(currentScenario, accepted);
    setCurrentScenario(scenarios[Math.floor(Math.random() * scenarios.length)]);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card
        variant="outlined"
        style={{ marginTop: "16px", backgroundColor: "#fff3e0" }}
      >
        <CardContent>
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              component="div"
              style={{ fontSize: "32px" }}
            >
              {currentScenario.icon}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              style={{ marginLeft: "8px" }}
            >
              {currentScenario.text}
            </Typography>
          </Box>
          <Grid container spacing={2} style={{ marginTop: "16px" }}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleChoice(true)}
                fullWidth
              >
                Accept
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleChoice(false)}
                fullWidth
              >
                Reject
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Scenario;
