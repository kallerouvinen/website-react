import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";
// import ExpensesChart from "./ExpensesChart";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
});

interface Props extends ResponsiveWrapperProps {}

function Expenses(props: Props) {
  const classes = useStyles();

  const { size } = props;

  return <div className={classes.root}></div>;
}

export default Expenses;
