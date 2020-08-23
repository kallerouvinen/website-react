import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Demo from "./Demo";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "row",
  },
  screenContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    display: "flex",
    flex: 1,
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
      <div className={classes.screenContainer}>
        <Demo demos={demos} />
      </div>
      <div className={classes.infoContainer}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography gutterBottom>{description}</Typography>
        {livePath && livePath !== "COMING_SOON" && <Button>TODO</Button>}
        {livePath === "COMING_SOON" && (
          <Typography>Live demo coming soon.</Typography>
        )}
      </div>
    </div>
  );
}

export default Slide;
