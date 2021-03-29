import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import SubmitButton from "./SubmitButton";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

function validateEmail(email: string) {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regEx.test(email);
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 192px 0 96px 0;
  background-color: #6e58d7;
  clip-path: polygon(0 0, 100% 96px, 100% 100%, 0 100%);
`;

const Container = styled(MUIContainer)`
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 44px;
  color: #fff;
`;

const Paragraph = styled.p`
  margin-bottom: 32px;
  font-size: 18px;
  color: #fff;
`;

const ErrorText = styled.p`
  color: #fff;
  max-width: 50vw;
`;

const Captcha = styled.div`
  padding: 8px;
`;

const SubmitContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Section4() {
  const [loadingState, setLoadingState] = useState("Ready");
  const [sendMessageFailed, setSendMessageFailed] = useState(false);
  const [captchaSuccessful, setCaptchaSuccessful] = useState(false);

  const handleFormSubmit = (values: any, { resetForm }: any) => {
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

  const handleCaptchaSuccess = () => {
    setCaptchaSuccessful(true);
  };

  return (
    <Root>
      <Container id="section4" maxWidth="md">
        <Title>Say hello</Title>
        <Paragraph>
          You can contact me using this form or via any of my social media.
          Links can be found below.
        </Paragraph>
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
                <Captcha
                  className="g-recaptcha"
                  data-sitekey="6Lc4IpQaAAAAAAe-vaTYTq-t302gUQhAOr-b9FwE"
                  data-callback={handleCaptchaSuccess}
                />
                <SubmitContainer item xs={12}>
                  <SubmitButton
                    state={loadingState}
                    disabled={loadingState !== "Ready"}
                  />
                  <ErrorText>
                    {errors.name === "Required" ||
                    errors.email === "Required" ||
                    errors.message === "Required"
                      ? "Fill all the fields"
                      : errors.email === "Invalid email"
                      ? "Invalid email address"
                      : sendMessageFailed
                      ? "Something went wrong. Please try again or contact me via any of my social media"
                      : !captchaSuccessful
                      ? "Captcha failed"
                      : ""}
                  </ErrorText>
                </SubmitContainer>
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </Root>
  );
}

export default Section4;
