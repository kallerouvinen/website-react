import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Brush from "@material-ui/icons/Brush";
import Palette from "mdi-material-ui/Palette";
import TechChip from "./TechChip";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: 8,
    border: "1px solid lightgray",
  },
  icon: {
    fontSize: 48,
    color: "gray",
  },
  label: {
    textAlign: "center",
    margin: 12,
  },
  chipContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: 2,
    },
  },
});

function CardDesign() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Brush className={classes.icon} />
      <h3 className={classes.label}>Design</h3>
      <p className={classes.label}>
        I create beautiful designs and user experiences
      </p>
      <h3 className={classes.label}>Tools I use</h3>
      <div className={classes.chipContainer}>
        <TechChip icon={<Palette />} label="MS Paint" />
        <TechChip icon={<Palette />} label="MS Paint 3D" />
      </div>
    </div>
  );
}

export default CardDesign;
