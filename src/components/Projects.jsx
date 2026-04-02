const PROJECTS = [
  {
    title: "K8s Auto-Scaler",
    tag: "DevOps",
    status: "live",
    desc: "Kubernetes operator that dynamically scales microservices based on custom Prometheus metrics with predictive HPA.",
    stack: ["Go", "Kubernetes", "Prometheus", "Helm"],
  },
  {
    title: "GitOps Pipeline",
    tag: "DevOps",
    status: "live",
    desc: "End-to-end GitOps workflow using ArgoCD, GitHub Actions, and automated canary deployments with rollback logic.",
    stack: ["ArgoCD", "GitHub Actions", "Helm", "Terraform"],
  },
  {
    title: "Cloud Dashboard",
    tag: "Development",
    status: "live",
    desc: "Real-time infrastructure monitoring dashboard with cost analytics, alerting, and multi-cloud resource management.",
    stack: ["React", "Node.js", "AWS SDK", "WebSockets"],
  },
  {
    title: "Auth Microservice",
    tag: "Development",
    status: "building",
    desc: "Zero-trust authentication service with OAuth2, JWT rotation, and rate-limited API gateway backed by Redis.",
    stack: ["Python", "FastAPI", "Redis", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section} className="fade-in-up">
      <div className="section-inner">
        <p className="section-label" style={{ fontSize: "1rem" }}>
          // projects
        </p>
        <h2 className="section-title">Things I've built.</h2>
        <div style={styles.grid}>
          {PROJECTS.map((p) => {
            const isDevOps = p.tag === "DevOps";
            return (
              <div key={p.title} style={styles.card}>
                <div style={styles.cardTop}>
                  <span
                    style={{
                      ...styles.tag,
                      background: isDevOps
                        ? "rgba(0,255,157,0.1)"
                        : "rgba(77,158,255,0.1)",
                      color: isDevOps ? "#00ff9d" : "#4d9eff",
                      border: `1px solid ${isDevOps ? "rgba(0,255,157,0.25)" : "rgba(77,158,255,0.25)"}`,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      ...styles.status,
                      color: p.status === "live" ? "#00ff9d" : "#ffbd2e",
                    }}
                  >
                    <span
                      style={{
                        ...styles.statusDot,
                        background: p.status === "live" ? "#00ff9d" : "#ffbd2e",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 8,
    padding: "1.5rem",
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
  },
  stackRow: { display: "flex", flexWrap: "wrap", gap: 6 },
  stackTag: {
    fontSize: "0.65rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    padding: "0.2rem 0.55rem",
    borderRadius: 3,
    color: "#64748b",
  },
};
