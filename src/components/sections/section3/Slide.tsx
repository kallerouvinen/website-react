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

interface Props {
  backgroundColor?: string;
  onClick?: () => void;
}

function Slide(props: Props) {
  const classes = useStyles();
  const { backgroundColor = "#fff", onClick } = props;

  return (
    <div className={classes.root} style={{ backgroundColor }} onClick={onClick}>
      <Typography>Placeholder Slide</Typography>
    </div>
  );
}

export default Slide;
