import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Marcell Jonathan — Data Analyst & Engineer",
  description:
    "Data analyst and engineer based in Indonesia. I build data-driven web apps, AI-powered tools, and interactive dashboards for businesses in finance, e-commerce, and marketing.",
  keywords: [
    "data analyst",
    "data engineer",
    "Python",
    "Next.js",
    "dashboard",
    "Indonesia",
    "Marcell Jonathan",
  ],
  authors: [{ name: "Marcell Jonathan Haryono" }],
  openGraph: {
    title: "Marcell Jonathan — Data Analyst & Engineer",
    description:
      "Data analyst and engineer based in Indonesia. Building data-driven apps, AI tools, and dashboards.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcell Jonathan — Data Analyst & Engineer",
    description:
      "Data analyst and engineer based in Indonesia. Building data-driven apps, AI tools, and dashboards.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className="min-h-screen antialiased"
        style={{
          fontFamily: "var(--font-heading), sans-serif",
          backgroundColor: "#0a0f1e",
          color: "#e8f0fa",
        }}
      >
        {children}
      </body>
    </html>
  );
}
