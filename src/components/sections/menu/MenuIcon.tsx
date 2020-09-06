import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const inBezier = "cubic-bezier(.55,.05,.67,.2)";
const outBezier = "cubic-bezier(.2,.6,.35,1)";

const useStyles = makeStyles({
  menuIcon: {
    position: "absolute",
    display: "block",
    width: 24,
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 2,
    transition: `transform .2s ${inBezier}`,
    "&::before": {
      position: "absolute",
      display: "block",
      bottom: 8,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      borderRadius: 2,
      content: '""',
      transition: `bottom .1s ${inBezier} .2s, transform .2s ${inBezier}`,
    },
    "&::after": {
      position: "absolute",
      display: "block",
      top: 8,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      borderRadius: 2,
      content: '""',
      transition: `top .1s ${inBezier} .2s, transform .2s ${inBezier}`,
    },
  },
  menuIconOpen: {
    transition: `transform .2s ${outBezier} .1s`,
    transform: "rotate(135deg)",
    "&::before": {
      transition: `bottom .1s ${outBezier}, transform .2s ${outBezier} .1s`,
      bottom: 0,
      transform: "rotate(90deg)",
    },
    "&::after": {
      transition: `top .1s ${outBezier}, transform .2s ${outBezier} .1s`,
      top: 0,
      transform: "rotate(90deg)",
    },
  },
});

interface Props {
  isOpen?: boolean;
}

function MenuIcon(props: Props) {
  const classes = useStyles();
  const { isOpen = false } = props;

  return (
    <span className={`${classes.menuIcon} ${isOpen && classes.menuIconOpen}`} />
  );
}

export default MenuIcon;
