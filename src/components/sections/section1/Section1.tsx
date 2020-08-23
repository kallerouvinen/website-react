import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import PanelRight from "./PanelRight";
import ScrollIndicator from "./ScrollIndicator";
import { FadeIn } from "components";
import image from "assets/image.jpg";

const useStyles = makeStyles({
  grid: {
    height: "100vh",
  },
  gridItem: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  left: {
    alignItems: "flex-end",
  },
  image: {
    height: "90vh",
    objectFit: "contain",
  },
  right: {
    alignItems: "center",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});

function Section1() {
  const classes = useStyles();

  // TODO: Add multiple scaled images depending on screen size

  return (
    <>
      <Grid className={classes.grid} container>
        <Grid className={`${classes.gridItem} ${classes.left}`} item md={6}>
          <FadeIn shouldAnimate delay={300} direction="down">
            <img className={classes.image} src={image} alt="" />
          </FadeIn>
        </Grid>
        <Grid className={`${classes.gridItem} ${classes.right}`} item md={6}>
          <PanelRight />
        </Grid>
      </Grid>

      {/* TODO: Scroll indicator should be a button? */}
      <div className={classes.scrollIndicator}>
        <FadeIn shouldAnimate delay={2000} direction="down">
          <ScrollIndicator />
        </FadeIn>
      </div>
    </>
  );
}

export default Section1;
