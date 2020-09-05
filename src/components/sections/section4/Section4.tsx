import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Button from "./Button";
import TextInput from "./TextInput";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "96px 0",
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
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 24,
  },
});

function Section4() {
  const classes = useStyles();

  const handleSubmit = () => {
    console.log("TODO: Submit");
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Typography gutterBottom variant="h4">
          Contact me
        </Typography>
        <Typography gutterBottom>TODO: Description</Typography>
        {/* TODO: Status */}
        {/* TODO: Move contact form to another route */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextInput label={"Name"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput label={"Email"} />
          </Grid>
          <Grid item xs={12}>
            <TextInput label={"Message"} multiline rows={5} />
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Button onClick={handleSubmit}>Send message</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Section4;
