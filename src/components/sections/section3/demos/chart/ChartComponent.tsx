import React from "react";

import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { withResizeDetector } from "react-resize-detector";

// TODO: Adjust data
const data = [
  {
    name: "1/4/2020",
    value: 3052,
  },
  {
    name: "2/4/2020",
    value: 3401,
  },
  {
    name: "3/4/2020",
    value: 4345,
  },
  {
    name: "4/4/2020",
    value: 3601,
  },
  {
    name: "5/4/2020",
    value: 4599,
  },
  {
    name: "6/4/2020",
    value: 4121,
  },
  {
    name: "7/4/2020",
    value: 4975,
  },
];

interface Props {
  height: number;
  width: number;
}

function ChartComponent(props: Props) {
  const { height } = props;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8080ff" stopOpacity={1} />
            <stop offset="95%" stopColor="#80ccff" stopOpacity={1} />
          </linearGradient>
        </defs>
        {/* TODO: Add tooltip */}
        <Area
          animationDuration={1000}
          type="linear"
          dataKey="value"
          stroke="#4d4dff"
          strokeWidth={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default withResizeDetector(ChartComponent);
