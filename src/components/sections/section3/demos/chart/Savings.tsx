import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GiftOutline from "mdi-material-ui/GiftOutline";
import PalmTree from "mdi-material-ui/PalmTree";
import WeatherPouring from "mdi-material-ui/WeatherPouring";

import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";
import Goal from "./Goal";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#262626",
    padding: "8px 0",
  },
  amountContainer: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 8px",
    borderRadius: 8,
    backgroundColor: "#fff",
    border: "1px solid #e6e6e6",
  },
  goalsContainer: {
    display: "flex",
    flex: 1,
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 8px",
  },
  icon: {
    fontSize: 28,
    padding: "4px 0 4px 12px",
  },
});

interface Props extends ResponsiveWrapperProps {}

function Savings(props: Props) {
  const classes = useStyles();
  const { isMobile, isWide, wideBreakpoint, width } = props.size;

  const mobileMultiplier = isMobile ? 3 : 1;
  const widthMultiplier = isWide ? wideBreakpoint : width;

  const smallFontSize = 0.012 * mobileMultiplier * widthMultiplier;
  const mediumFontSize = 0.02 * mobileMultiplier * widthMultiplier;
  const largeFontSize = 0.04 * mobileMultiplier * widthMultiplier;

  const styles = {
    medium: { fontSize: `${mediumFontSize}px` },
    small: { fontSize: `${smallFontSize}px` },
    large: { fontSize: `${largeFontSize}px` },
  };

  return (
    <div className={classes.root}>
      <div className={classes.amountContainer}>
        <Typography style={styles.medium}>You have saved</Typography>
        <Typography style={styles.large}>$326.55</Typography>
        <Typography style={styles.medium}>Keep going!</Typography>
      </div>
      <div className={classes.goalsContainer}>
        <Typography style={styles.small}>Allocate savings</Typography>
        <Goal
          icon={<GiftOutline className={classes.icon} />}
          label="Birthday present"
          goal={20}
          current={20}
          size={props.size}
        />
        <Goal
          icon={<PalmTree className={classes.icon} />}
          label="Holiday"
          goal={1000}
          current={356}
          size={props.size}
        />
        <Goal
          icon={<WeatherPouring className={classes.icon} />}
          label="Rainy Day"
          goal={3000}
          current={481}
          size={props.size}
        />
      </div>
    </div>
  );
}

export default Savings;
