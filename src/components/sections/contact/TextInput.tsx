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
  },
  input: {
    display: "flex",
    flex: 1,
    padding: 16,
    font: "inherit",
    borderRadius: 8,
    border: "1px solid #e6e6e6",
    "&:focus": {
      outline: "none",
    },
  },
  textArea: {
    resize: "none",
  },
});

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  multiline?: boolean;
  name?: string;
  rows?: number;
}

function TextInput(props: Props) {
  const classes = useStyles();
  const {
    label = "",
    multiline = false,
    name = "",
    rows = 1,
    ...otherProps
  } = props;

  return (
    <div className={classes.inputContainer}>
      {label && <Typography className={classes.label}>{label}</Typography>}
      {multiline ? (
        <textarea
          className={`${classes.input} ${classes.textArea}`}
          name={name}
          rows={rows}
        ></textarea>
      ) : (
        <input
          {...otherProps}
          className={classes.input}
          name={name}
          type="text"
        />
      )}
    </div>
  );
}

export default TextInput;
