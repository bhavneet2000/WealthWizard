import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Budget = ({ budget }) => {
  return (
    <Card
      variant="outlined"
      style={{ marginTop: "16px", backgroundColor: "#e0f7fa" }}
    >
      <CardContent>
        <Box display="flex" alignItems="center">
          <CurrencyRupeeIcon fontSize="large" style={{ color: "#00796b" }} />
          <Typography
            variant="h5"
            component="div"
            style={{ marginLeft: "8px" }}
          >
            Current Budget: ₹{budget}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Budget;
