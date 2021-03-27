import React, { useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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
    justifyContent: "center",
    alignItems: "center",
    padding: "192px 0 96px 0",
    backgroundColor: "#6e58d7",
    clipPath: "polygon(0 0, 100% 96px, 100% 100%, 0 100%)",
  },
  container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 44,
    color: "#fff",
  },
  submitContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorText: {
    color: "#fff",
    maxWidth: "50vw",
  },
});

function Section4() {
  const classes = useStyles();
  const [loadingState, setLoadingState] = useState("Ready");
  const [sendMessageFailed, setSendMessageFailed] = useState(false);

  const handleFormSubmit = (values: any, { resetForm }: any) => {
    console.log("values", values);

    setLoadingState("Loading");
    if (sendMessageFailed) {
      setSendMessageFailed(false);
    }

    setTimeout(() => {
      setLoadingState("Error");
      // setLoadingState("Success");
      setSendMessageFailed(true);
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
    //       setSendMessageFailed(true);
    //     },
    //   );
  };

  return (
    <div id="section4" className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <h1 className={classes.title}>Say hello</h1>

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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextAreaInput
                    label="Message"
                    name="message"
                    onChange={handleChange}
                    rows={5}
                    value={values.message}
                  />
                </Grid>
                <Grid item xs={12} className={classes.submitContainer}>
                  <SubmitButton
                    state={loadingState}
                    disabled={loadingState !== "Ready"}
                  />
                  <p className={classes.errorText}>
                    {errors.name === "Required" ||
                    errors.email === "Required" ||
                    errors.message === "Required"
                      ? "Fill all the fields"
                      : errors.email === "Invalid email"
                      ? "Invalid email address"
                      : sendMessageFailed
                      ? "Something went wrong. Please try again or contact me via any of my social media accounts"
                      : ""}
                  </p>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Section4;
