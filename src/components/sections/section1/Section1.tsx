import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";

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
  right: {
    alignItems: "center",
  },
});

function Section1() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <Grid className={classes.grid} container>
      <Grid className={`${classes.gridItem} ${classes.left}`} item md={6}>
        <PanelLeft shouldAnimate={shouldAnimate} />
      </Grid>
      <Grid className={`${classes.gridItem} ${classes.right}`} item md={6}>
        <PanelRight shouldAnimate={shouldAnimate} />
      </Grid>
    </Grid>
  );
}

export default Section1;
