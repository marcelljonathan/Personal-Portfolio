"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ImageOff } from "lucide-react";

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { projects } from "@/data/projects";

function TechBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: "4px 10px",
        background: "rgba(59,130,246,0.1)",
        border: "1px solid rgba(59,130,246,0.2)",
        borderRadius: 4,
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: 11,
        color: "#3b82f6",
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0d1525",
        border: `1px solid ${hovered ? "#3b82f6" : "#1a2d4a"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 32px rgba(59,130,246,0.15)"
          : "0 2px 8px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Screenshot placeholder */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "linear-gradient(135deg, #0a0f1e 0%, #1a2d4a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        ) : (
          <>
            {/* Grid overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <ImageOff size={28} color="#1a2d4a" />
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 11,
                color: "#1a2d4a",
                letterSpacing: 1,
              }}
            >
              {project.title}
            </span>
          </>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              padding: "4px 10px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              borderRadius: 20,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              color: "#fff",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "#e8f0fa",
            marginBottom: 10,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: "#c8d6e8",
            fontSize: 14,
            lineHeight: 1.7,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}
        >
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={project.liveUrl || "#"}
            target={project.liveUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "9px 0",
              background: project.liveUrl ? "#3b82f6" : "rgba(59,130,246,0.08)",
              border: "1px solid",
              borderColor: project.liveUrl ? "#3b82f6" : "#1a2d4a",
              borderRadius: 8,
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: project.liveUrl ? "#fff" : "#4a6a8a",
              textDecoration: "none",
              cursor: project.liveUrl ? "pointer" : "default",
              transition: "background 0.2s",
            }}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.githubUrl || "#"}
            target={project.githubUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "9px 0",
              background: "transparent",
              border: "1px solid",
              borderColor: project.githubUrl ? "#1a2d4a" : "#1a2d4a",
              borderRadius: 8,
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: project.githubUrl ? "#c8d6e8" : "#4a6a8a",
              textDecoration: "none",
              cursor: project.githubUrl ? "pointer" : "default",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "100px 24px" }}
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
            Projects
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
