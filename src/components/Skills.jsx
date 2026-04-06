import { useState, useEffect, useRef } from "react";
import { getRole } from "../utils/getRole";

const ALL_SKILLS = {
  Backend: [
    { name: "Node.js", level: 90 },
    { name: "NestJS", level: 85 },
    { name: "RESTful API Development", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "API Integration", level: 85 },
  ],
  Frontend: [
    { name: "React / React Native", level: 80 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "HTML / CSS", level: 88 },
    { name: "Flutter / Dart", level: 75 },
    { name: "WordPress", level: 70 },
  ],
  DevOps: [
    { name: "Docker & Containerization", level: 78 },
    { name: "CI/CD Pipelines", level: 75 },
    { name: "Git & GitHub", level: 85 },
    { name: "Linux & Shell Scripting", level: 80 },
    { name: "Cloud Platforms (AWS/GCP)", level: 70 },
  ],
  "Other Skills": [
    { name: "Backend Testing", level: 80 },
    { name: "Microservices Architecture", level: 75 },
    { name: "OOP Concepts", level: 82 },
    { name: "Analytical Thinking", level: 88 },
    { name: "Python / C / C++ / C#", level: 70 },
  ],
};

const ROLE_SKILLS = {
  devops: {
    DevOps: ALL_SKILLS.DevOps,
    Backend: ALL_SKILLS.Backend,
    "Other Skills": ALL_SKILLS["Other Skills"],
  },
  dev: {
    Backend: ALL_SKILLS.Backend,
    Frontend: ALL_SKILLS.Frontend,
    "Other Skills": ALL_SKILLS["Other Skills"],
  },
};

const CAT_COLORS = {
  Backend: "#00ff9d",
  Frontend: "#4d9eff",
  DevOps: "#ff6b6b",
  "Other Skills": "#ffbd2e",
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
  const role = getRole();
  const skills = ROLE_SKILLS[role] || ALL_SKILLS;

  return (
    <section id="skills" style={styles.section} className="fade-in-up">
      <div className="section-inner">
        <p className="section-label" style={{ fontSize: "1rem" }}>
          // skills & stack
        </p>
        <h2 className="section-title">What I work with.</h2>
        <div style={styles.grid}>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <div style={styles.catHeader}>
                <span
                  style={{
                    ...styles.catDot,
                    background: CAT_COLORS[cat] || "#94a3b8",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "3rem",
  },
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
