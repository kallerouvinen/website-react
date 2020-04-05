import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "row",
    // TODO: Adjust background color
    backgroundColor: "moccasin",
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
}

function Slide(props: Props) {
  const classes = useStyles();
  const { description = "", title = "" } = props;

  return (
    <div className={classes.root}>
      <div className={classes.screenContainer}>
        <p>TODO: Screen</p>
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
