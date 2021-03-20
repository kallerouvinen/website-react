import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  inputContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    padding: 8,
  },
  error: {
    color: "#eb4034",
    fontSize: 14,
    paddingRight: 8,
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
  errorBorder: {
    borderColor: "#eb4034",
  },
});

interface Props extends React.HTMLProps<HTMLInputElement> {
  error?: string;
  label?: string;
}

function TextInput(props: Props) {
  const classes = useStyles();
  const { error = "", label = "", ...otherProps } = props;

  return (
    <div className={classes.inputContainer}>
      <div className={classes.labelContainer}>
        {label && <Typography className={classes.label}>{label}</Typography>}
        {error && <Typography className={classes.error}>{error}</Typography>}
      </div>
      <input
        {...otherProps}
        className={`${classes.input} ${error && classes.errorBorder}`}
        type="text"
      />
    </div>
  );
}

export default TextInput;
