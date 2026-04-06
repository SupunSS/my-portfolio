import { getRole } from "../utils/getRole";

const IconGithub = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ALL_PROJECTS = [
  {
    title: "Automatic Rice Cooker using IOT",
    tag: "IoT & Mobile",
    roles: ["dev", "default"],
    status: "completed",
    desc: "Final year project featuring IoT-enabled rice cooker with mobile control via React Native app, backend powered by NestJS.",
    stack: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C",
      "React Native",
      "NestJS",
    ],
    github: "https://github.com/SupunSS",
  },
  {
    title: "Bus Ticket Booking App",
    tag: "Mobile Development",
    roles: ["dev", "default"],
    status: "completed",
    desc: "Cross-platform mobile application for bus ticket booking with Flutter frontend and Express backend.",
    stack: ["Dart", "Flutter", "Express", "JavaScript", "HTML"],
    github: "https://github.com/SupunSS",
  },
  {
    title: "Royal State",
    tag: "Web Development",
    roles: ["dev", "default"],
    status: "completed",
    desc: "Property-selling website with modern UI and backend functionality for real estate listings.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Spring Boot", "Java"],
    github: "https://github.com/SupunSS",
  },
  {
    title: "DevOps CI/CD Pipeline",
    tag: "DevOps",
    roles: ["devops", "default"],
    status: "completed",
    desc: "Automated deployment pipeline with GitHub Actions, Docker containerization, and continuous integration workflows.",
    stack: ["Docker", "GitHub Actions", "Bash", "YAML"],
    github: "https://github.com/SupunSS",
  },
  {
    title: "Microservices Architecture",
    tag: "DevOps",
    roles: ["devops", "default"],
    status: "building",
    desc: "Scalable microservices setup with containerized services, API gateway, and service mesh implementation.",
    stack: ["Docker", "Node.js", "NestJS", "MongoDB", "Redis"],
    github: "https://github.com/SupunSS",
  },
  {
    title: "Augusta Primary School",
    tag: "Web Development",
    roles: ["dev", "default"],
    status: "completed",
    desc: "Educational institution website with dynamic content management and responsive design.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/SupunSS",
  },
  {
    title: "Nexus Coffee Shop",
    tag: "Frontend",
    roles: ["dev", "default"],
    status: "completed",
    desc: "Modern coffee shop website frontend with elegant design and smooth user experience.",
    stack: ["HTML", "CSS"],
    github: "https://github.com/SupunSS",
  },
  {
    title: "Cloud Infrastructure Automation",
    tag: "DevOps",
    roles: ["devops", "default"],
    status: "building",
    desc: "Infrastructure as Code setup for AWS with automated provisioning, monitoring, and scaling capabilities.",
    stack: ["AWS", "Terraform", "CloudWatch", "Lambda"],
    github: "https://github.com/SupunSS",
  },
];

const TAG_COLORS = {
  "IoT & Mobile": {
    bg: "rgba(0,255,157,0.1)",
    color: "#00ff9d",
    border: "rgba(0,255,157,0.25)",
  },
  "Mobile Development": {
    bg: "rgba(77,158,255,0.1)",
    color: "#4d9eff",
    border: "rgba(77,158,255,0.25)",
  },
  "Web Development": {
    bg: "rgba(255,189,46,0.1)",
    color: "#ffbd2e",
    border: "rgba(255,189,46,0.25)",
  },
  Frontend: {
    bg: "rgba(139,92,246,0.1)",
    color: "#8b5cf6",
    border: "rgba(139,92,246,0.25)",
  },
  DevOps: {
    bg: "rgba(255,107,107,0.1)",
    color: "#ff6b6b",
    border: "rgba(255,107,107,0.25)",
  },
};

export default function Projects() {
  const role = getRole() || "default";
  const projects = ALL_PROJECTS.filter((p) => p.roles.includes(role));

  return (
    <section id="projects" style={styles.section} className="fade-in-up">
      <div className="section-inner">
        <p className="section-label" style={{ fontSize: "1rem" }}>
          // projects
        </p>
        <h2 className="section-title">Things I've built.</h2>
        <div style={styles.grid}>
          {projects.map((p) => {
            const colors = TAG_COLORS[p.tag] || TAG_COLORS["Web Development"];
            return (
              <div key={p.title} style={styles.card}>
                <div style={styles.cardTop}>
                  <span
                    style={{
                      ...styles.tag,
                      background: colors.bg,
                      color: colors.color,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      ...styles.status,
                      color: p.status === "completed" ? "#00ff9d" : "#ffbd2e",
                    }}
                  >
                    <span
                      style={{
                        ...styles.statusDot,
                        background:
                          p.status === "completed" ? "#00ff9d" : "#ffbd2e",
                      }}
                    />
                    {p.status}
                  </span>
                </div>
                <h3 style={styles.cardTitle}>{p.title}</h3>
                <p style={styles.cardDesc}>{p.desc}</p>
                <div style={styles.stackRow}>
                  {p.stack.map((s) => (
                    <span key={s} style={styles.stackTag}>
                      {s}
                    </span>
                  ))}
                </div>
                <div style={styles.cardFooter}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.githubBtn}
                  >
                    <IconGithub /> View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "6rem 2.5rem", position: "relative", zIndex: 1 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 8,
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  tag: {
    fontSize: "0.68rem",
    padding: "0.2rem 0.6rem",
    borderRadius: 3,
    fontWeight: 600,
    letterSpacing: "0.06em",
  },
  status: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    fontSize: "0.68rem",
    letterSpacing: "0.06em",
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    display: "inline-block",
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    margin: "0 0 0.75rem",
    color: "#e2e8f0",
  },
  cardDesc: {
    fontSize: "0.8rem",
    color: "#64748b",
    lineHeight: 1.7,
    margin: "0 0 1.25rem",
    flex: 1,
  },
  stackRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: "1.25rem",
  },
  stackTag: {
    fontSize: "0.65rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    padding: "0.2rem 0.55rem",
    borderRadius: 3,
    color: "#64748b",
  },
  cardFooter: {
    marginTop: "auto",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(255,255,255,0.04)",
  },
  githubBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "0.5rem 0.9rem",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 5,
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.03em",
  },
};
