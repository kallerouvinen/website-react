import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import PureCSS from "./PureCSS";
import Card from "./Card";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fc466b",
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
      <Container className={classes.container} maxWidth="lg">
        <Typography className={classes.title} gutterBottom variant="h4">
          What I do
        </Typography>
        {/* <Typography className={classes.text}>TODO: Description</Typography> */}
        {/* <PureCSS /> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

export default Section2;
