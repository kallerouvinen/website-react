import React from "react";
import { withResizeDetector } from "react-resize-detector";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import FeedItem from "./FeedItem";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    color: "#262626",
    padding: 16,
  },
});

interface Props {
  height: number;
  width: number;
}

function Value(props: Props) {
  const classes = useStyles();
  const { width } = props;

  const data = [
    {
      id: 1,
      label: "Placeholder 1",
    },
    {
      id: 2,
      label: "Placeholder 2",
    },
    {
      id: 3,
      label: "Placeholder 3",
    },
    {
      id: 4,
      label: "Placeholder 3",
    },
    {
      id: 5,
      label: "Placeholder 3",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography style={{ fontSize: `${0.02 * width}px` }}>News</Typography>
      {data.map((item) => (
        <>
          <FeedItem key={item.id} label={item.label} />
          <Divider />
        </>
      ))}
    </div>
  );
}

export default withResizeDetector(Value);
