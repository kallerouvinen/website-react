import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Formik, FormikErrors, FormikHelpers } from "formik";
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
  background-color: #6e58d7;
  padding: 96px 0 24px 0;
  @media (min-width: 600px) {
    padding: 96px 0 24px 0;
  }
  @media (min-width: 960px) {
    padding: 120px 0 36px 0;
  }
  @media (min-width: 1280px) {
    padding: 144px 0 48px 0;
  }
  @media (min-width: 1920px) {
    padding: 192px 0 72px 0;
  }

  clip-path: polygon(0 0, 100% 48px, 100% 100%, 0 100%);
  @media (min-width: 600px) {
    clip-path: polygon(0 0, 100% 48px, 100% 100%, 0 100%);
  }
  @media (min-width: 960px) {
    clip-path: polygon(0 0, 100% 60px, 100% 100%, 0 100%);
  }
  @media (min-width: 1280px) {
    clip-path: polygon(0 0, 100% 72px, 100% 100%, 0 100%);
  }
  @media (min-width: 1920px) {
    clip-path: polygon(0 0, 100% 96px, 100% 100%, 0 100%);
  }
`;

const Container = styled(MUIContainer)`
  flex-direction: column;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 44px;
  color: #fff;
  margin: 0;
`;

const Paragraph = styled.p`
  margin-bottom: 32px;
  font-size: 18px;
  color: #fff;
`;

const ReCaptchaText = styled.p`
  font-size: 12px;
  margin: 0px 8px 16px 8px;
  color: #fff;
  > a {
    text-decoration: none;
    color: #bad8f8;
  }
`;

const SubmitContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ErrorText = styled.p`
  color: #fff;
  max-width: 50vw;
`;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

function Section4() {
  const [loadingState, setLoadingState] = useState("Ready");
  const [errorMessage, setErrorMessage] = useState("");
  const [shouldRenderCaptcha, setShouldRenderCaptcha] = useState(false);
  const captchaRef = useRef<any>(null);

  const handleFormSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    try {
      await captchaRef.current?.executeAsync();
      setLoadingState("Loading");
      setErrorMessage("");

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        values,
        process.env.REACT_APP_EMAILJS_USER_ID as string,
      );
      setLoadingState("Success");
      resetForm();
      setTimeout(() => {
        setLoadingState("Ready");
      }, 2000);
    } catch (e) {
      setLoadingState("Error");
      setErrorMessage(
        "Something went wrong. Please try again or contact me via social media",
      );
      setTimeout(() => {
        setLoadingState("Ready");
      }, 2000);
    }
  };

  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const renderCaptcha = () => {
    if (shouldRenderCaptcha) {
      const ReCAPTCHA = require("react-google-recaptcha").default;
      return (
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size="invisible"
        />
      );
    } else {
      return null;
    }
  };

  const loadCaptcha = () => {
    if (!shouldRenderCaptcha) {
      setShouldRenderCaptcha(true);
    }
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
          initialValues={initialValues}
          validateOnBlur={false}
          validateOnChange={false}
          validate={(values) => {
            const errors: FormikErrors<FormValues> = {};

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
                    type="text"
                    autoComplete="off"
                    onFocus={loadCaptcha}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    type="text"
                    autoComplete="off"
                    onFocus={loadCaptcha}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextAreaInput
                    label="Message"
                    name="message"
                    onChange={handleChange}
                    rows={5}
                    value={values.message}
                    onFocus={loadCaptcha}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReCaptchaText>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </ReCaptchaText>
                </Grid>
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
                      : errorMessage}
                  </ErrorText>
                </SubmitContainer>
                {renderCaptcha()}
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </Root>
  );
}

export default Section4;
