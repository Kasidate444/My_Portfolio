import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaReact,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiTailwindcss,
  SiClaude,
  SiGit,
} from "react-icons/si";
import { LuRefreshCw } from "react-icons/lu";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = [
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "Express.js", icon: <SiExpress />, color: "#8B8B8B" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "HTML/CSS", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "SCRUM/Agile", icon: <LuRefreshCw />, color: "#A78BFA" },
  // { name: "SCRUM/Agile", icon: "🔄", color: "#A78BFA" },
  { name: "AI Prompting", icon: <SiClaude />, color: "#F59E0B" },
];

const PROJECTS = [
  {
    title: "Kamui Jenkins Group",
    subtitle: "E-commerce & Music Marketplace",
    desc: "Full-stack MERN e-commerce platform built as a team final project during JSD12 bootcamp. Features product listings, cart, and checkout flow.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    type: "Final Project",
    accent: "#7C3AED",
    link: "#",
  },
  // {
  //   title: "React Assessment",
  //   subtitle: "Frontend Project",
  //   desc: "A dynamic React application demonstrating component architecture, state management, and responsive UI design.",
  //   tags: ["React", "JavaScript", "CSS"],
  //   type: "Frontend",
  //   accent: "#0EA5E9",
  //   link: "#",
  // },
  // {
  //   title: "Task Management App",
  //   subtitle: "Personal Project",
  //   desc: "A productivity tool built to manage daily tasks with CRUD operations, priority flags, and clean UI.",
  //   tags: ["JavaScript", "Node.js", "MongoDB"],
  //   type: "Personal",
  //   accent: "#10B981",
  //   link: "#",
  // },
  // {
  //   title: "Calculator",
  //   subtitle: "Personal Project",
  //   desc: "A clean, functional calculator application with keyboard support and operation history.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   type: "Personal",
  //   accent: "#F59E0B",
  //   link: "#",
  // },
  // {
  //   title: "Castle Project",
  //   subtitle: "Frontend Project",
  //   desc: "A visually rich frontend layout project showcasing advanced CSS and responsive design techniques.",
  //   tags: ["HTML", "CSS", "Tailwind"],
  //   type: "Frontend",
  //   accent: "#EC4899",
  //   link: "#",
  // },
  // {
  //   title: "Colmar",
  //   subtitle: "Frontend Project",
  //   desc: "A responsive webpage layout built to match a design specification, demonstrating pixel-perfect HTML/CSS skills.",
  //   tags: ["HTML", "CSS"],
  //   type: "Frontend",
  //   accent: "#F97316",
  //   link: "#",
  // },
];

