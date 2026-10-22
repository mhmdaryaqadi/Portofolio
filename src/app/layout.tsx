import type { Metadata } from "next";
import { Host_Grotesk, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Arya Alqadi — Fullstack & Systems Developer",
  description:
    "Portfolio of Muhammad Arya Alqadi. Fullstack & Systems Developer specializing in hybrid desktop architecture, networking infrastructure, and scalable web applications.",
  authors: [{ name: "Muhammad Arya Alqadi", url: "https://github.com/mhmdaryaqadi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-theme="dark"
      className={`${hostGrotesk.variable} ${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)] font-[var(--font-reading)]">
        {children}
      </body>
    </html>
  );
}
