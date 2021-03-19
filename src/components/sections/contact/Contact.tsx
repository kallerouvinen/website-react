import React from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
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

function Contact() {
  const classes = useStyles();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_julervm",
        "template_ta50vl9",
        e.target,
        "user_NLsJL6dc9TUARPhYsGhR7",
      )
      .then(
        (result) => {
          // TODO: Show feedback for successfully sent message
          console.log(result.text);
        },
        (error) => {
          // TODO: Show feedback for something going wrong. Tell sender to re-send and if still not working to contact via social media
          console.log(error.text);
        },
      );
  };

  // TODO: Add captcha validation

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Typography gutterBottom variant="h4">
          Contact me
        </Typography>
        <Typography gutterBottom>
          Do you want to work with me or hire me? Send me a message here and
          let's see what we can do together. You can also contact me on social
          media platforms, links in the bottom of the page.
        </Typography>
        <form className="contact-form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextInput label="Name" name="name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput label="Email" name="email" />
            </Grid>
            <Grid item xs={12}>
              <TextInput label="Message" name="message" multiline rows={5} />
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <SubmitButton>Send message</SubmitButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
