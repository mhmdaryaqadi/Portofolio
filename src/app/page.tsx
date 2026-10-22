import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--accent)] selection:text-[var(--on-accent)]">
      {/* Floating Command Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
