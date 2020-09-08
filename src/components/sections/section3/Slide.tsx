import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Button } from "components";
import Laptop from "./Laptop";
import Mobile from "./Mobile";

const useStyles = makeStyles({
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  demoContainer: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:600px)": {
      height: 280,
    },
    "@media (min-width:960px)": {
      height: 560,
    },
  },
  mobileContainer: {
    position: "absolute",
    transform: "translate(150%, 25%)",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    "& > *": {
      margin: "8px 0",
    },
  },
});

interface Props {
  description?: string;
  title?: string;
  demos: {
    laptop?: React.ReactNode;
    mobile?: React.ReactNode;
  };
  livePath?: string;
}

function Slide(props: Props) {
  const classes = useStyles();
  const { demos, description = "", livePath, title = "" } = props;

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} md={6} className={classes.demoContainer}>
        <Laptop component={demos.laptop} />
        <div className={classes.mobileContainer}>
          <Mobile component={demos.mobile} />
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={classes.textContainer}>
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>
        {livePath && livePath !== "COMING_SOON" && (
          <Button>Visit Website</Button>
        )}
        {livePath === "COMING_SOON" && (
          <Button
            disabled
            onClick={() => {
              console.log("TODO");
            }}
          >
            No live demo
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default Slide;
