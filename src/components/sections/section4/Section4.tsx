import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Button } from "components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "192px 0 96px 0",
    backgroundColor: "#6e58d7",
    clipPath: "polygon(0 0, 100% 96px, 100% 100%, 0 100%)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {},
  description: {},
  text: {
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 24,
  },
});

function Section4() {
  const classes = useStyles();

  return (
    <div id="section4" className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={classes.text} gutterBottom variant="h4">
              TODO: Title
            </Typography>
            <Typography className={classes.text} gutterBottom>
              TODO: Description
            </Typography>
            {/* TODO: Status */}
            <Link to="/contact">
              <Button color="color5">TODO: Button label</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Section4;
