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

export const metadata: Metadata = {
  title: "Aditya Jaiswal | Frontend Developer Portfolio",
  description:
    "Modern, responsive portfolio showcasing frontend development projects built with Next.js, React, and Tailwind CSS. Specializing in high-performance web applications.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js",
    "portfolio",
    "web development",
    "UI/UX",
  ],
  authors: [{ name: "Aditya Jaiswal" }],
  openGraph: {
    title: "Aditya Jaiswal | Frontend Developer",
    description:
      "Modern portfolio showcasing premium frontend development projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Jaiswal | Frontend Developer",
    description:
      "Modern portfolio showcasing premium frontend development projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
