import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import MobileTabs from "./MobileTabs";
import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  divider: {
    height: "80%",
    alignSelf: "center",
  },
});

interface Props extends ResponsiveWrapperProps {
  children: any; // TODO: Type
}

function TopContainer(props: Props) {
  const classes = useStyles();
  const { children, size } = props;
  const { isMobile } = size;

  return (
    <div className={classes.root}>
      {isMobile ? (
        <MobileTabs size={size}>{children}</MobileTabs>
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
