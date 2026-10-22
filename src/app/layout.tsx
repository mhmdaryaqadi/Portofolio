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
      data-theme="light"
      suppressHydrationWarning
      className={`${hostGrotesk.variable} ${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || 'light';
                  if (theme === 'system') {
                    document.documentElement.setAttribute('data-theme', 'system');
                    document.documentElement.style.colorScheme = prefersDark ? 'dark' : 'light';
                  } else {
                    document.documentElement.setAttribute('data-theme', theme);
                    document.documentElement.style.colorScheme = theme;
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full font-[var(--font-reading)] bg-[var(--bg-alt)] selection:bg-[var(--accent)] selection:text-white">
        {/* Main Centered Portfolio Frame with Lateral Rails Attached at Page Borders */}
        <div className="min-h-screen w-full flex justify-center bg-[var(--bg-alt)]">
          <div className="w-full max-w-[1560px] 2xl:max-w-[1680px] flex relative bg-[var(--bg)] border-x border-[var(--line)] shadow-[0_0_60px_rgba(0,0,0,0.06)]">
            {/* Left Lateral Hazard Rail - Attached directly to left page border, scrolls with page */}
            <aside
              aria-hidden="true"
              className="hidden sm:flex w-7 md:w-9 lg:w-11 flex-shrink-0 border-r border-[var(--line)] technical-rails-bg flex-col justify-between py-10 items-center select-none"
            >
              <div className="flex flex-col items-center gap-2 pt-4">
                <span className="font-mono text-[9px] text-[var(--muted)] rotate-90 tracking-widest uppercase opacity-60">
                  RAIL//01
                </span>
                <div className="w-1.5 h-16 border-y border-[var(--rail-mark)] opacity-50 mt-4" />
              </div>
              <div className="w-1.5 h-28 border-y border-[var(--rail-mark)] opacity-40 my-auto" />
              <div className="flex flex-col items-center gap-2 pb-4">
                <div className="w-1.5 h-16 border-y border-[var(--rail-mark)] opacity-50 mb-4" />
                <span className="font-mono text-[9px] text-[var(--muted)] rotate-90 tracking-widest uppercase opacity-60">
                  LAT//L
                </span>
              </div>
            </aside>

            {/* Main Content Center Column */}
            <div className="flex-1 min-w-0 flex flex-col bg-[var(--bg)] relative">
              {children}
            </div>

            {/* Right Lateral Hazard Rail - Attached directly to right page border, scrolls with page */}
            <aside
              aria-hidden="true"
              className="hidden sm:flex w-7 md:w-9 lg:w-11 flex-shrink-0 border-l border-[var(--line)] technical-rails-bg flex-col justify-between py-10 items-center select-none"
            >
              <div className="flex flex-col items-center gap-2 pt-4">
                <span className="font-mono text-[9px] text-[var(--muted)] -rotate-90 tracking-widest uppercase opacity-60">
                  RAIL//02
                </span>
                <div className="w-1.5 h-16 border-y border-[var(--rail-mark)] opacity-50 mt-4" />
              </div>
              <div className="w-1.5 h-28 border-y border-[var(--rail-mark)] opacity-40 my-auto" />
              <div className="flex flex-col items-center gap-2 pb-4">
                <div className="w-1.5 h-16 border-y border-[var(--rail-mark)] opacity-50 mb-4" />
                <span className="font-mono text-[9px] text-[var(--muted)] -rotate-90 tracking-widest uppercase opacity-60">
                  LAT//R
                </span>
              </div>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
