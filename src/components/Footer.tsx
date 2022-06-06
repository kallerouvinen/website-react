import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { ReactComponent as GitHub } from "assets/icons/github.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "assets/icons/linkedin.svg";

import SocialMediaButton from "./basic/SocialMediaButton";

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

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="md">
        <GridContainer container spacing={2}>
          <Grid item xs={12} md={6}>
            <Text>© 2021 Kalle Rouvinen. All rights reserved.</Text>
          </Grid>
          <Grid item xs={12} md={6}>
            <SocialMediaButton
              ariaLabel="link-to-instagram"
              href="https://instagram.com/kallerouvinen"
              icon={<Instagram />}
            />
            <SocialMediaButton
              ariaLabel="link-to-linkedin"
              href="https://linkedin.com/in/kalle-rouvinen-794b4215b"
              icon={<LinkedIn />}
            />
            <SocialMediaButton
              ariaLabel="link-to-github"
              href="https://github.com/kallerouvinen"
              icon={<GitHub />}
            />
          </Grid>
        </GridContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
