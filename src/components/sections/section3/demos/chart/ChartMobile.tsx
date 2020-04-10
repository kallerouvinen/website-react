import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";

import ChartComponent from "./ChartComponent";
import Feed from "./Feed";
import StockTabs from "./StockTabs";
import Trade from "./Trade";
import Value from "./Value";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
  },
  top: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    flex: 6,
  },
  slide: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    display: "flex",
    flex: 6,
  },
});

const styles = {
  swipeableViews: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
  container: {
    display: "flex",
    width: "100%",
  },
};

function ChartMobile() {
  const [navTab, setNavTab] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <StockTabs onChange={setNavTab} value={navTab} />
        <SwipeableViews
          style={styles.swipeableViews}
          containerStyle={styles.container}
          index={navTab}
        >
          <div className={classes.slide}>
            <Value mode="mobile" />
          </div>
          <div className={classes.slide}>
            <Trade mode="mobile" />
          </div>
          <div className={classes.slide}>
            <Feed mode="mobile" />
          </div>
        </SwipeableViews>
      </div>
      <div className={classes.chart}>
        <ChartComponent />
      </div>
    </div>
  );
}

export default ChartMobile;
