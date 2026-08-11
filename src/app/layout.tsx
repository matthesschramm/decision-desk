import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(metadataUrl),
  title: "Decision Desk — Evidence-backed company intelligence",
  description:
    "A working public sandbox that turns synthetic customer, product and operating signals into traceable decisions and measurable experiments.",
  applicationName: "Decision Desk",
  authors: [{ name: "Matthes Schramm" }],
  creator: "Matthes Schramm",
  keywords: [
    "AI builder",
    "company brain",
    "product prototype",
    "evidence synthesis",
    "decision intelligence",
  ],
  openGraph: {
    title: "Decision Desk",
    description:
      "Ask the company. See the evidence. Decide faster. A synthetic AI company-brain sandbox by Matthes Schramm.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decision Desk",
    description:
      "A synthetic AI company-brain sandbox by Matthes Schramm.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
