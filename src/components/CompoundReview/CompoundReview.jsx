import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CompoundReview = ({ location }) => {
  // Assuming result is an array of objects with 'label' and 'value' properties
  const { result } = location.state;

  return (
    <div>
      <h2>Compound Interest Graph</h2>
      <LineChart width={800} height={400} data={result}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="label"
          label={{
            value: "Time Period",
            position: "insideBottomRight",
            offset: -5,
          }}
        />
        <YAxis
          label={{ value: "Balance", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default CompoundReview;
