"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket, TrendingUp, CheckCircle } from "lucide-react";

const stats = [
  { icon: Rocket, value: "5", label: "Projects Built" },
  { icon: Briefcase, value: "4", label: "Deployed Apps" },
  { icon: TrendingUp, value: "3+", label: "Years in Finance" },
  { icon: CheckCircle, value: "Open", label: "Available for Hire" },
];

function StatCard({
  icon: Icon,
  value,
  label,
  delay,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: "#0d1525",
        border: "1px solid #1a2d4a",
        borderRadius: 12,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        transition: "border-color 0.2s",
      }}
      whileHover={{ borderColor: "#3b82f6" } as never}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: "rgba(59,130,246,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="#3b82f6" />
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: "#e8f0fa",
            lineHeight: 1,
            marginBottom: 4,
          }}
        >
          {value}
        </div>
        <div
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 11,
            color: "#4a6a8a",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "100px 24px",
        maxWidth: 860,
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 60 }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#e8f0fa",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          About Me
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 260px",
          gap: 60,
          alignItems: "start",
        }}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p
            style={{
              color: "#c8d6e8",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
              textAlign: "justify",
            }}
          >
            Actuarial science graduate from Bandung Institute of Technology pursuing the
            Data Analyst & Engineering path.
          </p>

          <p
            style={{
              color: "#c8d6e8",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
              textAlign: "justify",
            }}
          >
            Currently working as a data analyst & risk management in Indonesia, 
            where I build dashboards, automated pipelines, and automated trading
            systems for real trading usage.
          </p>

          <p
            style={{
              color: "#c8d6e8",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
              textAlign: "justify",
            }}
          >
            Beyond analytics, I&apos;m actively building with machine learning and LLM
            APIs — applying them to real financial problems, not just tutorials.
          </p>

        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #1a2d4a",
            aspectRatio: "4/5",
          }}
        >
          <img
            src="/photograph.jpg"
            alt="Marcell Jonathan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
