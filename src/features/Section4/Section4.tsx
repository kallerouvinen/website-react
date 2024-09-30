import { Formik, FormikErrors, FormikHelpers } from "formik";
import { useState } from "react";
import styled from "styled-components";
import useWeb3Forms from "@web3forms/react";

import Container from "@/components/Container";
import GridItem from "@/components/GridItem";
import SubmitButton from "@/features/Section4/SubmitButton";
import TextAreaInput from "@/features/Section4/TextAreaInput";
import TextInput from "@/features/Section4/TextInput";

function validateEmail(email: string) {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regEx.test(email);
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg.section4};
  padding: 24px 0;
  @media (min-width: 600px) {
    padding: 24px 0;
  }
  @media (min-width: 960px) {
    padding: 36px 0;
  }
  @media (min-width: 1280px) {
    padding: 48px 0;
  }
  @media (min-width: 1920px) {
    padding: 72px 0;
  }
`;

const Honeypot = styled.input`
  position: absolute;
  left: -9999px;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "name name"
    "email email"
    "message message"
    "submit submit";
  @media (min-width: 900px) {
    grid-template-areas:
      "name email"
      "message message"
      "submit submit";
  }
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

const GridItemSubmit = styled(GridItem)`
  align-items: center;
  justify-content: space-between;
`;

const ErrorText = styled.p`
  max-width: 50vw;
  margin: 0;
  color: #fff;
`;

type FormValues = {
  name: string;
  email: string;
  message: string;
};

function Section4() {
  const [loadingState, setLoadingState] = useState("Ready");
  const [errorMessage, setErrorMessage] = useState("");

  const { submit } = useWeb3Forms({
    access_key: import.meta.env.VITE_WEB3FORMS_PUBLIC_KEY,
    settings: {
      from_name: "kallerouvinen.com",
      subject: "New Contact Message from your Website",
    },
    onSuccess: () => {},
    onError: () => {},
  });

  const handleFormSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    try {
      setLoadingState("Loading");
      setErrorMessage("");

      await submit(values);

      setLoadingState("Success");
      resetForm();
    } catch (e) {
      setLoadingState("Error");
      setErrorMessage(
        "Something went wrong. Please try again or contact me via social media",
      );
    } finally {
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

  return (
    <Root>
      <Container id="section4" maxWidth={900} padding="16px">
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
          {({ values, errors, handleChange, handleSubmit }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Honeypot
                autoComplete="off"
                name="botcheck"
                tabIndex={-1}
                type="checkbox"
              />
              <GridContainer>
                <GridItem name="name">
                  <TextInput
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    type="text"
                    autoComplete="off"
                  />
                </GridItem>
                <GridItem name="email">
                  <TextInput
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    type="text"
                    autoComplete="off"
                  />
                </GridItem>
                <GridItem name="message">
                  <TextAreaInput
                    label="Message"
                    name="message"
                    onChange={handleChange}
                    rows={5}
                    value={values.message}
                  />
                </GridItem>
                <GridItemSubmit name="submit">
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
                </GridItemSubmit>
              </GridContainer>
            </form>
          )}
        </Formik>
      </Container>
    </Root>
  );
}

export default Section4;
