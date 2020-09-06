import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "./MenuIcon";

const useStyles = makeStyles({
  root: {},
  buttonContainer: {
    position: "fixed",
    top: 20,
    right: 20,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 56,
    height: 56,
    borderRadius: 48,
    border: "none",
    cursor: "pointer",
    transition: "0.3s all",
    backgroundColor: "purple",
    "& > *": {
      color: "#fff",
      fontSize: 32,
    },
    "&:hover": {
      backgroundColor: "purple",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

function Menu() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={toggleMenu}>
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>
      <div className={classes.root}></div>
    </>
  );
}

export default Menu;
