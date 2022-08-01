import styled from "styled-components";

import { ReactComponent as GitHub } from "@/assets/icons/github.svg";
import { ReactComponent as Instagram } from "@/assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "@/assets/icons/linkedin.svg";
import Container from "@/components/Container";
import GridItem from "@/components/GridItem";
import SocialMediaLink from "@/components/SocialMediaLink";

const StyledFooter = styled.footer`
  background-color: #3d28a4;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "copyright copyright"
    "links links";
  @media (min-width: 600px) {
    grid-template-areas: "copyright links";
  }
`;

const Copyright = styled(GridItem)`
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

const Links = styled(GridItem)`
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`;

const Text = styled.p`
  color: #fff;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth={900} padding="8px 48px">
        <GridContainer>
          <Copyright name="copyright">
            <Text>© 2022 Kalle Rouvinen. All rights reserved.</Text>
          </Copyright>
          <Links name="links">
            <SocialMediaLink
              aria-label="link-to-instagram"
              href="https://instagram.com/kallerouvinen"
              icon={<Instagram />}
            />
            <SocialMediaLink
              aria-label="link-to-linkedin"
              href="https://linkedin.com/in/kalle-rouvinen-794b4215b"
              icon={<LinkedIn />}
            />
            <SocialMediaLink
              aria-label="link-to-github"
              href="https://github.com/kallerouvinen"
              icon={<GitHub />}
            />
          </Links>
        </GridContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
