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
    padding: "4px 8px",
  },
  error: {
    color: "#eb4034",
    fontSize: 14,
    paddingRight: 8,
  },
  textArea: {
    display: "flex",
    flex: 1,
    padding: 16,
    font: "inherit",
    borderRadius: 8,
    border: "1px solid #d9d9d9",
    "&:focus": {
      outline: "none",
    },
    resize: "none",
  },
  errorBorder: {
    borderColor: "#eb4034",
  },
});

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  rows?: number;
}

function TextInput(props: Props) {
  const classes = useStyles();
  const { error = "", label = "", rows = 1, ...otherProps } = props;

  return (
    <div className={classes.inputContainer}>
      <div className={classes.labelContainer}>
        {label && <Typography className={classes.label}>{label}</Typography>}
        {error && <Typography className={classes.error}>{error}</Typography>}
      </div>
      <textarea
        {...otherProps}
        className={`${classes.textArea} ${error && classes.errorBorder}`}
        rows={rows}
      />
    </div>
  );
}

export default TextInput;
