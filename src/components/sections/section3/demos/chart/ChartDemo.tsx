import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {
  withResponsiveWrapper,
  ResponsiveWrapperProps,
} from "../../../../hoc/withResponsiveWrapper";

import ChartComponent from "./ChartComponent";
import Feed from "./Feed";
import MobileTabs from "./MobileTabs";
import NavTabs from "./NavTabs";
import Trade from "./Trade";
import Value from "./Value";
import TopContainer from "./TopContainer";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
  },
  navBar: {
    display: "flex",
    flex: 1,
  },
  top: {
    display: "flex",
    flex: 6,
    padding: "16px 0",
  },
  chart: {
    display: "flex",
    flex: 6,
  },
  divider: {
    height: "80%",
    alignSelf: "center",
  },
});

interface Props extends ResponsiveWrapperProps {}

function ChartDemo(props: Props) {
  const classes = useStyles();
  const [navTab, setNavTab] = useState(0);
  const { size } = props;
  const { isMobile } = size;

  return (
    <div className={classes.root}>
      {/* TODO: Navbar / Menu */}
      <div className={classes.navBar}>
        {isMobile ? null : <NavTabs value={navTab} onChange={setNavTab} />}
      </div>

      <div className={classes.top}>
        <TopContainer isMobile={isMobile}>
          <Value size={size} />
          <Trade size={size} />
          <Feed size={size} />
        </TopContainer>
      </div>

      <div className={classes.chart}>
        <ChartComponent />
      </div>
    </div>
  );
}

export default withResponsiveWrapper(ChartDemo);
