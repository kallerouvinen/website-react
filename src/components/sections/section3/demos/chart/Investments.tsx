import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
    color: "#262626",
  },
  item: {
    display: "flex",
    color: "#262626",
  },
});

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

interface Props extends ResponsiveWrapperProps {}

function Investments(props: Props) {
  const classes = useStyles();
  const { isMobile, isWide, wideBreakpoint, width } = props.size;

  const mobileMultiplier = isMobile ? 3 : 1;
  const widthMultiplier = isWide ? wideBreakpoint : width;

  const titleFontSize = 0.02 * widthMultiplier;
  const itemPadding = 0.01 * mobileMultiplier * widthMultiplier;
  const labelFontSize = 0.01 * mobileMultiplier * widthMultiplier;

  const styles = {
    title: { fontSize: `${titleFontSize}px` },
    item: { padding: `${itemPadding}px` },
    label: { fontSize: `${labelFontSize}px` },
  };

  return (
    <div className={classes.root}>
      {!isMobile && <Typography style={styles.title}>Investments</Typography>}
    </div>
  );
}

export default Investments;
