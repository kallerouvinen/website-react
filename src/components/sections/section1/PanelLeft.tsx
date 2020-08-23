import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { FadeIn } from "components";
import image from "assets/image.jpg";

const useStyles = makeStyles({
  image: {
    height: "90vh",
    objectFit: "contain",
  },
});

interface Props {
  shouldAnimate: boolean;
}

function PanelLeft(props: Props) {
  const { shouldAnimate } = props;
  const classes = useStyles();

  // TODO: Add multiple scaled images depending on screen size

  return (
    <FadeIn shouldAnimate={shouldAnimate} delay={300} direction="down">
      <img className={classes.image} src={image} alt="" />
    </FadeIn>
  );
}

export default PanelLeft;
