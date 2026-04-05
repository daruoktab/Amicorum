# SPPG Monitor
### Platform Terintegrasi Perizinan dan Pengawasan Vendor Makan Bergizi Gratis (MBG)

## Deskripsi
**SPPG Monitor** adalah solusi digital yang dirancang untuk mewujudkan sistem terintegrasi berbasis data dalam pengelolaan perizinan dan pengawasan vendor Program Makan Bergizi Gratis (MBG). Platform ini mengotomatisasi alur perizinan, menyediakan pemantauan *real-time*, serta menjamin transparansi dan akuntabilitas bagi pemerintah maupun masyarakat.

## Masalah yang Diselesaikan
Pengelolaan vendor MBG saat ini masih menghadapi tantangan berupa proses perizinan yang lambat, verifikasi data administratif yang belum terpusat, serta kurangnya transparansi anggaran (RAB) dan kualitas layanan di lapangan. Hal ini berpotensi menyebabkan ketidakpercayaan publik dan inefisiensi program prioritas nasional.

## Fitur Utama
- **Dashboard Dual-Role**: Akses terpisah untuk **Admin/BGN** (Monitoring & Verifikasi) dan **User/Publik** (Transparansi Progres & Detail Kinerja).
- **AI-Powered Sentiment Analysis**: Menggunakan NLP (*Natural Language Processing*) untuk menganalisis opini publik, mendeteksi akun *buzzer*, dan mengklasifikasikan pengaduan secara otomatis berdasarkan tingkat urgensi.
- **Integritas Dokumen via Blockchain**: Memanfaatkan teknologi *hashing* blockchain untuk mengunci integritas laporan PDF vendor, memastikan audit trail yang absolut dan tidak dapat dimanipulasi.
- **Real-time Monitoring**: Visualisasi data alokasi anggaran, komposisi nutrisi harian, dan status operasional vendor dalam satu dasbor terpadu.
- **Verifikasi Geolokasi**: Menjamin validitas laporan lapangan melalui ekstraksi data GPS pada saat registrasi dan pelaporan.

## Teknologi yang Digunakan
- **Frontend**: [React.js](https://reactjs.org/) - Antarmuka interaktif dan modular.
- **Backend & Database**: [Firebase](https://firebase.google.com/) - Cloud Firestore untuk database real-time dan Firebase Auth untuk manajemen otentikasi.
- **AI Engine**: Python (NLP Statistik & ML Classification) - Pemrosesan sentimen dan deteksi anomali laporan.
- **Security**: Blockchain Ledger - Hashing SHA-256 untuk verifikasi keaslian dokumen PDF.

## Struktur Proyek Utama
```text
├── src/
│   ├── components/  # Komponen UI modular (Chart, WordCloud, Navbar)
│   ├── pages/       # Dashboard Vendor, Dashboard Publik, & Landing Page
│   ├── services/    # Integrasi Firebase & Layanan Backend
│   └── utils/       # Fungsi utilitas & algoritma pembantu
├── public/          # Aset statis & Ikon
└── package.json     # Konfigurasi proyek & dependensi
```

## Memulai (Setup Pengembangan)
Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. **Clone Repositori**:
   ```bash
   git clone [link-repo]
   ```
2. **Instalasi Dependensi**:
   ```bash
   npm install
   ```
3. **Menjalankan Server Pengembangan**:
   ```bash
   npm run dev
   ```
4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

---
*Dikembangkan sebagai solusi inovatif untuk mempercepat transformasi digital layanan publik dalam Program Makan Bergizi Gratis (MBG).*
