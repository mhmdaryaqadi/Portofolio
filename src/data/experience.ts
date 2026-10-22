import { ExperienceItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "univ-pancasila",
    role: "S1 Teknik Informatika (Bachelor of Computer Science)",
    institution: "Universitas Pancasila",
    location: "Jakarta Selatan, Indonesia",
    period: "2024 — Sekarang (Est. Lulus 2028)",
    type: "education",
    highlights: [
      "Fokus pendalaman akademik pada Jaringan Komputer, Keamanan Jaringan, Sistem Operasi, Sistem Basis Data, PBO, dan Struktur Data & Algoritma.",
      "Mengembangkan proyek mandiri berbasis web dan sistem desktop terdistribusi sepanjang masa studi.",
    ],
    tags: ["Informatika", "Jaringan Komputer", "Sistem Operasi", "Basis Data", "PBO"],
  },
  {
    id: "ptik-intern",
    role: "Field Network & IT Support Intern",
    institution: "PTIK — Universitas Pancasila",
    location: "Jakarta Selatan, Indonesia",
    period: "Desember 2022 — Maret 2023",
    type: "work",
    highlights: [
      "Melakukan penarikan dan terminasi kabel fiber optic indoor maupun outdoor (aerial routing antar gedung kampus) sesuai standar K3.",
      "Melakukan core splicing kabel optik menggunakan fusion splicer dan memverifikasi konektivitas menggunakan Optical Power Meter (OPM) & Visual Fault Locator (VFL).",
      "Membuat dan meng-crimping kabel UTP kustom (straight-through dan crossover) dengan konektor RJ45 untuk instalasi LAN laboratorium dan patching perangkat.",
      "Pemeliharaan fisik rutin pada unit server rack, hardware switch, dan enclosure jaringan untuk memastikan ventilasi bersih dari debu.",
      "Menangani deployment sistem operasi Windows, konfigurasi driver perangkat, dan troubleshooting desktop workstation.",
    ],
    tags: ["Fiber Optic", "Fusion Splicing", "UTP RJ45", "Server Rack", "Windows OS Deployment"],
  },
  {
    id: "smk-teknindo",
    role: "SMK Teknik Komputer dan Jaringan (TKJ)",
    institution: "SMK Teknindo Jaya",
    location: "Depok, Jawa Barat, Indonesia",
    period: "2021 — 2024 (Lulus)",
    type: "education",
    highlights: [
      "Pendidikan vokasi mendalam mengenai fondasi arsitektur jaringan, topologi fisik, pengkabelan, dan troubleshooting perangkat keras PC.",
      "Praktikum konfigurasi MikroTik RouterBOARD (Winbox/WebFig), routing statis, DHCP server, dan manajemen bandwidth.",
      "Simulasi topologi jaringan berskala enterprise menggunakan Cisco Packet Tracer.",
    ],
    tags: ["TKJ", "MikroTik", "Winbox", "Cisco Packet Tracer", "Hardware PC"],
  },
];
