import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nine-blond-20.vercel.app"),
  title: {
    default: "Hannia Guerra | Frontend Developer",
    template: "%s | Hannia Guerra",
  },
  description:
    "Frontend Developer especializado en React, Next.js y TypeScript. Creo experiencias web modernas, de alto rendimiento y con diseño cuidadoso.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "España",
  ],
  authors: [{ name: "Hannia Guerra", url: "https://github.com/HanniaG15" }],
  openGraph: {
    title: "Hannia Guerra | Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript. Disponible para proyectos y empleo.",
    type: "website",
    locale: "es_ES",
    url: "https://portfolio-nine-blond-20.vercel.app",
    siteName: "Hannia Guerra — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hannia Guerra | Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript.",
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
    <html lang="es" className="h-full antialiased">
      <body className="scan-overlay">{children}</body>
    </html>
  );
}
