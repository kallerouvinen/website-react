import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CardWhatIDo from "./CardWhatIDo";
import CardTechnologies from "./CardTechnologies";

const useStyles = makeStyles({
  root: {
    // TODO: Get backgroundColor from theme
    backgroundColor: "#fc466b",
    padding: "48px 0 144px 0",
    borderTop: "5px solid #fff",
    clipPath: "polygon(0 0, 0 calc(100% - 96px), 100% 100%, 100% 0)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "96px 24px",
  },
  title: {
    color: "#fff",
    fontWeight: 500,
    marginBottom: 32,
  },
  text: {
    color: "#fff",
  },
  gridItem: {
    display: "flex",
  },
});

function Section2() {
  const classes = useStyles();

  return (
    <div id="section2" className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid className={classes.gridItem} item xs={12} md={6}>
            <CardWhatIDo />
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={6}>
            <CardTechnologies />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Section2;
