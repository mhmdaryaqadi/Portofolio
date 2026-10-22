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
      "Menempuh pendidikan sarjana dengan fokus kurikulum pada Jaringan Komputer, Sistem Operasi, Arsitektur Basis Data, Struktur Data dan Algoritma, serta Pemrograman Berorientasi Objek.",
      "Mengimplementasikan pemahaman teoritis melalui perancangan aplikasi mandiri berbasis sistem desktop hybrid dan sistem informasi berbasis web.",
    ],
    tags: ["Informatika", "Jaringan Komputer", "Sistem Operasi", "Basis Data", "PBO"],
  },
  {
    id: "ptik-intern",
    role: "Praktik Kerja Lapangan — Network & IT Support",
    institution: "PTIK — Universitas Pancasila",
    location: "Jakarta Selatan, Indonesia",
    period: "Desember 2022 — Maret 2023",
    type: "work",
    highlights: [
      "Melaksanakan instalasi dan terminasi kabel serat optik (indoor maupun aerial routing antar-gedung kampus) sesuai prosedur keselamatan kerja.",
      "Melakukan penyambungan inti serat optik (core splicing) menggunakan fusion splicer serta memvalidasi redaman sinyal menggunakan Optical Power Meter (OPM) dan Visual Fault Locator (VFL).",
      "Membuat terminasi kabel jaringan UTP kategori 5e/6 dengan konektor RJ45 (standar T568A/T568B) untuk infrastruktur LAN laboratorium dan patching perangkat aktif.",
      "Melakukan pemeliharaan berkala pada rak server, switch distribusi, dan tata letak perkabelan terstruktur guna menjamin keandalan perangkat.",
      "Melakukan instalasi sistem operasi Windows, konfigurasi driver perangkat keras, serta penanganan kendala teknis pada workstation pengguna.",
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
      "Menempuh pendidikan kejuruan dengan konsentrasi pada perakitan komputer, instalasi jaringan lokal (LAN), dan dasar telekomunikasi data.",
      "Mempraktikkan konfigurasi perangkat jaringan MikroTik RouterBOARD meliputi perutean statis, DHCP server, Network Address Translation (NAT), dan manajemen alokasi bandwidth.",
      "Merancang dan mensimulasikan topologi jaringan berskala lokal hingga korporat menggunakan perangkat lunak Cisco Packet Tracer.",
    ],
    tags: ["TKJ", "MikroTik", "Winbox", "Cisco Packet Tracer", "Hardware PC"],
  },
];
