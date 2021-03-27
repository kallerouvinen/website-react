import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
    padding: 24,
    "& > *": {
      margin: "12px 48px",
    },
    textAlign: "center",
  },
  description: {
    fontSize: 18,
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
        <h1>{title}</h1>
        <p className={classes.description}>{description}</p>
        {livePath && livePath !== "NOT_AVAILABLE" && (
          <a href={livePath} target="_blank" rel="noreferrer">
            <Button>Visit Website</Button>
          </a>
        )}
        {livePath === "NOT_AVAILABLE" && <Button disabled>No live demo</Button>}
      </Grid>
    </Grid>
  );
}

export default Slide;
