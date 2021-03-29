import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Recaptcha from "react-recaptcha";

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

const RecaptchaContainer = styled.div`
  padding: 8px;
  height: 80px;
`;

const SubmitContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Section4() {
  const [loadingState, setLoadingState] = useState("Ready");
  const [sendMessageFailed, setSendMessageFailed] = useState(false);
  const recaptchaRef = useRef<Recaptcha>(null);

  const handleFormSubmit = (values: any, { resetForm }: any) => {
    setLoadingState("Loading");
    setSendMessageFailed(false);

    emailjs
      .send(
        "service_julervm",
        "template_ta50vl9",
        values,
        "user_NLsJL6dc9TUARPhYsGhR7",
      )
      .then(
        (result) => {
          setLoadingState("Success");
          resetForm();
          setTimeout(() => {
            setLoadingState("Ready");
            recaptchaRef.current?.reset();
          }, 2000);
        },
        (error) => {
          setLoadingState("Error");
          setSendMessageFailed(true);
          setTimeout(() => {
            setLoadingState("Ready");
          }, 2000);
          recaptchaRef.current?.reset();
        },
      );
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
            recaptcha: "",
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
            if (!values.recaptcha) {
              errors.recaptcha = true;
            }

            return errors;
          }}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form
              autoComplete="off"
              className="contact-form"
              onSubmit={handleSubmit}
            >
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
                <RecaptchaContainer>
                  <Recaptcha
                    ref={recaptchaRef}
                    sitekey="6Lc4IpQaAAAAAAe-vaTYTq-t302gUQhAOr-b9FwE"
                    render="explicit"
                    verifyCallback={(response) => {
                      setFieldValue("recaptcha", response);
                    }}
                  />
                </RecaptchaContainer>
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
                      : errors.recaptcha && touched.recaptcha
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
