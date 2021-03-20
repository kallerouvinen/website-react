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

const size = Math.max(Math.min(500, 1.1 * window.innerWidth), 400);

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
    backgroundColor: "#3f5efb",
    WebkitTapHighlightColor: "transparent",
    "& > *": {
      color: "#fff",
      fontSize: 32,
    },
    "&:hover": {
      backgroundColor: "#3f5efb", // TODO: Darken
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
    backgroundColor: "#3f5efb",
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
    display: "flex",
    flexDirection: "column",
    padding: `${size / 7}px 0 0 ${size / 4}px`,
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
  menuButton: {
    border: "none",
    cursor: "pointer",
    transition: "0.2s all",
    backgroundColor: "transparent",
    WebkitTapHighlightColor: "transparent",
    "&:hover": {
      transform: "scale(1.08)",
      "& > *": {
        color: "#fff",
      },
    },
    "&:focus": {
      outline: "none",
    },
  },
  navLink: {
    color: "#cdd5fe",
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

  const scrollToSection = (number: number) => {
    document
      .getElementById(`section${number}`)
      ?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  const scrollToSection1 = () => scrollToSection(1);
  const scrollToSection2 = () => scrollToSection(2);
  const scrollToSection3 = () => scrollToSection(3);
  const scrollToSection4 = () => scrollToSection(4);

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
          <button className={classes.menuButton} onClick={scrollToSection1}>
            <Typography className={classes.navLink}>Home</Typography>
          </button>
          <button className={classes.menuButton} onClick={scrollToSection2}>
            <Typography className={classes.navLink}>About me</Typography>
          </button>
          <button className={classes.menuButton} onClick={scrollToSection3}>
            <Typography className={classes.navLink}>My work</Typography>
          </button>
          <button className={classes.menuButton} onClick={scrollToSection4}>
            <Typography className={classes.navLink}>Contact</Typography>
          </button>
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
