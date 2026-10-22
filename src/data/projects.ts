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
      "Aplikasi desktop mandiri untuk manajemen instalasi dan peluncuran game lokal. Dirancang dengan arsitektur hybrid yang memadukan logika native Python (PyWebView/WebView2) dengan antarmuka web responsif, persistensi data lokal menggunakan SQLite Write-Ahead Logging (WAL), serta integrasi antarmuka eksternal Steam dan Discord.",
    highlights: [
      "Jembatan komunikasi antar-proses (IPC) asinkron via window.pywebview.api yang menghubungkan antarmuka grafis ke fungsi native Python tanpa dependensi server HTTP lokal.",
      "Penyimpanan data lokal berbasis SQLite dengan mode WAL untuk efisiensi konkurensi operasi baca dan tulis.",
      "Pipeline distribusi dan pengemasan otomatis menggunakan PyInstaller dan skrip Inno Setup dengan mekanisme pembaruan berkas hotfix berbasis version metadata.",
      "Pengujian fungsional terotomasi menggunakan skrip QA Python untuk memvalidasi pemanggilan fungsi dan penanganan galat.",
    ],
    metrics: [
      { label: "Versi Rilis", value: "v3.1.2" },
      { label: "Modul IPC", value: "112 KB" },
      { label: "Waktu Respons IPC", value: "< 1 ms" },
      { label: "Pengujian Fungsional", value: "100% Pass" },
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
      "Sistem Point of Sale (POS) dan pemesanan mandiri berbasis web yang dirancang untuk mendukung operasional usaha kuliner. Dilengkapi manajemen meja, katalog menu dinamis, pencatatan transaksi kasir, serta rekapitulasi data penjualan.",
    highlights: [
      "Alur pencatatan transaksi kasir dengan kalkulasi subtotal, pajak, dan pencetakan nota pembayaran.",
      "Antarmuka pemesanan responsif yang dapat diakses langsung oleh pelanggan melalui peramban telepon pintar.",
      "Penerapan pola arsitektur MVC pada kerangka kerja Laravel dengan pemisahan service layer dan bundling aset menggunakan Vite.",
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
      "Sistem informasi akademik sekolah berbasis web untuk pengelolaan data guru dan evaluasi pembelajaran siswa. Menerapkan kontrol akses berbasis peran (RBAC) untuk mengelola data siswa, rekapitulasi nilai, jurnal mengajar, dan kurikulum silabus.",
    highlights: [
      "Implementasi Role-Based Access Control (RBAC) berjenjang untuk Administrator, Wali Kelas, dan Guru Mata Pelajaran.",
      "Modul evaluasi akademik dengan penyaringan kelas, semester, serta ekspor laporan nilai.",
      "Antarmuka terstruktur menggunakan Blade template engine dan Tailwind CSS.",
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
      "Aplikasi pemutar media audio dan video interaktif berbasis web dengan panel administrasi mandiri, pengelolaan daftar putar, dan integrasi antarmuka HTML5 Media API.",
    highlights: [
      "Panel administrasi untuk pengelolaan metadata lagu, unggahan berkas, dan pengaturan urutan daftar putar.",
      "Pemutar audio native dengan kontrol pemutaran kustom, progress scrubber, dan visualisasi status pemutaran.",
      "Arsitektur client-side yang di-deploy dan dijalankan secara statis melalui GitHub Pages.",
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
      "Perkakas utilitas pemeliharaan sistem operasi Windows berbasis Python. Mengotomasi proses identifikasi dan pembersihan direktori temporer sistem, verifikasi berkas sementara aplikasi, serta diagnosa kapasitas penyimpanan dengan elevasi hak akses administrator (UAC).",
    highlights: [
      "Eksekusi pembersihan sistem dengan hak akses administrator melalui mekanisme User Account Control (UAC).",
      "Antarmuka grafis native dengan indikator proses dan kalkulasi estimasi ruang penyimpanan yang dibebaskan.",
      "Proses kompilasi biner mandiri menggunakan skrip build otomatis dan PyInstaller.",
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
      "Perancangan dan simulasi topologi jaringan komputer hierarkis multi-departemen. Mengimplementasikan segmentasi lalu lintas data melalui Virtual LAN (VLAN), perutean antar-VLAN, distribusi alamat IP melalui DHCP relay, serta Access Control List (ACL) untuk pembatasan akses antar-subnet.",
    highlights: [
      "Konfigurasi perangkat keras router MikroTik RouterBOARD secara langsung melalui Winbox dan WebFig.",
      "Simulasi topologi enterprise pada Cisco Packet Tracer dengan redundansi tautan dan konfigurasi gateway default.",
      "Verifikasi konektivitas end-to-end, analisis jalur transmisi paket (ping dan traceroute), serta pencegahan broadcast storm.",
    ],
    techStack: ["MikroTik RouterOS", "Winbox", "Cisco Packet Tracer", "TCP/IP", "VLAN", "ACLs", "Subnetting"],
    repoUrl: "https://github.com/mhmdaryaqadi",
  },
];
