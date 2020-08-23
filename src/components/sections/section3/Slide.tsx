import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Demo from "./Demo";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "row",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.gridItem} xs={12} lg={6}>
          <Demo demos={demos} />
        </Grid>
        <Grid item className={classes.gridItem} xs={12} lg={6}>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography gutterBottom>{description}</Typography>
          {livePath && livePath !== "COMING_SOON" && <Button>TODO</Button>}
          {livePath === "COMING_SOON" && (
            <Typography>Live demo coming soon.</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Slide;
