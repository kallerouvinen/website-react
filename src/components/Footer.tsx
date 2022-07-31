import styled from "styled-components";
import MUIContainer from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { ReactComponent as GitHub } from "assets/icons/github.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "assets/icons/linkedin.svg";

import SocialMediaLink from "./basic/SocialMediaLink";

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
          <Grid
            item
            xs={12}
            md={6}
            // TODO: Styling
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
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
          </Grid>
        </GridContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
