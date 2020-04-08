import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

const useStyles = makeStyles({
  chart: {
    display: "flex",
    flex: 1,
  },
});

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

function Chart() {
  const classes = useStyles();

  return (
    <div className={classes.chart}>
      <ResponsiveContainer height="100%" width="100%">
        <AreaChart data={data} margin={{ top: -25 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff8080" stopOpacity={1} />
              <stop offset="95%" stopColor="#ffc680" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="value"
            stroke="#ff4600"
            strokeWidth={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
