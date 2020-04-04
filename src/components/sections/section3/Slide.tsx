import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

interface Props {
  onClick?: () => void;
}

function Slide(props: Props) {
  const classes = useStyles();
  const { onClick } = props;

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: getRandomColor() }}
      onClick={onClick}
    >
      <Typography>Placeholder Slide</Typography>
    </div>
  );
}

export default Slide;
