import { useState, useEffect } from "react";
import { getRole } from "../utils/getRole";

const LINES = {
  default: [
    { delay: 0, text: "$ whoami", type: "cmd" },
    {
      delay: 400,
      text: "→ backend developer & software engineer",
      type: "out",
    },
    { delay: 900, text: "$ cat skills.txt", type: "cmd" },
    {
      delay: 1300,
      text: "→ node.js · nestjs · mongodb · react · typescript",
      type: "out",
    },
    { delay: 1900, text: "$ systemctl status portfolio", type: "cmd" },
    {
      delay: 2300,
      text: "● portfolio.service — Active (running)",
      type: "success",
    },
  ],
  devops: [
    { delay: 0, text: "$ whoami", type: "cmd" },
    {
      delay: 400,
      text: "→ devops engineer & cloud infrastructure specialist",
      type: "out",
    },
    { delay: 900, text: "$ cat stack.txt", type: "cmd" },
    {
      delay: 1300,
      text: "→ docker · kubernetes · terraform · aws · ci/cd",
      type: "out",
    },
    { delay: 1900, text: "$ systemctl status infrastructure", type: "cmd" },
    {
      delay: 2300,
      text: "● infrastructure.service — Active (running)",
      type: "success",
    },
  ],
  dev: [
    { delay: 0, text: "$ whoami", type: "cmd" },
    {
      delay: 400,
      text: "→ fullstack developer & backend engineer",
      type: "out",
    },
    { delay: 900, text: "$ cat stack.txt", type: "cmd" },
    {
      delay: 1300,
      text: "→ node.js · nestjs · react · mongodb · typescript",
      type: "out",
    },
    { delay: 1900, text: "$ systemctl status portfolio", type: "cmd" },
    {
      delay: 2300,
      text: "● portfolio.service — Active (running)",
      type: "success",
    },
  ],
};

const CONTENT = {
  default: {
    title: "Building scalable",
    accent: "backend systems.",
    sub: "Accomplished backend developer specializing in Node.js, NestJS, and RESTful API development. Focused on building efficient, scalable server-side applications.",
  },
  devops: {
    title: "Automating infrastructure,",
    accent: "scaling the cloud.",
    sub: "DevOps engineer specializing in CI/CD pipelines, container orchestration, and cloud infrastructure. Focused on building reliable, automated deployment systems.",
  },
  dev: {
    title: "Building scalable",
    accent: "fullstack applications.",
    sub: "Fullstack developer specializing in Node.js, NestJS, React, and RESTful APIs. Focused on building efficient, production-ready web applications.",
  },
};

export default function Hero() {
  const role = getRole();
  const lines = LINES[role] || LINES.default;
  const content = CONTENT[role] || CONTENT.default;

  const [visible, setVisible] = useState([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let timeouts = [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible([]);
    lines.forEach((line, i) => {
      const timeout = setTimeout(() => {
        setVisible((v) => [...v, i]);
      }, line.delay);
      timeouts.push(timeout);
    });
    const interval = setInterval(() => setCursor((c) => !c), 530);
    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
      setVisible([]);
    };
  }, [lines, role]);

  return (
    <section id="home" style={styles.hero} className="fade-in-up">
      <div style={styles.grid}>
        <div style={styles.left}>
          <div style={styles.badge}>
            <span style={styles.dot} />
            Available for hire
          </div>
          <h1 style={styles.title}>
            {content.title}
            <br />
            <span style={styles.accent}>{content.accent}</span>
          </h1>
          <p style={styles.sub}>{content.sub}</p>
          <div style={styles.btns}>
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch →
            </a>
          </div>
        </div>

        <div style={styles.terminal}>
          <div style={styles.termBar}>
            <span style={{ ...styles.termDot, background: "#ff5f56" }} />
            <span style={{ ...styles.termDot, background: "#ffbd2e" }} />
            <span style={{ ...styles.termDot, background: "#27c93f" }} />
            <span style={styles.termTitle}>portfolio ~ bash</span>
          </div>
          <div style={styles.termBody}>
            {lines.map((line, i) =>
              visible.includes(i) ? (
                <div
                  key={i}
                  style={{
                    ...styles.termLine,
                    color:
                      line.type === "cmd"
                        ? "#e2e8f0"
                        : line.type === "success"
                          ? "#00ff9d"
                          : "#94a3b8",
                  }}
                >
                  {line.text}
                </div>
              ) : null,
            )}
            {visible.length >= lines.length && (
              <div style={styles.termLine}>
                <span style={{ color: "#00ff9d", marginRight: 8 }}>$</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 14,
                    background: "#00ff9d",
                    verticalAlign: "middle",
                    opacity: cursor ? 1 : 0,
                    transition: "opacity 0.1s",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={styles.scrollHint}>
        <div style={styles.scrollLine} />
        <span style={styles.scrollText}>scroll</span>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "8rem 2.5rem 4rem",
    position: "relative",
    zIndex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
  },
  left: { display: "flex", flexDirection: "column", gap: "1.5rem" },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.75rem",
    color: "#00ff9d",
    border: "1px solid rgba(0,255,157,0.25)",
    padding: "0.35rem 0.85rem",
    borderRadius: 4,
    width: "fit-content",
    letterSpacing: "0.06em",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#00ff9d",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
  title: {
    fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    margin: 0,
    letterSpacing: "-0.03em",
  },
  accent: { color: "#00ff9d" },
  sub: {
    color: "#64748b",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    margin: 0,
    maxWidth: 440,
  },
  btns: { display: "flex", gap: "1rem", flexWrap: "wrap" },
  terminal: {
    background: "#0d1117",
    border: "1px solid rgba(0,255,157,0.15)",
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0 0 60px rgba(0,255,157,0.06)",
  },
  termBar: {
    background: "#161b22",
    padding: "0.65rem 1rem",
    display: "flex",
    alignItems: "center",
    gap: 6,
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  },
  termDot: {
    width: 11,
    height: 11,
    borderRadius: "50%",
    display: "inline-block",
  },
  termTitle: { marginLeft: "auto", fontSize: "0.7rem", color: "#4a5568" },
  termBody: {
    padding: "1.2rem 1.4rem",
    minHeight: 180,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  termLine: { fontSize: "0.82rem", lineHeight: 1.6, letterSpacing: "0.01em" },
  scrollHint: {
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  scrollLine: {
    width: 1,
    height: 50,
    background: "linear-gradient(to bottom, transparent, rgba(0,255,157,0.4))",
  },
  scrollText: {
    fontSize: "0.65rem",
    color: "#4a5568",
    letterSpacing: "0.15em",
  },
};
