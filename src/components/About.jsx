import React from "react";

const IconGradCap = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00ff9d"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconBriefcase = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00ff9d"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconTrophy = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00ff9d"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const CARDS = [
  {
    icon: <IconGradCap />,
    title: "Education",
    items: [
      { main: "BSc (Hons) ICT", sub: "Uva Wellassa University" },
      {
        main: "Oct 2021 – Oct 2025",
        sub: "Specializing in Software Technology",
      },
      { main: "GPA 3.00+", sub: "Dean's Certificate — Year 1 Sem 1" },
    ],
  },
  {
    icon: <IconBriefcase />,
    title: "Experience",
    items: [
      {
        main: "Backend Developer Intern",
        sub: "Infact Solutions · Apr–Oct 2024",
      },
      {
        main: "NestJS & MongoDB",
        sub: "REST APIs, unit testing, scalable backend",
      },
      { main: "IGVP — DXP", sub: "AIESEC in UWU · Feb 2024–Feb 2025" },
    ],
  },
  {
    icon: <IconTrophy />,
    title: "Achievements",
    items: [
      {
        main: "Dean's Certificate",
        sub: "Exceptional academic performance Y1S1",
      },
      { main: "Best IG Event", sub: "AIESEC in UWU organizing committee" },
      { main: "Former IGVP for DXP", sub: "AIESEC in Uva Wellassa University" },
    ],
  },
];

export default function About() {
  return (
    <section id="about" style={styles.section} className="fade-in-up">
      <div style={styles.sectionInner}>
        <p className="section-label" style={{ fontSize: "1rem" }}>
          // About Me
        </p>
        <h2 style={styles.title}>
          Engineering <span style={{ color: "#00ff9d" }}>scalable</span>{" "}
          systems,
          <br />
          from code to deployment.
        </h2>

        {/* Info Cards */}
        <div style={styles.cardRow}>
          {CARDS.map((card) => (
            <div key={card.title} style={styles.infoCard}>
              <div style={styles.iconWrap}>{card.icon}</div>
              <div style={styles.cardBody}>
                <p style={styles.cardTitle}>{card.title}</p>
                {card.items.map((item, i) => (
                  <div key={i} style={{ marginBottom: 6 }}>
                    <p style={styles.cardMain}>{item.main}</p>
                    <p style={styles.cardSub}>{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bio + Stats */}
        <div style={styles.grid}>
          <div>
            <p style={styles.text}>
              I am a full-stack software engineer with a strong focus on
              building <span style={{ color: "#00ff9d" }}>scalable</span>,{" "}
              <span style={{ color: "#00ff9d" }}>reliable</span> and{" "}
              <span style={{ color: "#00ff9d" }}>production-ready</span>{" "}
              systems. My work spans across designing modern web applications,
              developing backend services with NestJS and Node.js, and
              implementing efficient system architectures that support long-term
              growth.
            </p>
            <p style={styles.text}>
              I specialize in bridging development and operations — working with
              React, Node.js, and Python on the application side, and Docker,
              Kubernetes, and cloud platforms on the infrastructure side. My
              goal is to ensure that every product I build is not only
              functional, but also{" "}
              <span style={{ color: "#00ff9d" }}>maintainable</span>,{" "}
              <span style={{ color: "#00ff9d" }}>secure</span> and{" "}
              <span style={{ color: "#00ff9d" }}>performant</span> in real-world
              environments.
            </p>
          </div>

          <div style={styles.statsGrid}>
            {[
              { val: "1+", label: "Years professional experience" },
              { val: "8+", label: "Projects developed" },
              { val: "1k+", label: "Code commits" },
              { val: "3.00+", label: "University GPA" },
            ].map((s) => (
              <div key={s.label} style={styles.statCard}>
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
  section: { padding: "6rem 2.5rem", position: "relative", zIndex: 1 },
  sectionInner: { maxWidth: "1100px", margin: "0 auto" },
  title: {
    fontSize: "2.2rem",
    fontWeight: 800,
    color: "#e2e8f0",
    marginBottom: "2.5rem",
    lineHeight: 1.3,
  },

  // Cards
  cardRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.25rem",
    marginBottom: "3rem",
  },
  infoCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(0,255,157,0.1)",
    borderRadius: 10,
    padding: "1.4rem",
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
  },
  iconWrap: {
    width: 38,
    height: 38,
    background: "rgba(0,255,157,0.08)",
    border: "1px solid rgba(0,255,157,0.15)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardBody: { flex: 1 },
  cardTitle: {
    fontSize: "0.7rem",
    fontWeight: 700,
    color: "#00ff9d",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    margin: "0 0 10px",
  },
  cardMain: {
    fontSize: "0.82rem",
    color: "#e2e8f0",
    fontWeight: 600,
    margin: "0 0 1px",
  },
  cardSub: {
    fontSize: "0.72rem",
    color: "#64748b",
    margin: 0,
    lineHeight: 1.5,
  },

  // Bio + stats
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
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  statCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: 6,
    padding: "1.25rem 1rem",
  },
  statVal: {
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "#00ff9d",
    marginBottom: 4,
  },
  statLabel: { fontSize: "0.72rem", color: "#4a5568", letterSpacing: "0.06em" },
};
