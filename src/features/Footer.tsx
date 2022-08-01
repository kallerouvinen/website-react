import MUIContainer from "@mui/material/Container";
import styled from "styled-components";

import { ReactComponent as GitHub } from "@/assets/icons/github.svg";
import { ReactComponent as Instagram } from "@/assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "@/assets/icons/linkedin.svg";
import GridItem from "@/components/GridItem";
import SocialMediaLink from "@/components/SocialMediaLink";

const StyledFooter = styled.footer`
  background-color: #3d28a4;
`;

const Container = styled(MUIContainer)`
  display: flex;
  flex-direction: column;
  padding: 8px 48px;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "copyright links";
`;

const Text = styled.p`
  color: #fff;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="md">
        <GridContainer>
          <GridItem name="copyright">
            <Text>© 2021 Kalle Rouvinen. All rights reserved.</Text>
          </GridItem>
          <GridItem
            name="links"
            direction="row"
            justify="center"
            align="center"
          >
            <SocialMediaLink
              ariaLabel="link-to-instagram"
              href="https://instagram.com/kallerouvinen"
              icon={<Instagram />}
            />
            <SocialMediaLink
              ariaLabel="link-to-linkedin"
              href="https://linkedin.com/in/kalle-rouvinen-794b4215b"
              icon={<LinkedIn />}
            />
            <SocialMediaLink
              ariaLabel="link-to-github"
              href="https://github.com/kallerouvinen"
              icon={<GitHub />}
            />
          </GridItem>
        </GridContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