const EXPERIENCE = [
  {
    role: "Junior Software Developer",
    company: "Generation Thailand",
    period: "Mar 2026 – Jun 2026",
    desc: "Completed JSD12 bootcamp program — full-stack web development with MERN stack, agile workflow, and real team projects.",
    current: true,
  },
  {
    role: "Plant Engineer",
    company: "Sumitomo Electric Wintec (Thailand) Co., Ltd.",
    period: "Nov 2018 – Dec 2025",
    desc: "7 years managing plant operations, cross-department coordination, and critical decision-making in manufacturing environments.",
    current: false,
  },
  {
    role: "Internship Engineer",
    company: "Femtobit Co., Ltd.",
    period: "2017",
    desc: "Engineering internship gaining hands-on industrial experience.",
    current: false,
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#0A0A0F",
        color: "#E8E6F0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Space+Grotesk:wght@700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #7C3AED40; }
        .nav-link { cursor: pointer; color: #9D9AB0; font-size: 14px; letter-spacing: 0.05em; transition: color 0.2s; text-transform: uppercase; }
        .nav-link:hover { color: #E8E6F0; }
        .skill-pill { transition: transform 0.2s, box-shadow 0.2s; }
        .skill-pill:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(124,58,237,0.25); }
        .proj-card { transition: transform 0.25s, border-color 0.25s; cursor: pointer; }
        .proj-card:hover { transform: translateY(-4px); }
        .fade-in { opacity: 0; transform: translateY(20px); animation: fadeUp 0.7s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .tag { font-size: 11px; background: rgba(124,58,237,0.15); color: #A78BFA; border: 1px solid rgba(124,58,237,0.3); border-radius: 4px; padding: 2px 8px; }
        .type-badge { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; }
        .hero-glow { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%); top: -100px; left: 50%; transform: translateX(-50%); pointer-events: none; }
        .grid-dot { background-image: radial-gradient(rgba(124,58,237,0.15) 1px, transparent 1px); background-size: 32px 32px; }
        a { color: inherit; text-decoration: none; }
        .contact-link { display: flex; align-items: center; gap: 10px; padding: 16px 20px; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; background: rgba(255,255,255,0.03); transition: border-color 0.2s, background 0.2s; }
        .contact-link:hover { border-color: rgba(124,58,237,0.5); background: rgba(124,58,237,0.08); }
        @media (max-width: 640px) { .hero-name { font-size: 48px !important; } .projects-grid { grid-template-columns: 1fr !important; } .skills-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>

      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(10,10,15,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 18,
            color: "#A78BFA",
            letterSpacing: "0.02em",
          }}
        >
          PORTFOLIO
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {NAV_LINKS.map((l) => (
            <span key={l} className="nav-link" onClick={() => scrollTo(l)}>
              {l}
            </span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section
        id="About"
        className="grid-dot"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="hero-glow" />
        <div
          className="fade-in"
          style={{ animationDelay: "0.1s", position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.35)",
              borderRadius: 100,
              padding: "6px 18px",
              fontSize: 12,
              color: "#A78BFA",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            ✦ JSD12 Graduate · MERN Stack Developer
          </div>
          <h1
            className="hero-name"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 80,
              lineHeight: 1,
              color: "#F0EEF8",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Kasidate
            <br />
            <span style={{ color: "#7C3AED" }}>Sae-eaw</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#9D9AB0",
              maxWidth: 520,
              margin: "0 auto 40px",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Full-stack developer transitioning from 7 years of mechanical
            engineering. I build things for the web — clean, functional, and
            scalable.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => scrollTo("Projects")}
              style={{
                background: "#7C3AED",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "0.01em",
              }}
            >
              View my work →
            </button>
            <a
              href="mailto:kasidatesaeeaw@gmail.com"
              style={{
                background: "transparent",
                color: "#E8E6F0",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 400,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
        {/* scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "#4A4860",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <div
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, #7C3AED, transparent)",
            }}
          />
        </div>
      </section>

      {/* Skills */}
      <section
        id="Skills"
        style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}
      >
        <div className="fade-in" style={{ animationDelay: "0.15s" }}>
          <p
            style={{
              color: "#7C3AED",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 12,
            }}
          >
            What I work with
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 42,
              marginBottom: 48,
              color: "#F0EEF8",
            }}
          >
            My Skills
          </h2>
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginBottom: 60,
            }}
          >
            {SKILLS.map((s, i) => (
              <div
                key={s.name}
                className="skill-pill"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                  animationDelay: `${0.05 * i}s`,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#C4C1D8" }}>
                  {s.name}
                </p>
              </div>
            ))}
          </div>
          {/* Other skills */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                label: "Stack",
                value: "MERN (MongoDB · Express · React · Node)",
              },
              { label: "Methodologies", value: "SCRUM / AGILE · BSM" },
              { label: "AI Tools", value: "ChatGPT · Gemini · Claude" },
              {
                label: "Background",
                value: "Mechanical Engineering · 7 Years Industry",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{ borderLeft: "2px solid #7C3AED", paddingLeft: 16 }}
              >
                <p
                  style={{
                    fontSize: 11,
                    color: "#6B6880",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: 14, color: "#C4C1D8", lineHeight: 1.5 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="Projects"
        style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}
      >
        <p
          style={{
            color: "#7C3AED",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 12,
          }}
        >
          What I've built
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            marginBottom: 48,
            color: "#F0EEF8",
          }}
        >
          Projects
        </h2>
        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="proj-card fade-in"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid rgba(255,255,255,0.07)`,
                borderRadius: 16,
                padding: 28,
                animationDelay: `${0.08 * i}s`,
                borderTop: `2px solid ${p.accent}40`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <span
                  className="type-badge"
                  style={{
                    color: p.accent,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                  }}
                >
                  {p.type}
                </span>
                <span style={{ fontSize: 18, opacity: 0.4 }}>↗</span>
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#F0EEF8",
                  marginBottom: 4,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: "#6B6880", marginBottom: 12 }}>
                {p.subtitle}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#9D9AB0",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="Experience"
        style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}
      >
        <p
          style={{
            color: "#7C3AED",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 12,
          }}
        >
          Where I've been
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            marginBottom: 12,
            color: "#F0EEF8",
          }}
        >
          Experience
        </h2>
        <p
          style={{
            color: "#6B6880",
            fontSize: 15,
            marginBottom: 56,
            maxWidth: 500,
          }}
        >
          BS in Mechanical Engineering — King Mongkut's University of Technology
          Thonburi (KMUTT), 2014–2018
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.company}
              style={{
                display: "flex",
                gap: 28,
                paddingBottom: i < EXPERIENCE.length - 1 ? 40 : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: e.current ? "#7C3AED" : "#2A2838",
                    border: e.current
                      ? "2px solid #A78BFA"
                      : "2px solid #3A3650",
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                />
                {i < EXPERIENCE.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      flex: 1,
                      background: "rgba(255,255,255,0.06)",
                      marginTop: 8,
                    }}
                  />
                )}
              </div>
              <div style={{ paddingBottom: 8 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{ fontWeight: 600, fontSize: 18, color: "#F0EEF8" }}
                  >
                    {e.role}
                  </h3>
                  {e.current && (
                    <span
                      style={{
                        background: "rgba(124,58,237,0.2)",
                        color: "#A78BFA",
                        border: "1px solid rgba(124,58,237,0.4)",
                        borderRadius: 4,
                        padding: "2px 8px",
                        fontSize: 11,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
                <p
                  style={{
                    color: "#7C3AED",
                    fontSize: 14,
                    marginBottom: 4,
                    fontWeight: 500,
                  }}
                >
                  {e.company}
                </p>
                <p
                  style={{
                    color: "#4A4860",
                    fontSize: 12,
                    letterSpacing: "0.05em",
                    marginBottom: 12,
                    textTransform: "uppercase",
                  }}
                >
                  {e.period}
                </p>
                <p
                  style={{
                    color: "#9D9AB0",
                    fontSize: 14,
                    lineHeight: 1.65,
                    maxWidth: 540,
                  }}
                >
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="Contact"
        style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}
      >
        <p
          style={{
            color: "#7C3AED",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 12,
          }}
        >
          Let's connect
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 42,
            marginBottom: 16,
            color: "#F0EEF8",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            color: "#9D9AB0",
            fontSize: 16,
            maxWidth: 440,
            marginBottom: 48,
            lineHeight: 1.7,
          }}
        >
          I'm actively looking for junior developer roles. Whether you have a
          project or just want to say hi — my inbox is open.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              icon: <FaEnvelope />,
              label: "Email",
              value: "kasidatesaeeaw@gmail.com",
              href: "mailto:kasidatesaeeaw@gmail.com",
            },
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              value: "kasidate-johnny",
              href: "https://www.linkedin.com/in/kasidate-johnny",
            },
            {
              icon: <FaGithub />,
              label: "GitHub",
              value: "Kasidate444",
              href: "https://github.com/Kasidate444",
            },
            {
              icon: <FaMapMarkerAlt />,
              label: "Location",
              value: "Samut Prakan, Thailand",
              href: null,
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href || "#"}
              className="contact-link"
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "18px 20px",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                background: "rgba(255,255,255,0.025)",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "rgba(124,58,237,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  color: "#A78BFA",
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: 11,
                    color: "#6B6880",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 2,
                  }}
                >
                  {c.label}
                </p>
                <p style={{ fontSize: 14, color: "#C4C1D8", fontWeight: 500 }}>
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, color: "#4A4860" }}>
          © 2026 Kasidate Sae-eaw · Built with React · JSD12 Graduate
        </p>
      </footer>
    </div>
  );
}
