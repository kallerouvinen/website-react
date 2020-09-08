import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// import PureCSS from "./PureCSS";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f29022",
    padding: "96px 0 192px 0",
    borderTop: "5px solid #fff",
    clipPath: "polygon(0 0, 0 calc(100% - 96px), 100% 100%, 100% 0)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontWeight: 500,
  },
  text: {
    color: "#fff",
  },
});

function Section2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Typography className={classes.title} gutterBottom variant="h4">
          TODO: Content
        </Typography>
        {/* <Typography className={classes.text}>TODO: Description</Typography> */}
        {/* <PureCSS /> */}
      </Container>
    </div>
  );
}

export default Section2;
