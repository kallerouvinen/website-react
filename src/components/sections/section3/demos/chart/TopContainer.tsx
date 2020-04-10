import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import MobileTabs from "./MobileTabs";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    // flexDirection: "column", // TODO
    overflow: "hidden",
  },
  divider: {
    height: "80%",
    alignSelf: "center",
  },
});

interface Props {
  children: any;
  isMobile: boolean;
}

function TopContainer(props: Props) {
  const classes = useStyles();
  const { children, isMobile } = props;

  return (
    <div className={classes.root}>
      {isMobile ? (
        <MobileTabs>{children}</MobileTabs>
      ) : (
        children.map((child: any) => (
          <>
            {child}
            <Divider className={classes.divider} orientation="vertical" />
          </>
        ))
      )}
    </div>
  );
}

export default TopContainer;
