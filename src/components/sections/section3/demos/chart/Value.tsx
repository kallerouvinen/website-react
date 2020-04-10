import React from "react";
import { withResizeDetector } from "react-resize-detector";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#262626",
    padding: 16,
  },
  positive: {
    color: "#00b300",
  },
});

interface Props {
  mode?: "laptop" | "mobile";
  height: number;
  width: number;
}

function Value(props: Props) {
  const classes = useStyles();
  const { mode = "laptop", width } = props;

  const isMobile = mode === "mobile";

  return (
    <div className={classes.root}>
      <Typography style={{ fontSize: `${(isMobile ? 0.06 : 0.02) * width}px` }}>
        Example Ltd.
      </Typography>
      <Typography style={{ fontSize: `${(isMobile ? 0.15 : 0.05) * width}px` }}>
        $46.55
      </Typography>
      <Typography
        style={{ fontSize: `${(isMobile ? 0.054 : 0.018) * width}px` }}
      >
        <strong className={classes.positive}>+$1.22 (2.69%)</strong> Today
      </Typography>
    </div>
  );
}

export default withResizeDetector(Value);
