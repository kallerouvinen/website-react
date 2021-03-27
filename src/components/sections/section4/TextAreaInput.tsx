import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  label: {
    padding: 8,
    color: "#fff",
    fontWeight: 600,
  },
  textArea: {
    flex: 1,
    padding: 16,
    font: "inherit",
    borderRadius: 8,
    border: "none",
    boxShadow: "0px 3px 16px 5px rgba(0, 0, 0, 0.1)",
    "&:focus": {
      outline: "none",
    },
    resize: "none",
  },
});

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
  rows?: number;
}

function TextInput(props: Props) {
  const classes = useStyles();
  const { label, name, rows = 1, ...otherProps } = props;

  return (
    <div className={classes.inputContainer}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        {...otherProps}
        className={classes.textArea}
        name={name}
        rows={rows}
      />
    </div>
  );
}

export default TextInput;
