import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";

import StockTabs from "./StockTabs";
import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
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
  },
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
};

interface Props extends ResponsiveWrapperProps {
  children: any; // TODO: Type
}

function MobileTabs(props: Props) {
  const [navTab, setNavTab] = useState(0);
  const classes = useStyles();

  const { children, size } = props;

  return (
    <div className={classes.root}>
      <StockTabs onChange={setNavTab} size={size} value={navTab} />
      <SwipeableViews
        style={styles.swipeableViews}
        containerStyle={styles.container}
        index={navTab}
      >
        {/* TODO: Type */}
        {children.map((child: any) => (
          <div className={classes.slide}>{child}</div>
        ))}
      </SwipeableViews>
    </div>
  );
}

export default MobileTabs;
