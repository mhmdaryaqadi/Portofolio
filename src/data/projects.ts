import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "gamezone",
    title: "GameZone Platform & Distribution Engine",
    category: "HYBRID DESKTOP & DISTRIBUTION ENGINE",
    status: "v3.1.2 STABLE",
    isFlagship: true,
    version: "3.1.2",
    description:
      "Platform desktop gaming hub, fix manager, dan cloud sync engine berkinerja tinggi. Dibangun dengan arsitektur hybrid yang menggabungkan native Python core (PyWebView/WebView2) dengan UI Neo-Brutalism responsif, SQLite WAL store, Steam IPC, serta automated hotfix release pipeline.",
    highlights: [
      "Bi-directional zero-overhead IPC bridge (api.py 112 KB) menghubungkan native OS API langsung ke window.pywebview.api.",
      "Integrasi multi-layanan: Discord OAuth2 session, Firebase, Steam Client IPC, dan SQLite database lokal (mode WAL).",
      "Automated packaging toolchain: Pembuatan delta hotfix zip otomatis via version.json dan Inno Setup / PyInstaller compiler.",
      "In-house automated test suite (qa_runner.py) untuk pengujian visual live-ui dan headless.",
    ],
    metrics: [
      { label: "Stable Release", value: "v3.1.2" },
      { label: "API Bridge", value: "112 KB" },
      { label: "IPC Overhead", value: "0ms" },
      { label: "QA Test Pass", value: "100%" },
    ],
    techStack: [
      "Python",
      "PyWebView (WebView2)",
      "SQLite3 (WAL)",
      "Discord OAuth2",
      "Steam IPC",
      "Vanilla JS/CSS",
      "Inno Setup",
      "PyInstaller",
    ],
    repoUrl: "https://github.com/mhmdaryaqadi/GameZone-Releases",
  },
  {
    id: "warkop-digital",
    title: "Warkop Digital POS & Online Ordering",
    category: "FULLSTACK WEB POINT OF SALE",
    status: "PRODUCTION READY",
    description:
      "Sistem kasir digital dan pemesanan meja mandiri yang dirancang khusus untuk efisiensi operasional F&B. Dilengkapi dengan katalog menu dinamis, manajemen meja, pencatatan transaksi real-time, dan analitik penjualan.",
    highlights: [
      "Alur kasir cepat dengan perhitungan subtotal, pajak, dan cetak invoice struk.",
      "Desain responsif mobile-friendly untuk pemesanan langsung dari smartphone pelanggan.",
      "Pemisahan controller dan service layer yang bersih pada Laravel dengan Vite asset bundling.",
    ],
    techStack: ["PHP", "Laravel", "Vite", "Tailwind CSS", "Blade", "MySQL"],
    repoUrl: "https://github.com/mhmdaryaqadi/warkop-digital",
  },
  {
    id: "portal-guru",
    title: "Portal Guru Academic Management",
    category: "ACADEMIC & SCHOOL INFORMATION SYSTEM",
    status: "VERIFIED",
    description:
      "Portal informasi sekolah dan manajemen akademik guru berbasis web. Mengimplementasikan autentikasi berjenjang (RBAC) untuk mengelola data siswa, rekap nilai evaluasi belajar, jurnal mengajar, dan kurikulum silabus.",
    highlights: [
      "Role-Based Access Control (RBAC) granular untuk Admin, Guru Wali Kelas, dan Guru Mata Pelajaran.",
      "Dashboard evaluasi akademik dengan filter kelas, semester, dan ekspor data.",
      "Antarmuka bersih berbasis Blade template engine dan Tailwind CSS teroptimasi.",
    ],
    techStack: ["PHP", "Laravel", "Blade", "Vite", "Tailwind CSS", "MySQL"],
    repoUrl: "https://github.com/mhmdaryaqadi/portal-guru",
  },
  {
    id: "echo-stream",
    title: "Echo Multimedia Streaming Platform",
    category: "WEB MULTIMEDIA & ADMIN DASHBOARD",
    status: "LIVE PAGES",
    description:
      "Aplikasi web pemutar media audio dan video interaktif yang dilengkapi panel kontrol admin mandiri, pengelolaan antrean playlist lagu, dan integrasi HTML5 Media API.",
    highlights: [
      "Custom Admin Dashboard untuk mengunggah, mengedit metadata lagu, dan mengatur video.",
      "Media audio player native dengan custom playback controls, progress scrubber, dan visualizer.",
      "Arsitektur client-side murni yang di-host dan berjalan mulus di GitHub Pages.",
    ],
    techStack: ["JavaScript", "HTML5 Audio/Video API", "CSS3 Animations", "Admin Panel", "GitHub Pages"],
    repoUrl: "https://github.com/mhmdaryaqadi/echo",
  },
  {
    id: "bersihin",
    title: "Bersihin Desktop System Cleaner",
    category: "DESKTOP UTILITY & MAINTENANCE",
    status: "PACKAGED EXE",
    description:
      "Utilitas pemeliharaan dan pembersih sistem operasi Windows berbasis Python dengan hak akses administrator. Mengotomasi pembersihan cache temporer sistem, perbaikan registry dasar, dan diagnosa ruang penyimpanan.",
    highlights: [
      "Eksekusi pembersihan aman dengan UAC elevation (hak admin) dan log transparan.",
      "Antarmuka grafis native yang intuitif dengan progress bar dan kalkulasi ukuran sampah.",
      "Build pipeline mandiri menggunakan script build_exe.py dan PyInstaller.",
    ],
    techStack: ["Python", "Windows API", "PyInstaller", "Desktop GUI", "Admin UAC"],
    repoUrl: "https://github.com/mhmdaryaqadi/Bersihin",
  },
  {
    id: "network-simulation",
    title: "Campus & Enterprise Network Architecture",
    category: "NETWORK INFRASTRUCTURE SIMULATION",
    status: "ACADEMIC LAB",
    description:
      "Perancangan topologi jaringan hierarkis multi-departemen dengan pemisahan lalu lintas data melalui VLAN, Inter-VLAN routing, dynamic DHCP relay, dan Access Control Lists (ACL) untuk isolasi subnet aman.",
    highlights: [
      "Konfigurasi router MikroTik RouterBOARD fisik melalui Winbox dan WebFig.",
      "Simulasi topologi enterprise di Cisco Packet Tracer dengan redundansi jalur dan gateway default.",
      "Pengujian konektivitas end-to-end, diagnosa latensi CLI (ping/traceroute), dan pencegahan broadcast storm.",
    ],
    techStack: ["MikroTik RouterOS", "Winbox", "Cisco Packet Tracer", "TCP/IP", "VLAN", "ACLs", "Subnetting"],
    repoUrl: "https://github.com/mhmdaryaqadi",
  },
];
