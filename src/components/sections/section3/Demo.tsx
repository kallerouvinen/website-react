import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Laptop from "../../basic/Laptop";
import Mobile from "../../basic/Mobile";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  demoContainer: {
    display: "flex",
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  laptopContainer: {
    position: "absolute",
    transform: "translate(0%, 0%)",
  },
  mobileContainer: {
    position: "absolute",
    transform: "translate(120%, 25%)",
  },
});

interface Props {
  // TODO: Types
  data: {
    laptop?: any;
    mobile?: any;
  };
}

function Demo(props: Props) {
  const classes = useStyles();
  // TODO: Use data
  // const { data } = props;

  return (
    <div className={classes.root}>
      <div className={classes.demoContainer}>
        <div className={classes.laptopContainer}>
          <Laptop>
            <div />
          </Laptop>
        </div>
        <div className={classes.mobileContainer}>
          <Mobile>
            <div />
          </Mobile>
        </div>
      </div>
    </div>
  );
}

export default Demo;
