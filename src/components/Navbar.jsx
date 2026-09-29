import React, { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { ColorModeContext } from "../App";

const NAV_DESKTOP = [
  "Home",
  "Experience",
  "Training",
  "Skills",
  "Projects",
  "Contact",
];
const NAV_ALL = [
  "Home",
  "About",
  "Experience",
  "Training",
  ,
  "Education",
  "Skills",
  "Projects",
  "Certificates",
  "Contact",
];
const FONT = '"Plus Jakarta Sans", sans-serif';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const dark = mode === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const appbarBg = scrolled
    ? dark
      ? "rgba(10,10,20,0.93)"
      : "rgba(253,240,247,0.95)"
    : dark
      ? "transparent"
      : "rgba(253,240,247,0.85)";

  return (
    <>
      <style>{`
        @keyframes faceCircle { from{stroke-dashoffset:82;opacity:0} to{stroke-dashoffset:0;opacity:1} }
        @keyframes eyeLeft    { from{opacity:0;transform:translateX(-4px)} to{opacity:1;transform:translateX(0)} }
        @keyframes eyeRight   { from{opacity:0;transform:translateX(4px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes smileArc   { from{stroke-dashoffset:20;opacity:0} to{stroke-dashoffset:0;opacity:1} }
        @keyframes emFade     { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        .afc { fill:none; stroke:#e91e8c; stroke-width:2; stroke-linecap:round;
          stroke-dasharray:82; stroke-dashoffset:82;
          animation: faceCircle 0.6s cubic-bezier(0.4,0,0.2,1) 0s forwards; }
        .ael { fill:#e91e8c; opacity:0;
          animation: eyeLeft 0.25s ease 0.65s forwards; }
        .aer { fill:#e91e8c; opacity:0;
          animation: eyeRight 0.25s ease 0.85s forwards; }
        .asm { fill:none; stroke:#e91e8c; stroke-width:2; stroke-linecap:round;
          stroke-dasharray:20; stroke-dashoffset:20;
          animation: smileArc 0.35s ease 1.05s forwards; }
        .em-anim {
          font-family:'Pinyon Script',cursive;
          font-weight:400;
          font-size:52px;
          fill:#e91e8c;
          opacity:0;
          animation: emFade 0.5s ease 0s forwards;
          filter: drop-shadow(0 0 6px rgba(233,30,140,0.45));
        }
      `}</style>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: appbarBg,
          backdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1px solid rgba(233,30,140,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(233,30,140,0.08)" : "none",
          transition: "all 0.3s",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: { xs: 2.5, sm: 4, md: 6 },
            minHeight: { xs: 60, md: 64 },
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => go("Home")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              cursor: "pointer",
              flexShrink: 0,
              "&:hover .li": { color: "primary.light" },
              transition: "all 0.2s",
            }}
          >
            {!animate ? (
              <SentimentSatisfiedAltIcon
                className="li"
                sx={{ color: "primary.main", fontSize: 24, transition: "color 0.2s", opacity: 0 }}
              />
            ) : (
              <Box sx={{ width: 26, height: 26, flexShrink: 0 }}>
                <svg viewBox="0 0 26 26" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                  <circle className="afc" cx="13" cy="13" r="11" />
                  <circle className="ael" cx="9"  cy="10" r="1.6" />
                  <circle className="aer" cx="17" cy="10" r="1.6" />
                  <path   className="asm" d="M8.5 15.5 Q13 20 17.5 15.5" />
                </svg>
              </Box>
            )}

            <svg
              viewBox="0 0 110 48"
              width="90"
              height="38"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: "visible" }}
            >
              <text
                x="4" y="44"
                className={animate ? "em-anim" : undefined}
                style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontWeight: 400,
                  fontSize: 52,
                  fill: "#e91e8c",
                  opacity: animate ? undefined : 0,
                }}
              >
                EM
              </text>
            </svg>
          </Box>

          <Box sx={{ flex: 1 }} />

          {!mobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
              {NAV_DESKTOP.map((link) => (
                <Button
                  key={link}
                  onClick={() => go(link)}
                  sx={{
                    fontFamily: FONT,
                    fontWeight: 500,
                    color: "text.primary",
                    opacity: 0.75,
                    textTransform: "none",
                    borderRadius: 2,
                    px: 1.6,
                    py: 0.7,
                    fontSize: "0.88rem",
                    minWidth: "auto",
                    "&:hover": {
                      color: dark ? "primary.main" : "#a8005e",
                      bgcolor: "rgba(233,30,140,0.07)",
                      opacity: 1,
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {link}
                </Button>
              ))}

              <Tooltip title={dark ? "Light mode" : "Dark mode"}>
                <IconButton
                  onClick={toggleColorMode}
                  aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                  sx={{
                    ml: 1,
                    color: dark ? "primary.main" : "#1a0a2e",
                    border: "1px solid rgba(233,30,140,0.28)",
                    borderRadius: 2,
                    width: 36,
                    height: 36,
                    bgcolor: dark ? "transparent" : "rgba(233,30,140,0.06)",
                    "&:hover": {
                      bgcolor: "rgba(233,30,140,0.12)",
                      borderColor: "primary.main",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  {dark ? (
                    <LightModeIcon sx={{ fontSize: 16 }} />
                  ) : (
                    <DarkModeIcon sx={{ fontSize: 16 }} />
                  )}
                </IconButton>
              </Tooltip>

              <IconButton
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                sx={{
                  ml: 0.5,
                  color: "primary.main",
                  border: "1px solid rgba(233,30,140,0.28)",
                  borderRadius: 2,
                  width: 36,
                  height: 36,
                  "&:hover": { bgcolor: "rgba(233,30,140,0.1)" },
                  transition: "all 0.2s",
                }}
              >
                <MenuIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          )}

          {/* Mobile */}
          {mobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                onClick={toggleColorMode}
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                sx={{
                  color: dark ? "primary.main" : "#1a0a2e",
                  border: "1px solid rgba(233,30,140,0.28)",
                  borderRadius: 2,
                  width: 34,
                  height: 34,
                  bgcolor: dark ? "transparent" : "rgba(233,30,140,0.06)",
                }}
              >
                {dark ? (
                  <LightModeIcon sx={{ fontSize: 15 }} />
                ) : (
                  <DarkModeIcon sx={{ fontSize: 15 }} />
                )}
              </IconButton>
              <IconButton
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                sx={{ color: "primary.main" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: dark ? "background.default" : "#fdf0f7",
            width: 240,
            borderLeft: "1px solid rgba(233,30,140,0.14)",
            boxShadow: "-6px 0 28px rgba(233,30,140,0.10)",
          },
        }}
      >
        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2.5 }}>
            <IconButton
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              sx={{ color: "primary.main" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {NAV_ALL.map((link) => (
              <ListItem
                button
                key={link}
                onClick={() => go(link)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  "&:hover": { bgcolor: "rgba(233,30,140,0.07)" },
                  transition: "all 0.2s",
                }}
              >
                <ListItemText
                  primary={link}
                  primaryTypographyProps={{
                    fontFamily: FONT,
                    fontWeight: 600,
                    color: "text.primary",
                    fontSize: "0.95rem",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}