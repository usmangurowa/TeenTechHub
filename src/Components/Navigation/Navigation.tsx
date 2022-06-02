import * as React from "react";
import type { NextComponentType } from "next";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumbs from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import Link from "../Link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import colors from "../Theming/Colors";
import ScrollToElement from "../ScrollToElement";

const socials = [
  {
    label: "Facebook",
    icon: <FacebookIcon />,
    link: "https://facebook.com/buildbrothers",
  },
  {
    label: "Twitter",
    icon: <TwitterIcon />,
    link: "https://twitter.com/TeenTech_Hub",
  },
  {
    label: "Instagram",
    icon: <InstagramIcon />,
    link: " https://www.instagram.com/teentechhub/",
  },
];

const links = [
  { label: "Home", link: "#" },
  { label: "About", link: "#about" },
  { label: "Program Training and Resources", link: "#program" },
  { label: "News", link: "#" },
  { label: "Contact", link: "#" },
  { label: "Support", link: "#" },
];

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bread: {
    flexGrow: 0.5,
    justifyContent: "space-around",
    display: {
      xs: "none",
      md: "flex",
    },
  },
  appBar: {
    backgroundColor: colors.primary,
    boxShadow: 0,
    borderBottom: "1px solid",
    borderColor: "divider",
  },
};

const Navigation: NextComponentType = () => {
  const trigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window : undefined,
  });
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar sx={styles.appBar}>
          <Toolbar>
            <Container sx={styles.toolbar}>
              <Link href="/">
                <Box
                  component="img"
                  src={"/images/logo.png"}
                  sx={{ height: "30px" }}
                />
              </Link>

              <Breadcrumbs sx={styles.bread}>
                {links.map((link) => {
                  return (
                    <Button
                      key={link.label}
                      onClick={() => ScrollToElement(link.link)}
                    >
                      <Typography variant="subtitle2">{link.label}</Typography>
                    </Button>
                  );
                })}
              </Breadcrumbs>

              <Box>
                {socials.map((social) => {
                  return (
                    <Link href={social.link} key={social.label}>
                      <IconButton color="primary">{social.icon}</IconButton>
                    </Link>
                  );
                })}
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
};

export default Navigation;
