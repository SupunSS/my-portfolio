import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_v43si6c";
const EMAILJS_TEMPLATE_ID = "template_nqq70e6";
const EMAILJS_AUTOREPLY_ID = "template_8o3v8bs";
const EMAILJS_PUBLIC_KEY = "61aeDFuXiceiUAJDd";

const IconMail = () => (
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = () => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMapPin = () => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconGithub = () => (
  <svg
    width="15"
    height="15"
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

const IconLinkedin = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconSend = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const IconCheck = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 7 17l-5-5" />
    <path d="m22 10-7.5 7.5L13 16" />
  </svg>
);

const IconLoader = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ animation: "spin 1s linear infinite" }}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    const params = {
      from_name: form.name,
      from_email: form.email,
      email: form.email, // for {{email}} in auto-reply To field
      to_name: form.name, // for {{to_name}} in auto-reply body
      subject: form.subject || "Portfolio Contact",
      message: form.message,
    };

    try {
      // Send main email to you
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY,
      );

      // Send auto-reply to the person who contacted you
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_ID,
        params,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      console.error("Error details:", err.text);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" style={styles.section} className="fade-in-up">
      <div className="section-inner">
        <p className="section-label" style={{ fontSize: "1rem" }}>
          // contact
        </p>
        <h2 className="section-title">Let's build something.</h2>
        <p style={styles.subText}>
          Whether you need a product built, infrastructure hardened, or
          pipelines automated — I'm open to new opportunities.
        </p>

        <div style={styles.grid}>
          {/* Left: contact info */}
          <div style={styles.infoCol}>
            {[
              {
                icon: <IconMail />,
                label: "Email",
                value: "supunsspn@gmail.com",
                href: "mailto:supunsspn@gmail.com",
              },
              {
                icon: <IconPhone />,
                label: "Phone",
                value: "+94 76 115 9347",
                href: "tel:+94761159347",
              },
              {
                icon: <IconMapPin />,
                label: "Location",
                value: "Kegalle, Sri Lanka",
                href: "#",
              },
            ].map((item) => (
              <a key={item.label} href={item.href} style={styles.contactCard}>
                <div style={styles.iconWrap}>{item.icon}</div>
                <div>
                  <p style={styles.contactLabel}>{item.label}</p>
                  <p style={styles.contactValue}>{item.value}</p>
                </div>
              </a>
            ))}

            <div style={styles.socialRow}>
              <a href="https://github.com/SupunSS" style={styles.socialBtn}>
                <IconGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/supun-sankalpa"
                style={styles.socialBtn}
              >
                <IconLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div style={styles.formCard}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry, collaboration..."
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, or how I can help."
                rows={5}
                style={{ ...styles.input, resize: "vertical", lineHeight: 1.7 }}
              />
            </div>

            {/* Status message */}
            {status === "success" && (
              <div
                style={{
                  ...styles.alert,
                  background: "rgba(0,255,157,0.08)",
                  border: "1px solid rgba(0,255,157,0.25)",
                  color: "#00ff9d",
                }}
              >
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  ...styles.alert,
                  background: "rgba(255,107,107,0.08)",
                  border: "1px solid rgba(255,107,107,0.25)",
                  color: "#ff6b6b",
                }}
              >
                ✕ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              style={{
                ...styles.submitBtn,
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? (
                <>
                  <IconLoader /> Sending...
                </>
              ) : status === "success" ? (
                <>
                  <IconCheck /> Message Sent!
                </>
              ) : (
                <>
                  <IconSend /> Send Message
                </>
              )}
            </button>
          </div>
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
  subText: {
    color: "#64748b",
    fontSize: "0.9rem",
    lineHeight: 1.8,
    maxWidth: 600,
    margin: "0 0 3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.6fr",
    gap: "2.5rem",
    alignItems: "start",
    maxWidth: 1100,
  },
  infoCol: { display: "flex", flexDirection: "column", gap: "1rem" },
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 8,
    padding: "1rem 1.25rem",
    textDecoration: "none",
    transition: "border-color 0.2s",
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
  contactLabel: {
    fontSize: "0.68rem",
    color: "#4a5568",
    letterSpacing: "0.08em",
    margin: "0 0 2px",
    textTransform: "uppercase",
  },
  contactValue: { fontSize: "0.82rem", color: "#e2e8f0", margin: 0 },
  socialRow: { display: "flex", gap: "0.75rem", marginTop: "0.25rem" },
  socialBtn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    padding: "0.65rem",
    border: "1px solid rgba(0,255,157,0.2)",
    borderRadius: 6,
    color: "#00ff9d",
    textDecoration: "none",
    fontSize: "0.78rem",
    letterSpacing: "0.04em",
  },
  formCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 10,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  formGroup: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  label: { fontSize: "0.72rem", color: "#64748b", letterSpacing: "0.06em" },
  input: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 6,
    padding: "0.65rem 0.9rem",
    color: "#e2e8f0",
    fontSize: "0.82rem",
    fontFamily: "'JetBrains Mono', monospace",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  alert: {
    padding: "0.75rem 1rem",
    borderRadius: 6,
    fontSize: "0.8rem",
    letterSpacing: "0.02em",
  },
  submitBtn: {
    background: "#00ff9d",
    color: "#0a0e17",
    border: "none",
    borderRadius: 6,
    padding: "0.85rem 1.5rem",
    fontWeight: 700,
    fontSize: "0.85rem",
    fontFamily: "'JetBrains Mono', monospace",
    cursor: "pointer",
    letterSpacing: "0.04em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: "0.25rem",
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
