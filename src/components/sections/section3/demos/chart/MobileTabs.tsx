import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";

import StockTabs from "./StockTabs";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "tomato",
  },
  slide: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const styles = {
  swipeableViews: {
    display: "flex",
    flex: 1,
    width: "100%",
    // backgroundColor: "tomato",
  },
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
};

interface Props {
  children: any; // TODO: Type
}

function MobileTabs(props: Props) {
  const [navTab, setNavTab] = useState(0);
  const classes = useStyles();

  const { children } = props;

  return (
    <div className={classes.root}>
      <StockTabs onChange={setNavTab} value={navTab} />
      <SwipeableViews
        style={styles.swipeableViews}
        containerStyle={styles.container}
        index={navTab}
      >
        {children.map((child: any) => (
          <div className={classes.slide}>{child}</div>
        ))}
      </SwipeableViews>
    </div>
  );
}

export default MobileTabs;
