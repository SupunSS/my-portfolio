export default function Contact() {
  return (
    <section id="contact" style={styles.section} className="fade-in-up">
      <div style={styles.inner}>
        <p className="section-label">// contact</p>
        <h2 className="section-title">Let's build something.</h2>
        <p style={styles.text}>
          Whether you need a product built, infrastructure hardened, or
          pipelines automated — I'm open to new opportunities.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=supunsspn@gmail.com"
          className="btn-primary"
        >
          supunsspn@gmail.com
        </a>
        <div style={styles.social}>
          {[
            { name: "GitHub", href: "https://github.com/SupunSS" },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/supun-sankalpa",
            },
          ].map((s) => (
            <a key={s.name} href={s.href} style={styles.socialLink}>
              {s.name}
            </a>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        <span style={{ color: "#4a5568" }}>
          Built with React ·{" "}
          <span style={{ color: "#00ff9d" }}>deployed with love</span> ·{" "}
          {new Date().getFullYear()}
        </span>
      </footer>
    </section>
  );
}

const styles = {
  section: { padding: "6rem 2.5rem 0", position: "relative", zIndex: 1 },
  inner: { maxWidth: 600, margin: "0 auto", textAlign: "center" },
  text: {
    color: "#64748b",
    lineHeight: 1.8,
    fontSize: "0.9rem",
    margin: "0 0 2.5rem",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
  },
  socialLink: {
    color: "#4a5568",
    fontSize: "0.8rem",
    textDecoration: "none",
    letterSpacing: "0.06em",
  },
  footer: {
    textAlign: "center",
    padding: "3rem 2rem 2rem",
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    borderTop: "1px solid rgba(255,255,255,0.04)",
    marginTop: "4rem",
  },
};
