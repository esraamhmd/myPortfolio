import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Modal,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FONT = '"Plus Jakarta Sans", sans-serif';
const CDN = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}`;

const COLORS = ["#722F99", "#f72585", "#06d6a0", "#8DB355"];


const ACCESSIBLE = {
  "#722F99": { dark: "#b06fd4", light: "#5a1a80" },
  "#f72585": { dark: "#f96aab", light: "#9c0055" },
  "#06d6a0": { dark: "#06d6a0", light: "#007a5a" },
  "#8DB355": { dark: "#8DB355", light: "#4a6e1a" },
}

const CERTIFICATES = [
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM - via Coursera",
    desc: "An online course authorized by IBM and offered through Coursera. Covers containerization fundamentals using Docker, container orchestration with Kubernetes, and deployment on OpenShift.",
    skills: ['Containerization','Command-Line Interface','Infrastructure Architecture','Docker (Software)','Kubernetes','Istio','DevOps Tools','Cloud Deployment','Cloud-Native Computing','DevOps','IBM Cloud','Application Deployment'],
    img: `${CDN}/image/upload/docker_mvsqpj.jpg`,
  },
  {
    title: "Playwright Power Techniques: Fast and Reliable Web Testing",
    issuer: "Coursera",
    desc: "An online course focused on web test automation using Playwright, covering test script development, regression testing, CI/CD, browser compatibility, scenario testing, and reliable test execution.",
    skills: ['CI/CD','Regression Testing','Test Execution Engine','Test Script Development','Web Development Tools','Test Tools','Continuous Delivery','User Interface (UI)','Test Automation','Browser Compatibility','Scenario Testing','Scalability'],
    img: `${CDN}/image/upload/playwright_udrkkg.jpg`,
  },
  {
    title: "Test-Driven Development for JavaScript: Unit 1",
    issuer: "Pearson - via Coursera",
    desc: "An online course covering Test-Driven Development (TDD) with JavaScript, including Jest, asynchronous testing, TypeScript testing, test coverage, matchers, and test automation.",
    skills: ['Unit Testing','JavaScript','Test Script Development','Jest (JavaScript Testing Framework)','Code Coverage','Software Testing','JavaScript Frameworks','TypeScript','Test Driven Development (TDD)','Test Automation','Test Case'],
    img: `${CDN}/image/upload/jest_rjtjvv.jpg`,
  },
  {
    title: "Advanced React Patterns, Testing, and Next.js",
    issuer: "Packt - via Coursera",
    desc: "An online course covering advanced React patterns, performance optimization, React testing, and Next.js, including custom hooks, render props, higher-order components, memoization, lazy loading, virtualization, routing, navigation, and server-side rendering.",
    skills: ['Server Side','Frontend Integration','Full-Stack Web Development','UI Components','Software Design Patterns','Web Frameworks','React Redux','React.js','Software Testing','JavaScript Frameworks','Data Access','Data Validation'],
    img: `${CDN}/image/upload/advancedreact_rca6od.jpg`,
  },
  {
    title: "Node.js & MongoDB: Developing Back-end Database Applications",
    issuer: "IBM - via Coursera",
    desc: "An online course covering back-end development with Node.js, Express, and MongoDB, including RESTful API development, authentication and authorization, error handling, middleware, NoSQL databases, scalability, and cloud deployment.",
    skills: ['NoSQL','Scalability','MongoDB','Node.js','Application Programming Interface (API)','Back-End Web Development','API Design','Middleware','Database Application','Authentications','Performance Tuning','JavaScript'],
    img: `${CDN}/image/upload/Node.js_MongoDB_o6fgvw.jpg`,
  },
  {
    title: "Learn Next.js",
    issuer: "Scrimba - via Coursera",
    desc: "An online course covering Next.js fundamentals, including building applications with routing, components, links, dynamic pages, and full-stack web development concepts.",
    skills: ['Data Store','Software Development','Database Development','Back-End Web Development','Web Development Tools','Web Applications','Web Development','Query Languages','JavaScript Frameworks','Full-Stack Web Development','UI Components','Scalability'],
    img: `${CDN}/image/upload/next.js_hsbugn.jpg`,
  },
  {
    title: "API Testing a Real Web Application via Postman",
    issuer: "Coursera",
    desc: "An online course covering API testing with Postman, including OAuth 2.0 authentication, secured GET/POST/PUT requests, response validation, security testing, performance testing, and API test scenarios.",
    skills: ['Authentications','OAuth','API Testing','Security Testing','Test Tools','Performance Testing','Software Testing','Postman API Platform','Scenario Testing','Application Programming Interface (API)'],
    img: `${CDN}/image/upload/postman_mxhbcv.jpg`,
  },
  {
    title: "Introduction to Git and GitHub Basics",
    issuer: "Packt - via Coursera",
    desc: "An online course covering Git and GitHub fundamentals, including version control, repository management, Git configuration, command-line usage, branching, cloning, forking, and collaboration with remote repositories.",
    skills: ['GitHub','Unix Shell','Command-Line Interface','Software Configuration Management','Software Versioning','System Configuration','Version Control','Git (Version Control System)','Linux Commands','Software Installation','Configuration Management','File Systems'],
    img: `${CDN}/image/upload/git_yix8zp.jpg`,
  },
  {
    title: "APIs in Node.js: Write a RESTful API Backend Application",
    issuer: "Coursera",
    desc: "An online course covering backend development with Node.js and RESTful APIs, including HTTP methods, API design, server-side development, and building web applications.",
    skills: ["Node.js","RESTful API","API Design","JavaScript","HTTP","Back-End Web Development","Application Programming Interface (API)","Server-Side Development","Web Applications","Application Development"],
    img: `${CDN}/image/upload/APIs_in_Node.js_y0czgb.jpg`,
  },
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic Education",
    desc: "An introductory course covering agent skills, AI agents, reusable capabilities, and agent-based workflows.",
    skills: ["AI Agents","Agent Skills","Artificial Intelligence","Agent-Based Workflows","Prompt Engineering","AI-Assisted Development"],
    img: `${CDN}/image/upload/agent_oq9z1c.jpg`,
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic Education",
    desc: "An introductory course covering Claude Code fundamentals, AI-assisted software development, coding workflows, and effective use of Claude Code for development tasks.",
    skills: ["Claude Code","AI-Assisted Development","AI Coding","Software Development","Developer Tools","Code Generation","AI Agents"],
    img: `${CDN}/image/upload/claude_cybi19.jpg`,
  },
].map((c, i) => ({ ...c, color: COLORS[i % COLORS.length] }));

export default function Certificates() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [modal, setModal] = useState(null);
  const [imgZoom, setImgZoom] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = React.useRef(null);
  const sliderRef = useRef(null);

  const tc = (color) => ACCESSIBLE[color]?.[isDark ? "dark" : "light"] ?? color

  const scroll = (dir) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <Box id="certificates" sx={{ py: 14, bgcolor: "transparent", position: "relative", zIndex: 1, overflow: "hidden" }}>
      <Box sx={{ position: "absolute", top: "10%", right: "-6%", width: 500, height: 500, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(114,47,153,0.10) 0%,transparent 70%)" }} />
      <Box sx={{ position: "absolute", bottom: "10%", left: "-6%", width: 400, height: 400, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(6,214,160,0.08) 0%,transparent 70%)" }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 5 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 1 }}>
            <AutoAwesomeIcon sx={{ color: "primary.main", fontSize: 18 }} />
            <Typography variant="overline" aria-hidden="true" sx={{ color: "primary.main", fontFamily: FONT, fontWeight: 700, letterSpacing: 3 }}>
              My Achievements
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ color: "text.primary", fontFamily: FONT, fontWeight: 800, fontSize: { xs: "2.2rem", md: "3rem" } }}>
            My{" "}
            <Box component="span" sx={{ color: "primary.main" }}>Certificates</Box>
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          <IconButton onClick={() => scroll(-1)} aria-label="Previous certificate"
            sx={{ position: "absolute", left: { xs: -8, md: -20 }, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "background.paper", color: "primary.main", border: "1px solid rgba(233,30,140,0.3)", width: 42, height: 42, "&:hover": { bgcolor: "rgba(233,30,140,0.1)", borderColor: "primary.main" }, transition: "all 0.2s" }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
          </IconButton>

          <Box ref={sliderRef} sx={{ display: "flex", gap: 3, overflowX: "auto", overflowY: "visible", scrollSnapType: "x mandatory", px: 1, py: 2, "&::-webkit-scrollbar": { display: "none" }, msOverflowStyle: "none", scrollbarWidth: "none" }}>
            {CERTIFICATES.map((c, i) => {
              const textColor = tc(c.color)
              return (
                <Box key={i} sx={{ flexShrink: 0, width: { xs: 260, sm: 290, md: 300 }, scrollSnapAlign: "start", bgcolor: "background.paper", border: `1px solid ${c.color}28`, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: `0 4px 24px ${c.color}14`, transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)", "&:hover": { transform: "translateY(-8px)", borderColor: c.color, boxShadow: `0 20px 60px ${c.color}35` } }}>
                  <Box sx={{ height: 170, overflow: "hidden", position: "relative", bgcolor: `${c.color}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box component="img" loading="lazy" src={c.img} alt={c.title}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                      onError={(e) => { e.target.style.display = "none" }}
                    />
                    <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${c.color}30 0%, transparent 60%)`, pointerEvents: "none" }} />
                  </Box>

                  <Box sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ color: textColor, fontFamily: FONT, fontWeight: 700, fontSize: "0.95rem", mb: 0.4, lineHeight: 1.3 }}>
                      {c.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontFamily: FONT, fontSize: "0.78rem", mb: 0.3 }}>
                      {c.issuer}
                    </Typography>
                  </Box>

                  <Box sx={{ px: 2.5, pb: 2, display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={() => setModal(c)} size="small" aria-label={`View details for ${c.title}`}
                      sx={{ color: textColor, border: `1px solid ${c.color}40`, borderRadius: 2, width: 34, height: 34, "&:hover": { bgcolor: `${c.color}18`, borderColor: c.color, transform: "scale(1.15)" }, transition: "all 0.22s" }}>
                      <OpenInFullIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Box>
                </Box>
              )
            })}
          </Box>

          <IconButton onClick={() => scroll(1)} aria-label="Next certificate"
            sx={{ position: "absolute", right: { xs: -8, md: -20 }, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "background.paper", color: "primary.main", border: "1px solid rgba(233,30,140,0.3)", width: 42, height: 42, "&:hover": { bgcolor: "rgba(233,30,140,0.1)", borderColor: "primary.main" }, transition: "all 0.2s" }}>
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Container>

      <Modal open={!!modal} onClose={() => setModal(null)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: { xs: "94vw", sm: "80vw", md: "60vw" }, maxWidth: 700, maxHeight: "92vh", bgcolor: "background.paper", borderRadius: 4, boxShadow: "0 30px 100px rgba(0,0,0,0.6)", border: `1px solid ${modal?.color || "#722F99"}35`, outline: "none", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {modal && (() => {
            const modalTextColor = tc(modal.color)
            return (
              <>
                <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center", p: 1.5, borderBottom: `1px solid ${modal.color}20`, bgcolor: "background.paper", borderRadius: "16px 16px 0 0" }}>
                  <Box sx={{ width: 4, height: 24, bgcolor: modal.color, borderRadius: 2, mr: 1.5 }} />
                  <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: "1rem", color: "text.primary", flex: 1 }}>{modal.title}</Typography>
                  <IconButton onClick={() => setModal(null)} aria-label="Close" sx={{ color: modalTextColor, border: `1px solid ${modal.color}30`, borderRadius: 2 }}><CloseIcon /></IconButton>
                </Box>

                <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto", overflowX: "hidden", "&::-webkit-scrollbar": { width: 5 }, "&::-webkit-scrollbar-track": { background: "transparent" }, "&::-webkit-scrollbar-thumb": { background: modal.color, borderRadius: 3 } }}>
                  <Box sx={{ px: 3, pt: 3, mb: 2 }}>
                    <Box component="img" loading="lazy" src={modal.img} alt={modal.title} onClick={() => setImgZoom(true)}
                      sx={{ width: "100%", borderRadius: 3, display: "block", maxHeight: 320, objectFit: "contain", bgcolor: `${modal.color}08`, cursor: "zoom-in", "&:hover": { opacity: 0.9 } }}
                      onError={(e) => { e.target.style.display = "none" }}
                    />
                  </Box>

                  {imgZoom && (
                    <Box onMouseMove={(e) => { if (!dragging || !dragStart.current) return; setPos({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y }) }}
                      onMouseUp={() => setDragging(false)} onMouseLeave={() => setDragging(false)}
                      onTouchMove={(e) => { if (!dragStart.current) return; const t = e.touches[0]; setPos({ x: t.clientX - dragStart.current.x, y: t.clientY - dragStart.current.y }) }}
                      onTouchEnd={() => setDragging(false)}
                      sx={{ position: "fixed", inset: 0, zIndex: 9999, bgcolor: "rgba(0,0,0,0.93)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", userSelect: "none" }}>
                      <IconButton onClick={() => { setImgZoom(false); setScale(1); setPos({ x: 0, y: 0 }) }}
                        sx={{ position: "absolute", top: 16, right: 16, zIndex: 2, color: "#fff", bgcolor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", "&:hover": { bgcolor: "rgba(233,30,140,0.4)" } }}>
                        <CloseIcon />
                      </IconButton>
                      <Box sx={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", gap: 1, alignItems: "center", bgcolor: "rgba(0,0,0,0.5)", borderRadius: 10, px: 2, py: 0.8, border: "1px solid rgba(233,30,140,0.3)" }}>
                        <IconButton onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))} size="small" sx={{ color: "#e91e8c", width: 34, height: 34, fontSize: 20, fontWeight: 700, "&:hover": { bgcolor: "rgba(233,30,140,0.15)" } }}>−</IconButton>
                        <Box onClick={() => { setScale(1); setPos({ x: 0, y: 0 }) }} sx={{ color: "#fff", fontFamily: FONT, fontSize: "0.82rem", fontWeight: 600, px: 1.5, cursor: "pointer", minWidth: 44, textAlign: "center", "&:hover": { color: "#e91e8c" } }}>{Math.round(scale * 100)}%</Box>
                        <IconButton onClick={() => setScale((s) => Math.min(s + 0.25, 4))} size="small" sx={{ color: "#e91e8c", width: 34, height: 34, fontSize: 20, fontWeight: 700, "&:hover": { bgcolor: "rgba(233,30,140,0.15)" } }}>+</IconButton>
                      </Box>
                      <Box component="img" src={modal.img} alt={modal.title}
                        onMouseDown={(e) => { setDragging(true); dragStart.current = { x: e.clientX - pos.x, y: e.clientY - pos.y } }}
                        onTouchStart={(e) => { const t = e.touches[0]; dragStart.current = { x: t.clientX - pos.x, y: t.clientY - pos.y } }}
                        sx={{ maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain", borderRadius: 2, transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`, transformOrigin: "center", transition: dragging ? "none" : "transform 0.2s", cursor: dragging ? "grabbing" : "grab", touchAction: "none" }}
                      />
                    </Box>
                  )}

                  <Box sx={{ px: 3, pb: 4 }}>
                    <Typography sx={{ fontFamily: FONT, fontWeight: 700, color: modalTextColor, fontSize: "1.1rem", mb: 0.5 }}>{modal.title}</Typography>
                    <Typography sx={{ fontFamily: FONT, color: "text.secondary", fontSize: "0.88rem", mb: 0.3 }}>{modal.issuer}</Typography>
                    <Typography sx={{ fontFamily: FONT, color: "text.secondary", fontSize: "0.82rem", mb: 2.5, opacity: 0.7 }}>{modal.date}</Typography>
                    <Typography sx={{ fontFamily: FONT, color: "text.secondary", lineHeight: 1.85, fontSize: "0.92rem", mb: 2 }}>{modal.desc}</Typography>
                    {modal.skills && modal.skills.length > 0 && (
                      <Box sx={{ mb: 3 }}>
                        <Typography sx={{ fontFamily: FONT, fontWeight: 700, color: "text.primary", fontSize: "0.92rem", mb: 1 }}>Skills</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                          {modal.skills.map((s) => (
                            <Chip key={s} label={s} size="small" sx={{ fontFamily: FONT, bgcolor: `${modal.color}14`, color: modalTextColor, border: `1px solid ${modal.color}35`, fontSize: "0.72rem", fontWeight: 700, height: 24 }} />
                          ))}
                        </Box>
                      </Box>
                    )}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}></Box>
                  </Box>
                </Box>
              </>
            )
          })()}
        </Box>
      </Modal>
    </Box>
  );
}