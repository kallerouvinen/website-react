import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#262626",
  },
  positive: {
    color: "#00b300",
  },
});

interface Props extends ResponsiveWrapperProps {}

function Value(props: Props) {
  const classes = useStyles();
  const { isMobile, isWide, wideBreakpoint, width } = props.size;

  const mobileMultiplier = isMobile ? 3 : 1;
  const widthMultiplier = isWide ? wideBreakpoint : width;

  const companyNameFontSize = 0.02 * mobileMultiplier * widthMultiplier;
  const priceFontSize = 0.05 * mobileMultiplier * widthMultiplier;
  const priceChangeFontSize = 0.018 * mobileMultiplier * widthMultiplier;

  const styles = {
    companyName: { fontSize: `${companyNameFontSize}px` },
    price: { fontSize: `${priceFontSize}px` },
    priceChange: { fontSize: `${priceChangeFontSize}px` },
  };

  return (
    <div className={classes.root}>
      <Typography style={styles.companyName}>Example Ltd.</Typography>
      <Typography style={styles.price}>$46.55</Typography>
      <Typography style={styles.priceChange}>
        <strong className={classes.positive}>+$1.22 (2.69%)</strong> Today
      </Typography>
    </div>
  );
}

export default Value;
