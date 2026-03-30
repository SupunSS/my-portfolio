import React from "react";

export default function About() {
  return (
    <section id="about" style={styles.section} className="fade-in-up">
      <div style={styles.sectionInner}>
        <p style={styles.label}>// about me</p>

        <h2 style={styles.title}>
          Engineering <span style={{ color: "#00ff9d" }}>scalable</span>{" "}
          systems,
          <br />
          from code to deployment.
        </h2>

        <div style={styles.grid}>
          {/* LEFT CONTENT */}
          <div>
            <p style={styles.text}>
              I am a full-stack software engineer with a strong focus on
              building <span style={{ color: "#00ff9d" }}>scalable</span>,
              <span style={{ color: "#00ff9d" }}>reliable</span> and
              <span style={{ color: "#00ff9d" }}> production-ready</span>{" "}
              systems. My work spans across designing modern web applications,
              developing backend services, and implementing efficient system
              architectures that support long-term growth.
            </p>

            <p style={styles.text}>
              I specialize in bridging development and operations — working with
              technologies like React, Node.js, and Python on the application
              side, and Docker, Kubernetes, and cloud platforms on the
              infrastructure side. My goal is to ensure that every product I
              build is not only functional, but also{" "}
              <span style={{ color: "#00ff9d" }}>maintainable</span>,
              <span style={{ color: "#00ff9d" }}>secure</span> and
              <span style={{ color: "#00ff9d" }}> performant</span> in
              real-world environments.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div style={styles.statsGrid}>
            {[
              { val: "3+", label: "Years Experience" },
              { val: "20+", label: "Projects Delivered" },
              { val: "99.9%", label: "System Uptime" },
              { val: "5k+", label: "Code Commits" },
            ].map((s) => (
              <div key={s.label} className="statCard">
                <div style={styles.statVal}>{s.val}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "6rem 2.5rem",
    position: "relative",
    zIndex: 1,
  },

  sectionInner: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  label: {
    color: "#00ff9d",
    fontSize: "0.8rem",
    marginBottom: "1rem",
    letterSpacing: "0.08em",
  },

  title: {
    fontSize: "2.2rem",
    fontWeight: 800,
    color: "#e2e8f0",
    marginBottom: "2.5rem",
    lineHeight: 1.3,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "3rem",
    alignItems: "start",
  },

  text: {
    color: "#64748b",
    lineHeight: 1.8,
    fontSize: "0.95rem",
    marginBottom: "1rem",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },

  statVal: {
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "#00ff9d",
    marginBottom: "4px",
  },

  statLabel: {
    fontSize: "0.72rem",
    color: "#4a5568",
    letterSpacing: "0.06em",
  },
};
