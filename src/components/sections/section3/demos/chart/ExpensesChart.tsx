import React from "react";

import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { withResizeDetector } from "react-resize-detector";

// TODO: Adjust data
const data = [
  {
    name: "1/4/2020",
    value: 299,
  },
  {
    name: "2/4/2020",
    value: 352,
  },
  {
    name: "3/4/2020",
    value: 345,
  },
  {
    name: "4/4/2020",
    value: 375,
  },
  {
    name: "5/4/2020",
    value: 401,
  },
  {
    name: "6/4/2020",
    value: 321,
  },
  {
    name: "7/4/2020",
    value: 431,
  },
];

interface Props {
  height: number;
  width: number;
}

function ExpensesChart(props: Props) {
  const { height } = props;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            {/* <stop offset="5%" stopColor="#8080ff" stopOpacity={1} />
            <stop offset="95%" stopColor="#80ccff" stopOpacity={1} /> */}
            <stop offset="5%" stopColor="#8080ff" stopOpacity={1} />
            <stop offset="50%" stopColor="#80ccff" stopOpacity={1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={1} />
          </linearGradient>
        </defs>
        {/* TODO: Add tooltip */}
        <Area
          animationDuration={1000}
          type="monotone"
          dataKey="value"
          stroke="#4d4dff"
          strokeWidth={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default withResizeDetector(ExpensesChart);
