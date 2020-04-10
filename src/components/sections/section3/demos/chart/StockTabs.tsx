import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";

const useStyles = makeStyles({
  tabsRoot: {
    minHeight: 0,
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "5%",
    "& > div": {
      width: "30%",
      borderRadius: 20,
      backgroundColor: "#4d4dff",
    },
  },
  tabRoot: {
    width: "33%",
    maxWidth: "33%",
    minWidth: 0,
    minHeight: 0,
    textTransform: "none",
    fontWeight: "normal",
    "&:focus": {
      opacity: 1,
    },
  },
});

interface Props extends ResponsiveWrapperProps {
  onChange: (i: number) => void;
  value: number;
}

function StockTabs(props: Props) {
  const classes = useStyles();
  const { onChange, value } = props;
  const { isMobile, isWide, wideBreakpoint, width } = props.size;

  const mobileMultiplier = isMobile ? 3 : 1;
  const widthMultiplier = isWide ? wideBreakpoint : width;

  const tabFontSize = 0.01 * mobileMultiplier * widthMultiplier;
  const tabPadding = 0.005 * mobileMultiplier * widthMultiplier;

  const styles = {
    tab: { fontSize: `${tabFontSize}px`, padding: `${tabPadding}px` },
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Tabs
      classes={{ root: classes.tabsRoot, indicator: classes.indicator }}
      TabIndicatorProps={{ children: <div /> }}
      onChange={handleChange}
      value={value}
    >
      <Tab
        classes={{ root: classes.tabRoot }}
        disableRipple
        label="Price"
        style={styles.tab}
      />
      <Tab
        classes={{ root: classes.tabRoot }}
        disableRipple
        label="Trade"
        style={styles.tab}
      />
      <Tab
        classes={{ root: classes.tabRoot }}
        disableRipple
        label="News"
        style={styles.tab}
      />
    </Tabs>
  );
}

export default StockTabs;
