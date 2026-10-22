import { Profile, NavItem } from "@/types/portfolio";

export const profileData: Profile = {
  name: "Muhammad Arya Alqadi",
  shortName: "Arya Alqadi",
  role: "Fullstack & Systems Developer",
  specialization: "Hybrid Desktop Architecture & IT Infrastructure",
  location: "Depok, Jawa Barat, Indonesia",
  email: "mhmdaryaqadi@gmail.com",
  phone: "+62 898-7316-516",
  whatsappUrl: "https://wa.me/628987316516",
  status: {
    available: true,
    label: "SIAP BERKONTRIBUSI",
  },
  bio: "Mahasiswa S1 Teknik Informatika Universitas Pancasila dengan latar belakang vokasi Teknik Komputer dan Jaringan (TKJ). Berfokus pada rekayasa perangkat lunak sistem, arsitektur desktop hybrid berbasis Python dan WebView2, serta pengembangan aplikasi web terintegrasi.",
  extendedBio:
    "Memulai kompetensi teknis dari pendidikan kejuruan Teknik Komputer dan Jaringan di SMK Teknindo Jaya serta praktik kerja lapangan di Pusat Teknologi Informasi dan Komunikasi (PTIK) Universitas Pancasila. Pengalaman lapangan tersebut mencakup instalasi dan penyambungan kabel serat optik (fusion splicing), penataan kabel terstruktur UTP, serta konfigurasi perangkat jaringan MikroTik RouterOS. Landasan praktis ini diperdalam secara akademis pada jenjang S1 Teknik Informatika di Universitas Pancasila dengan fokus pada algoritma, sistem operasi, basis data, dan arsitektur perangkat lunak terapan.",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mhmdaryaqadi",
      icon: "Github",
      handle: "@mhmdaryaqadi",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhammad-arya-alqadi-47939a387/",
      icon: "Linkedin",
      handle: "Muhammad Arya Alqadi",
    },
    {
      name: "Email",
      url: "mailto:mhmdaryaqadi@gmail.com",
      icon: "Mail",
      handle: "mhmdaryaqadi@gmail.com",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/628987316516",
      icon: "Phone",
      handle: "+62 898-7316-516",
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "TENTANG", href: "#about" },
  { label: "KEAHLIAN", href: "#skills" },
  { label: "PROYEK UTAMA", href: "#flagship" },
  { label: "PROYEK", href: "#projects" },
  { label: "PENGALAMAN", href: "#experience" },
  { label: "KONTAK", href: "#contact" },
];
