"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const EMAIL = "marcelljonathann23@gmail.com";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}


export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "rgba(13,21,37,0.5)",
        borderTop: "1px solid #1a2d4a",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#e8f0fa",
              marginBottom: 16,
            }}
          >
            Contact
          </h2>
          <p
            style={{
              color: "#c8d6e8",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Reach out through any of the channels below:
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        {/* Email CTA */}
        <motion.a
          href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 32px",
            background: "#3b82f6",
            color: "#fff",
            borderRadius: 10,
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.15s",
          }}
          whileHover={{ background: "#2563eb", y: -2 } as never}
        >
          <Mail size={18} />
          {EMAIL}
        </motion.a>

        {/* GitHub button */}
        <motion.a
          href="https://github.com/marcelljonathan"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 24px",
            background: "#0d1525",
            border: "1px solid #1a2d4a",
            borderRadius: 10,
            color: "#c8d6e8",
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#3b82f6";
            (e.currentTarget as HTMLElement).style.color = "#3b82f6";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#1a2d4a";
            (e.currentTarget as HTMLElement).style.color = "#c8d6e8";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <GithubIcon />
          GitHub
        </motion.a>
        </div>
      </div>
    </section>
  );
}
