import { useState, useEffect } from "react";

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= docHeight - 50) {
        setActive(NAV_LINKS[NAV_LINKS.length - 1]);
        return;
      }

      const sections = NAV_LINKS.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.offsetTop } : null;
      }).filter(Boolean);

      const current = sections.reduce(
        (acc, s) => (scrollY >= s.top - 120 ? s : acc),
        sections[0],
      );
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.logo}>
        <span style={styles.bracket}>&lt;</span>
        Supun Sankalpa
        <span style={styles.bracket}>&nbsp;/&gt;</span>
      </a>

      <div style={styles.links}>
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            style={{
              ...styles.link,
              color: active === l ? "#00ff9d" : "#94a3b8",
              borderBottom:
                active === l ? "1px solid #00ff9d" : "1px solid transparent",
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    padding: "1.1rem 2.5rem",
    background: "rgba(10,14,23,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(0,255,157,0.08)",
  },
  logo: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#e2e8f0",
    textDecoration: "none",
    letterSpacing: "-0.02em",
  },
  bracket: { color: "#00ff9d" },
  links: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "2rem",
  },
  link: {
    textDecoration: "none",
    fontSize: "0.8rem",
    letterSpacing: "0.08em",
    paddingBottom: "2px",
    transition: "color 0.2s",
    textTransform: "lowercase",
  },
};
