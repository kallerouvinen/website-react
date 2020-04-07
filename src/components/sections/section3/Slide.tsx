import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  // TODO: Types
  demos: {
    laptop?: any;
    mobile?: any;
  };
}

function Slide(props: Props) {
  const classes = useStyles();
  const { description = "", title = "", demos } = props;

  return (
    <div className={classes.root}>
      <div className={classes.screenContainer}>
        <Demo demos={demos} />
      </div>
      <div className={classes.infoContainer}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </div>
    </div>
  );
}

export default Slide;
