"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Monitor, Brain, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code2,
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    icon: Monitor,
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Streamlit"],
  },
  {
    icon: Brain,
    label: "LLMs",
    skills: ["HuggingFace", "FinBERT", "Groq", "LLM APIs"],
  },
  {
    icon: Wrench,
    label: "Tools",
    skills: ["Git", "Railway", "Vercel", "REST APIs", "SQLite", "FastAPI", "Supabase"],
  },
];

function Badge({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      style={{
        display: "inline-block",
        padding: "6px 14px",
        background: "rgba(59,130,246,0.08)",
        border: "1px solid #1a2d4a",
        borderRadius: 6,
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: 12,
        color: "#c8d6e8",
        cursor: "default",
        transition: "background 0.2s, border-color 0.2s, color 0.2s",
      }}
      whileHover={{
        background: "rgba(59,130,246,0.18)",
        borderColor: "#3b82f6",
        color: "#e8f0fa",
      } as never}
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "rgba(13,21,37,0.5)",
        borderTop: "1px solid #1a2d4a",
        borderBottom: "1px solid #1a2d4a",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
              textAlign: "center",
            }}
          >
            Skills
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(59,130,246,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color="#3b82f6" />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-heading), sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#e8f0fa",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.skills.map((skill, si) => (
                    <Badge
                      key={skill}
                      label={skill}
                      delay={ci * 0.08 + si * 0.04}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
