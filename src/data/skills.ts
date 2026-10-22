import { SkillCategory } from "@/types/portfolio";

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", isHighlight: true },
      { name: "PHP", isHighlight: true },
      { name: "JavaScript (ESNext)", isHighlight: true },
      { name: "TypeScript", isHighlight: true },
      { name: "SQL", isHighlight: true },
      { name: "HTML5 & Modern CSS" },
      { name: "Java (Core & OOP)" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Web Ecosystem",
    icon: "Layout",
    skills: [
      { name: "Next.js (App Router)", isHighlight: true },
      { name: "Laravel", isHighlight: true },
      { name: "React", isHighlight: true },
      { name: "Tailwind CSS", isHighlight: true },
      { name: "Vite", isHighlight: true },
      { name: "Blade Template Engine" },
      { name: "Node.js" },
    ],
  },
  {
    id: "systems",
    title: "Desktop & System Engineering",
    icon: "Cpu",
    skills: [
      { name: "PyWebView (WebView2)", isHighlight: true },
      { name: "IPC Bridge Architecture", isHighlight: true },
      { name: "SQLite3 (WAL Mode)", isHighlight: true },
      { name: "Inno Setup Scripting", isHighlight: true },
      { name: "PyInstaller Packaging", isHighlight: true },
      { name: "Windows API & UAC Elevation" },
      { name: "Automated QA Suites" },
    ],
  },
  {
    id: "networking",
    title: "IT Infrastructure & Networking",
    icon: "Network",
    skills: [
      { name: "MikroTik RouterOS (Winbox/WebFig)", isHighlight: true },
      { name: "Cisco Packet Tracer", isHighlight: true },
      { name: "TCP/IP & IPv4 Subnetting", isHighlight: true },
      { name: "VLAN & Inter-VLAN Routing", isHighlight: true },
      { name: "Access Control Lists (ACLs)" },
      { name: "Fiber Optic Fusion Splicing & OPM/VFL" },
      { name: "Server Rack Maintenance & UTP Cabling" },
    ],
  },
  {
    id: "tools",
    title: "DevOps, Tools & Database",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub Version Control", isHighlight: true },
      { name: "MySQL / MariaDB", isHighlight: true },
      { name: "Composer & npm", isHighlight: true },
      { name: "Linux Basics (Ubuntu/Kali)" },
      { name: "REST APIs & JSON-RPC" },
      { name: "Discord API & Steam IPC" },
    ],
  },
];
