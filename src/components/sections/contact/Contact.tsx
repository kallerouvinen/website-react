import React, { useState } from "react";
// import emailjs from "emailjs-com";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SubmitButton from "./SubmitButton";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

function validateEmail(email: string) {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regEx.test(email);
}

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
    flexDirection: "column",
    alignItems: "center",
    margin: 24,
    "& > *": {
      marginBottom: 6,
    },
  },
});

function Contact() {
  const classes = useStyles();
  const [loadingState, setLoadingState] = useState("Ready");
  // Ready, Loading, Success, Error

  const handleFormSubmit = (values: any, { resetForm }: any) => {
    console.log("values", values);

    setLoadingState("Loading");

    setTimeout(() => {
      setLoadingState("Error");
      resetForm();
      setTimeout(() => {
        setLoadingState("Ready");
      }, 2000);
    }, 1000);
    // emailjs
    //   .send(
    //     "service_julervm",
    //     "template_ta50vl9",
    //     values,
    //     "user_NLsJL6dc9TUARPhYsGhR7",
    //   )
    //   .then(
    //     (result) => {
    //       setLoadingState("Success");
    //       resetForm();
    //       setTimeout(() => {
    //         setLoadingState("Ready");
    //       }, 2000);
    //     },
    //     (error) => {
    //       setLoadingState("Error");
    //     },
    //   );
  };

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

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validate={(values) => {
            const errors: any = {};

            if (!values.name) {
              errors.name = "Required";
            }
            if (!validateEmail(values.email)) {
              errors.email = "Invalid email";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.message) {
              errors.message = "Required";
            }

            return errors;
          }}
          onSubmit={handleFormSubmit}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form className="contact-form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    error={
                      errors.name === "Required"
                        ? "Name is required"
                        : undefined
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={
                      errors.email === "Required"
                        ? "Email is required"
                        : errors.email === "Invalid email"
                        ? "Invalid email address"
                        : undefined
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextAreaInput
                    label="Message"
                    name="message"
                    onChange={handleChange}
                    rows={5}
                    value={values.message}
                    error={
                      errors.message === "Required"
                        ? "Message is required"
                        : undefined
                    }
                  />
                </Grid>
                <Grid item xs={12} className={classes.buttonContainer}>
                  <SubmitButton
                    state={loadingState}
                    disabled={loadingState !== "Ready"}
                  />
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Contact;
