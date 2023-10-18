import { forwardRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

const BrandingText = styled.p`
  font-size: 12px;
  margin: 0px 8px 16px 8px;
  color: #fff;
  > a {
    text-decoration: none;
    color: #bad8f8;
  }
`;

const GlobalStyle = createGlobalStyle`
  .grecaptcha-badge {
    visibility: hidden;
  }
`;

interface ReCaptchaProps {
  shouldRender: boolean;
}

const ReCaptcha = forwardRef(({ shouldRender }: ReCaptchaProps, ref) => {
  const ReCAPTCHA = shouldRender && require("react-google-recaptcha").default;

  return (
    <>
      <BrandingText>
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
      </BrandingText>
      {shouldRender && (
        <>
          <GlobalStyle />
          <ReCAPTCHA
            ref={ref}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            size="invisible"
          />
        </>
      )}
    </>
  );
});

export default ReCaptcha;
