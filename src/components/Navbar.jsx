// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width <= 768;

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

      {isMobile ? (
        <>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={styles.hamburger}
            aria-label="Toggle menu"
          >
            <span
              style={{
                ...styles.bar,
                transform: menuOpen
                  ? "rotate(45deg) translate(5px,5px)"
                  : "none",
              }}
            />
            <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                ...styles.bar,
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px,-5px)"
                  : "none",
              }}
            />
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div style={styles.mobileMenu}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href={`#${l}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    ...styles.mobileLink,
                    color: active === l ? "#00ff9d" : "#94a3b8",
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
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
      )}
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
    whiteSpace: "nowrap",
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
  hamburger: {
    marginLeft: "auto",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: 5,
    padding: 4,
  },
  bar: {
    display: "block",
    width: 22,
    height: 2,
    background: "#94a3b8",
    borderRadius: 2,
    transition: "transform 0.25s, opacity 0.25s",
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "rgba(10,14,23,0.97)",
    borderBottom: "1px solid rgba(0,255,157,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 2.5rem",
    gap: "0.25rem",
    backdropFilter: "blur(12px)",
  },
  mobileLink: {
    textDecoration: "none",
    fontSize: "0.9rem",
    letterSpacing: "0.08em",
    padding: "0.65rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    textTransform: "lowercase",
    transition: "color 0.2s",
  },
};
