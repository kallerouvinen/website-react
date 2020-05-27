import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  withResponsiveWrapper,
  ResponsiveWrapperProps,
} from "../../../../hoc/withResponsiveWrapper";

import ChartComponent from "./ChartComponent";
import Investments from "./Investments";
import NavTabs from "./NavTabs";
import Expenses from "./Expenses";
import Savings from "./Savings";
import TopContainer from "./TopContainer";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    background: "linear-gradient(#fff, #f2f2f2 5%, #f2f2f2 5%, #fff)",
  },
  navBar: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  section: {
    display: "flex",
    flex: 12,
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

  return (
    <div className={classes.root}>
      {/* TODO: Navbar / Menu */}
      <div className={classes.navBar}>
        {size.isMobile ? null : (
          <NavTabs onChange={setNavTab} size={size} value={navTab} />
        )}
      </div>

      <div className={classes.section}>
        <TopContainer size={size}>
          <Savings size={size} />
          <Expenses size={size} />
          <Investments size={size} />
        </TopContainer>
      </div>

      {/* <div className={classes.section}></div> */}

      {/* <div className={classes.chart}>
        <ChartComponent />
      </div> */}
    </div>
  );
}

export default withResponsiveWrapper(ChartDemo);
