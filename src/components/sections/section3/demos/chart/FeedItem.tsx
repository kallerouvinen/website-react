import React from "react";
import { withResizeDetector } from "react-resize-detector";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    color: "#262626",
  },
});

interface Props {
  label?: string;
  height: number;
  width: number;
}

function FeedItem(props: Props) {
  const classes = useStyles();
  const { label = "", width } = props;

  return (
    <div className={classes.root} style={{ padding: `${0.03 * width}px` }}>
      <Typography style={{ fontSize: `${0.03 * width}px` }}>{label}</Typography>
    </div>
  );
}

export default withResizeDetector(FeedItem);
