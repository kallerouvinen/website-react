import React from "react";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

const StyledFooter = styled.footer`
  background-color: #3d28a4;
`;

const Container = styled(MUIContainer)`
  display: flex;
  flex-direction: column;
  padding: 8px 48px;
`;

const GridContainer = styled(Grid)`
  padding: 16px 0;
  text-align: center;
  align-items: center;
`;

const Text = styled.p`
  color: #fff;
`;

const SocialMediaButton = styled(IconButton)`
  > * {
    color: #fff;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="md">
        <GridContainer container spacing={2}>
          <Grid item xs={12} md={6}>
            <Text>© 2021 Kalle Rouvinen. All rights reserved.</Text>
          </Grid>
          <Grid item xs={12} md={6}>
            <a
              aria-label="link-to-instagram"
              href="https://instagram.com/kallerouvinen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialMediaButton aria-label="link-to-instagram">
                <Instagram />
              </SocialMediaButton>
            </a>
            <a
              aria-label="link-to-linkedin"
              href="https://linkedin.com/in/kalle-rouvinen-794b4215b"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialMediaButton aria-label="link-to-linkedin">
                <LinkedIn />
              </SocialMediaButton>
            </a>
            <a
              aria-label="link-to-github"
              href="https://github.com/kallerouvinen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialMediaButton aria-label="link-to-github">
                <GitHub />
              </SocialMediaButton>
            </a>
          </Grid>
        </GridContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
