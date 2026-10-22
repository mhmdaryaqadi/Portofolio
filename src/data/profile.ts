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
    label: "OPEN FOR WORK",
  },
  bio: "Fullstack & Systems Developer dengan fondasi ganda yang solid di bidang infrastruktur jaringan fisik (TKJ & PTIK) dan rekayasa software modern. Berpengalaman membangun aplikasi desktop hybrid berperforma tinggi, otomasi packaging, hingga platform web fullstack.",
  extendedBio:
    "Perjalanan rekayasa saya berakar dari pemahaman mendalam tentang kabel UTP, terminasi fiber optic, switch, dan routing MikroTik di bangku SMK TKJ serta magang di PTIK Universitas Pancasila. Fondasi ini diperluas secara akademis di S1 Teknik Informatika Universitas Pancasila dan dibuktikan melalui karya software nyata: dari arsitektur desktop hybrid GameZone (v3.1.2) ber-IPC tanpa overhead, hingga sistem web Laravel & Next.js yang scalable.",
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
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "FLAGSHIP: GAMEZONE", href: "#flagship" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];
