import { useState, useEffect, useRef } from "react";

const SKILLS = {
  Development: [
    { name: "React / Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "TypeScript", level: 82 },
    { name: "REST & GraphQL APIs", level: 88 },
  ],
  DevOps: [
    { name: "Docker & Kubernetes", level: 87 },
    { name: "CI/CD Pipelines", level: 85 },
    { name: "AWS / GCP / Azure", level: 80 },
    { name: "Terraform / IaC", level: 78 },
    { name: "Linux & Shell Scripting", level: 90 },
  ],
};

function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(level);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} style={styles.skillRow}>
      <div style={styles.meta}>
        <span style={styles.name}>{name}</span>
        <span style={styles.pct}>{level}%</span>
      </div>
      <div style={styles.track}>
        <div style={{ ...styles.fill, width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={styles.section} className="fade-in-up">
      <div className="section-inner">
        <p className="section-label">// skills & stack</p>
        <h2 className="section-title">What I work with.</h2>
        <div style={styles.grid}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <div style={styles.catHeader}>
                <span
                  style={{
                    ...styles.catDot,
                    background: cat === "DevOps" ? "#00ff9d" : "#4d9eff",
                  }}
                />
                <span style={styles.catName}>{cat}</span>
              </div>
              {items.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "6rem 2.5rem",
    background: "rgba(255,255,255,0.01)",
    position: "relative",
    zIndex: 1,
  },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" },
  catHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: "1.5rem",
  },
  catDot: { width: 8, height: 8, borderRadius: "50%", display: "inline-block" },
  catName: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "#94a3b8",
  },
  skillRow: { marginBottom: "1.1rem" },
  meta: { display: "flex", justifyContent: "space-between", marginBottom: 6 },
  name: { fontSize: "0.8rem", color: "#94a3b8" },
  pct: { fontSize: "0.75rem", color: "#4a5568" },
  track: {
    height: 3,
    background: "rgba(255,255,255,0.05)",
    borderRadius: 2,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    background: "linear-gradient(90deg, #00ff9d, #4d9eff)",
    borderRadius: 2,
    transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
  },
};
