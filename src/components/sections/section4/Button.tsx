import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    padding: "12px 64px",
    border: "2px solid #3d28a4",
    borderRadius: 48,
    cursor: "pointer",
    transition: "0.3s all",
    backgroundColor: "#3d28a4",
    "&:hover": {
      backgroundColor: "#2d1e7b",
      transform: "scale(1.1)",
      "& > *": {
        color: "#fff",
      },
    },
    "&:focus": {
      outline: "none",
    },
  },
  label: {
    transition: "0.3s all",
    fontFamily: "roboto",
    fontSize: 18,
    color: "#fff",
    fontWeight: 500,
  },
});

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button(props: Props) {
  const classes = useStyles();
  const { children = "" } = props;

  return (
    <button className={classes.button}>
      <span className={classes.label}>{children}</span>
    </button>
  );
}

export default Button;
