# Universal Engineering Rules & System Policies

## 1. Lingkungan & Repositori
- **Kebersihan Repositori:** File dependensi, build artifact, cache, dan data temporer tidak boleh tercatat ke riwayat git. Konfigurasi ignore berlaku sebelum berkas dilacak.
- **Konvensi Eksisting:** Pola penamaan, struktur arsitektur, dan format kode yang sudah berjalan di repositori menjadi acuan. Reformat massal di luar lingkup tugas tidak diizinkan.
- **Ketergantungan Dependensi:** Pembaruan versi dependensi hanya dilakukan atas kebutuhan teknis eksplisit, bukan asumsi.

## 2. Kapabilitas & Tooling
- **Prioritas Referensi:** Tool, MCP server, dan panduan skill yang aktif di sesi lingkungan menjadi sumber kapabilitas dan rujukan utama sesuai domain tugas.
- **Sumber Kebenaran:** Status kode lokal, skema aktif, dan riwayat git adalah sumber kebenaran faktual. Riwayat percakapan tidak dijadikan patokan tunggal.

## 3. Komunikasi & Klarifikasi
- **Tingkat Interaksi Proporsional:** Klarifikasi dibatasi hanya untuk ambiguitas arsitektur kritis, skema data berisiko tinggi, atau dampak destruktif. Tugas dengan cakupan jelas dieksekusi tanpa interupsi berlebih.
- **Gaya Komunikasi:** Bahasa Indonesia santai, lugas, jujur, berbasis fakta teknis, tanpa basa-basi artifisial.

## 4. Arsitektur & Modularitas
- **Prinsip Tanggung Jawab Tunggal (SRP):** Pemisahan logika bisnis, data, konfigurasi, dan presentasi. Kode diorganisasi berdasarkan domain/fitur.
- **Ukuran File Fleksibel:** Tidak ada batasan baris kaku. Kelayakan ukuran file ditentukan oleh kohesi isi (file panjang diperbolehkan jika menangani satu domain terpadu).
- **Isolasi Data Sementara:** Mock data atau adapter data transisi diletakkan di layer service terpisah, bukan tertanam langsung di elemen presentasi.

## 5. Standar Output Sistem
- **Antarmuka Grafis / Visual:** Penanganan kondisi antarmuka wajib mencakup state proses (loading), data kosong (empty), penanganan kegagalan (error), dan umpan balik sukses (success). Layout responsif tanpa luapan horizontal.
- **Layanan API / Backend:** Konsistensi struktur respon (status, payload data, kode & pesan kesalahan) dan validasi pada batas input (boundary validation).
- **Skrip & CLI:** Standar kode keluar sistem (exit code `0` untuk sukses, non-zero untuk galat) serta pemisahan kanal output standar dan error.

## 6. Keamanan & Integritas Data
- **Kerahasiaan Sistem:** Kredensial, kunci API, dan token otentikasi tidak boleh berada di dalam source code. File variabel lingkungan lokal terlindungi dari penimpaan.
- **Perlindungan Data Destruktif:** Operasi skema destruktif, penghapusan tabel, pemotongan data massal, atau pembersihan penyimpanan permanen dilarang tanpa persetujuan eksplisit.

## 7. Pengujian & Penanganan Kendala
- **Verifikasi Fungsional:** Setiap penyelesaian pekerjaan disertai verifikasi lokal yang relevan dengan jenis platform.
- **Batas Percobaan Mandiri (Circuit Breaker):** Batas toleransi perbaikan kesalahan secara otomatis maksimal 3 iterasi. Jika akar permasalahan belum terpecahkan, proses berhenti untuk pelaporan kendala dan log terkait.
- **Penanganan Faktor Eksternal:** Kendala akibat ketiadaan kredensial pengguna, kegagalan layanan pihak ketiga, atau masalah lingkungan lokal dilaporkan langsung secara transparan.

## 8. Batasan Rilis & Operasi Git
- **Pembatasan Build Rilis:** Pembuatan biner rilis final produksi, instalasi kemasan tertutup, atau publikasi ke server publik memerlukan instruksi eksplisit.
- **Pemulihan Kode Aman:** Pemulihan perubahan menggunakan mekanisme terarah. Operasi penghapusan riwayat permanen atau pemaksaan push (`--force`) dilarang tanpa izin.
- **Otomasi Git:** Komitmen lokal (`git commit`) otomatis berlaku saat kondisi pengujian berstatus 0 error dengan format Conventional Commits. Pengiriman ke remote (`git push`) otomatis hanya berlaku pada branch pengembangan non-produksi.

---

## 9. Profil Konteks Repositori
- **Nama Projek:** Portfolio Muhammad Arya Alqadi
- **Tipe / Platform:** Modern Web Application (Responsive Desktop & Mobile)
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide React
- **Perintah Jalankan:** npm run dev
- **Perintah Verifikasi / QA:** npm run build / npm run lint
