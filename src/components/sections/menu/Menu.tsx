import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "./MenuIcon";

const springWobbly = (t: number) => {
  return (
    -0.5 *
    2.71828 ** (-6 * t) *
    (-2 * 2.71828 ** (6 * t) + Math.sin(12 * t) + 2 * Math.cos(12 * t))
  );
};

const lerp = (a: number, b: number, p: number) => {
  return a + p * (b - a);
};

const wobblyAnimation = (start: number, end: number) => {
  // TODO: Type
  const anim: any = {};
  for (let i = 0; i < 101; i++) {
    const t = i / 100;
    const p = springWobbly(t);
    const size = lerp(start, end, p);
    anim[`${i}%`] = { height: size, width: size };
  }
  return anim;
};

const size = Math.min(500, 1.1 * window.innerWidth);

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
  "@keyframes openMenu": wobblyAnimation(0, size),
  "@keyframes closeMenu": {
    "0%": { width: size, height: size },
    "100%": { width: 0, height: 0 },
  },
  menu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: "purple",
    borderBottomLeftRadius: size,
    overflow: "hidden",
  },
  menuAnimated: {
    animation: `$closeMenu 500ms`,
  },
  menuOpen: {
    animation: `$openMenu 500ms`,
    animationFillMode: "forwards",
  },
  navLinkContainer: {
    padding: `${size / 4}px 0 0 ${size / 5}px`,
    textAlign: "center",
    "& > *": {
      margin: "8px 0",
    },
    opacity: 0,
    transition: "opacity 0s",
  },
  navLinkContainerOpen: {
    opacity: 1,
    transition: "opacity 0.2s ease 0.3s",
  },
  navLink: {
    color: "#fff",
    fontSize: 28,
  },
});

function Menu() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const enableAnimations = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      enableAnimations.current = true;
    }, 5);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${classes.menu} ${
          enableAnimations.current && classes.menuAnimated
        } ${isOpen && classes.menuOpen}`}
      >
        <div
          className={`${classes.navLinkContainer} ${
            isOpen && classes.navLinkContainerOpen
          }`}
        >
          {/* TODO: Actual links */}
          <Typography className={classes.navLink}>HOME</Typography>
          <Typography className={classes.navLink}>MY WORK</Typography>
          <Typography className={classes.navLink}>CONTACT</Typography>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={toggleMenu}>
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>
    </>
  );
}

export default Menu;
