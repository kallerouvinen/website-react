import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#3d28a4",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "8px 48px",
  },
  gridContainer: {
    padding: "16px 0",
    textAlign: "center",
    alignItems: "center",
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  text: {
    // TODO: Darken
    color: "#fff",
  },
  icon: {
    // TODO: Darken
    color: "#fff",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container} maxWidth="md">
        <Grid container className={classes.gridContainer} spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.text}>
              © 2020 Kalle Rouvinen. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* TODO: Links */}
            <IconButton>
              <Instagram className={classes.icon} />
            </IconButton>
            <IconButton>
              <LinkedIn className={classes.icon} />
            </IconButton>
            <a
              href="https://github.com/kallerouvinen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconButton>
                <GitHub className={classes.icon} />
              </IconButton>
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
