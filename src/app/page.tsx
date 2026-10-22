import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Flagship } from "@/components/flagship";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--accent)] selection:text-[var(--on-accent)]">
      {/* Floating Command Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Flagship />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Modern Minimalist Footer */}
      <Footer />
    </div>
  );
}
