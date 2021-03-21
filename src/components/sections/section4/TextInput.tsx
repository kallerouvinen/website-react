import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  inputContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  label: {
    padding: 8,
    color: "#fff",
    fontWeight: 500,
  },
  input: {
    flex: 1,
    padding: 16,
    font: "inherit",
    borderRadius: 8,
    border: "none",
    boxShadow: "0px 3px 16px 5px rgba(0, 0, 0, 0.1)",
    "&:focus": {
      outline: "none",
    },
  },
});

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

function TextInput(props: Props) {
  const classes = useStyles();
  const { label, ...otherProps } = props;

  return (
    <div className={classes.inputContainer}>
      <Typography className={classes.label}>{label}</Typography>
      <input {...otherProps} className={classes.input} type="text" />
    </div>
  );
}

export default TextInput;
