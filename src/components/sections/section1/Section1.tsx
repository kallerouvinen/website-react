import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import PanelRight from "./PanelRight";
import ScrollIndicator from "./ScrollIndicator";
import { FadeIn } from "components";
import image from "assets/image.jpg";

const useStyles = makeStyles({
  sectionContainer: {
    position: "relative",
    display: "flex",
    minHeight: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0.1,
    "@media (min-width:1280px)": {
      left: "calc(25vw - 30vh)",
      opacity: 1,
    },
  },
  image: {
    height: "85vh",
    objectFit: "contain",
    "@media (min-width:1280px)": {
      height: "90vh",
    },
  },
  gridItem: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  scrollIndicator: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});

function Section1() {
  const classes = useStyles();
  const lgUp = useMediaQuery("(min-width:1280px)");
  const gridJustify = lgUp ? "flex-end" : "center";

  // TODO: Add multiple scaled images depending on screen size

  return (
    <div className={classes.sectionContainer}>
      <Grid container justify={gridJustify}>
        <div className={classes.imageContainer}>
          <FadeIn shouldAnimate delay={300} direction="down">
            <img className={classes.image} src={image} alt="" />
          </FadeIn>
        </div>
        <Grid className={classes.gridItem} item lg={6}>
          <PanelRight />
        </Grid>
      </Grid>

      {/* TODO: Scroll indicator should be a button? */}
      <div className={classes.scrollIndicator}>
        <FadeIn shouldAnimate delay={2000} direction="down">
          <ScrollIndicator />
        </FadeIn>
      </div>
    </div>
  );
}

export default Section1;
