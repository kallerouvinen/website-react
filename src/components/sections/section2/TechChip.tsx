import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ReactIcon from "mdi-material-ui/React";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    backgroundColor: "#282c34",
    borderRadius: 8,
  },
  icon: {
    fontSize: 16,
    paddingRight: 4,
    // TODO: Move to props
    color: "#61dafb",
  },
  label: {
    fontSize: 12,
    margin: 0,
    color: "#fff",
  },
});

interface Props {
  color?: string;
  icon?: any; // TODO: Type
  label?: string;
}

function ReactChip(props: Props) {
  const classes = useStyles();
  const { icon, label } = props;

  const techIcon = icon
    ? React.cloneElement(icon, {
        className: classes.icon,
      })
    : null;

  return (
    <div className={classes.container}>
      {techIcon}
      <p className={classes.label}>{label}</p>
    </div>
  );
}

export default ReactChip;
