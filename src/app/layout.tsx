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
        {/* Full Viewport Framing with Signature Blackbox.ai Lateral Rails on Left and Right */}
        <div className="min-h-screen flex w-full relative">
          {/* Left Lateral Hazard Rail */}
          <aside
            aria-hidden="true"
            className="hidden sm:block w-6 md:w-10 lg:w-14 flex-shrink-0 border-r border-[var(--line)] technical-rails-bg relative select-none"
          >
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 items-center opacity-40">
              <span className="font-mono text-[9px] text-[var(--muted)] rotate-90 tracking-widest uppercase">
                RAIL//01
              </span>
              <div className="w-1.5 h-20 border-y border-[var(--rail-mark)]" />
              <span className="font-mono text-[9px] text-[var(--muted)] rotate-90 tracking-widest uppercase">
                LAT//L
              </span>
            </div>
          </aside>

          {/* Main Content Center Column */}
          <div className="flex-1 min-w-0 max-w-7xl mx-auto flex flex-col bg-[var(--bg)] relative shadow-[0_0_50px_rgba(0,0,0,0.05)] border-x sm:border-x-0 border-[var(--line)]">
            {children}
          </div>

          {/* Right Lateral Hazard Rail */}
          <aside
            aria-hidden="true"
            className="hidden sm:block w-6 md:w-10 lg:w-14 flex-shrink-0 border-l border-[var(--line)] technical-rails-bg relative select-none"
          >
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 items-center opacity-40">
              <span className="font-mono text-[9px] text-[var(--muted)] -rotate-90 tracking-widest uppercase">
                RAIL//02
              </span>
              <div className="w-1.5 h-20 border-y border-[var(--rail-mark)]" />
              <span className="font-mono text-[9px] text-[var(--muted)] -rotate-90 tracking-widest uppercase">
                LAT//R
              </span>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
