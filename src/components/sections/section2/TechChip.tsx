import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ReactIcon from "mdi-material-ui/React";

const useStyles = makeStyles({
  container: {
    display: "flex",
    padding: 6,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid #fff",
    borderRadius: 8,
  },
  icon: {
    fontSize: 18,
    paddingRight: 4,
    // TODO: Move to theme
    color: "#61dafb",
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    margin: 0,
    color: "#fff",
  },
});

interface Props {
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
