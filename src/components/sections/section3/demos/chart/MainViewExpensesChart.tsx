import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  label: {
    fontSize: 10,
  },
});

interface Props {
  data: any; // TODO: Type
}

function ExpensesChart(props: Props) {
  const classes = useStyles();
  const { data } = props;

  const renderLegendLabel = (value: string) => (
    <span className={classes.label}>{value}</span>
  );

  // TODO: Hover effect on chart to highlight hovered section in legend and vice versa

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Legend
          align="left"
          verticalAlign="middle"
          layout="vertical"
          formatter={renderLegendLabel}
          iconType="circle"
        />
        <Pie
          animationDuration={1000}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
        >
          {data.map((entry: any, index: number) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ExpensesChart;
