export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1a2d4a",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 12,
          color: "#4a6a8a",
          letterSpacing: 0.5,
        }}
      >
        © 2026 Marcell Jonathan. Built with Next.js.
      </p>
    </footer>
  );
}
