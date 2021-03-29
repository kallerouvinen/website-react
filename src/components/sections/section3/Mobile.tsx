import React, { MouseEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bezel: {
    display: "flex",
    padding: "2.97%",
    backgroundColor: "#242429",
    borderTopLeftRadius: "11.85% 5.93%",
    borderTopRightRadius: "11.85% 5.93%",
    borderBottomLeftRadius: "11.85% 5.93%",
    borderBottomRightRadius: "11.85% 5.93%",
    width: 50.5,
    height: 101.5,
    boxShadow: "0px 0.140625em 0.234375em -0.09375em #808080",
    "@media (min-width:600px)": {
      width: 67.5,
      height: 135,
      boxShadow: "0px 0.1875em 0.3125em -0.125em #808080",
    },
    "@media (min-width:960px)": {
      width: 67.5,
      height: 135,
      boxShadow: "0px 0.1875em 0.3125em -0.125em #808080",
    },
    "@media (min-width:1280px)": {
      width: 101.25,
      height: 202.5,
      boxShadow: "0px 0.28125em 0.46875em -0.1875em #808080",
    },
    // Original values for reference:
    //   width: 135, // 9 * 15
    //   height: 270, // 18 * 15
    //   boxShadow: "0px 0.375em 0.625em -0.25em #808080",
  },
  screen: {
    position: "relative",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopLeftRadius: "8.89% 4.44%",
    borderTopRightRadius: "8.89% 4.44%",
    borderBottomLeftRadius: "8.89% 4.44%",
    borderBottomRightRadius: "8.89% 4.44%",
    overflow: "hidden",
  },
  clickBlocker: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

interface Props {
  component?: React.ReactNode;
}

function Mobile(props: Props) {
  const classes = useStyles();
  const { component = null } = props;

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.bezel}>
      <div className={classes.screen}>
        <video autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/assets/${component}`}
            type="video/mp4"
          />
        </video>
        <div className={classes.clickBlocker} onClick={stopPropagation} />
      </div>
    </div>
  );
}

export default Mobile;
