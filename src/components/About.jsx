import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CodeIcon from "@mui/icons-material/Code";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FONT = '"Plus Jakarta Sans", sans-serif';

const WHAT_I_DO = [
  "Build modern full-stack web applications with Next.js, React.js, Node.js, and real databases",

  "Focus on clean code, performance, accessibility, SEO, and great user experience across every feature",

  "Integrate RESTful APIs and manage state with Redux Toolkit and TanStack Query",

  "Build responsive, accessible UIs using Material UI, Tailwind CSS, and Bootstrap",

  "Test applications with Playwright and Jest - unit and end-to-end testing",
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 14,
        bgcolor: "transparent",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-8%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(233,30,140,0.07) 0%,transparent 70%)",
        }}
      />

      <Container maxWidth="xl">
      
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 1, md: 10 },
            mb: 8,
          }}
        >
          
          <Box
            sx={{
              order: { xs: 2, md: 1 },
              flex: "0 0 auto",
              width: { xs: "75%", sm: "55%", md: "44%" },
              mx: { xs: "auto", md: 0 },
              filter: "drop-shadow(0 16px 50px rgba(233,30,140,0.20))",
              "&:hover": { transform: "scale(1.03)" },
              transition: "transform 0.3s",
              "& canvas": { mixBlendMode: "screen" },
            }}
          >
            <DotLottieReact
              src="/assets/about.lottie"
              autoplay
              loop
              style={{ width: "100%", height: "auto", minHeight: 200 }}
            />
          </Box>

        
          <Box sx={{ order: { xs: 1, md: 2 }, flex: 1, minWidth: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <SentimentSatisfiedAltIcon
                sx={{ color: "primary.main", fontSize: 22 }}
              />
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontFamily: FONT,
                  fontWeight: 600,
                  letterSpacing: 3,
                }}
              >
                Who Am I
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: "text.primary",
                fontFamily: FONT,
                fontSize: { xs: "2.2rem", md: "3rem" },
              }}
            >
              About{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Me
              </Box>
            </Typography>

            <Paper
              elevation={0}
              sx={{
                bgcolor: "background.paper",
                border: "1px solid rgba(233,30,140,0.20)",
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                boxShadow: "0 8px 40px rgba(233,30,140,0.10)",
                "&:hover": {
                  borderColor: "rgba(233,30,140,0.42)",
                  boxShadow: "0 16px 56px rgba(233,30,140,0.16)",
                },
                transition: "all 0.25s",
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontFamily: FONT,
                  lineHeight: 1.95,
                  fontSize: "1.02rem",
                }}
              >
                Computer Science and AI graduate, top of my class, passionate about Full-Stack Development.
                Skilled in Next.js, React.js, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, Docker, and AWS.
                Interned at SpaceTech as a Software Engineer, contributing to real products in a team environment using GitHub Organizations and Jira.
                Mentee at Deloitte's NextStep Mentorship Program via the Innovation Hub.
                Freelance Frontend Developer delivering responsive, user-focused web solutions.
                Trained at ITI (React.js) and Route Academy (Frontend Diploma).
                Seeking a Full-Stack or Frontend role to build innovative web solutions.
              </Typography>
            </Paper>
          </Box>
        </Box>

       
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 1, md: 8 },
          }}
        >
         
          <Box sx={{ order: { xs: 1, md: 1 }, flex: 1, minWidth: 0 }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "background.paper",
                border: "1px solid rgba(233,30,140,0.25)",
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                boxShadow: "0 4px 24px rgba(233,30,140,0.10)",
                "&:hover": {
                  borderColor: "rgba(233,30,140,0.55)",
                  transform: "translateY(-5px)",
                  boxShadow: "0 14px 40px rgba(233,30,140,0.18)",
                },
                transition: "all 0.25s",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: 2,
                    bgcolor: "rgba(233,30,140,0.12)",
                    border: "1.5px solid rgba(233,30,140,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.main",
                  }}
                >
                  <CodeIcon sx={{ fontSize: 26 }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "text.primary",
                  }}
                >
                  What I Do
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {WHAT_I_DO.map((item, i) => (
                  <Box
                    key={i}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        mt: 0.85,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: FONT,
                        color: "text.secondary",
                        fontSize: "0.9rem",
                        lineHeight: 1.75,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>

          
          <Box
            sx={{
              order: { xs: 2, md: 2 },
              flex: "0 0 auto",
              width: { xs: "75%", sm: "55%", md: "44%" },
              mx: { xs: "auto", md: 0 },
              filter: "drop-shadow(0 16px 50px rgba(233,30,140,0.20))",
              "&:hover": { transform: "scale(1.03)" },
              transition: "transform 0.3s",
              "& canvas": { mixBlendMode: "screen" },
            }}
          >
            <DotLottieReact
              src="/assets/about-5.lottie"
              autoplay
              loop
              style={{ width: "100%", height: "auto", minHeight: 200 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}