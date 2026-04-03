# Business Model Canvas Template

<aside>
<img src="https://www.notion.so/icons/groups_green.svg" alt="https://www.notion.so/icons/groups_green.svg" width="40px" />

**Customer Segments (Siapa pengguna kita)** 

- **Pemerintah/BGN & Pemda**: operator program, pemberi izin, auditor, pengambil keputusan.
- **Vendor/Dapur SPPG/MBG**: pihak yang mendaftar, melapor operasional, dan diawasi.
- **Penerima manfaat & institusi**: sekolah, puskesmas, dan penerima manfaat (siswa, ibu hamil, masyarakat prasejahtera) sebagai sumber feedback kualitas layanan.
- **Publik/masyarakat**: pemantau transparansi dan akuntabilitas berbasis informasi yang dibuka.
</aside>

<aside>
<img src="https://www.notion.so/icons/atm_green.svg" alt="https://www.notion.so/icons/atm_green.svg" width="40px" />

**Value Propositions (Mengapa mereka butuh kita)**

- **Pemerintah/BGN & Pemda**: perizinan vendor lebih cepat, data terpusat, monitoring real-time RAB dan pelaksanaan, early warning (aduan/sentimen), dan audit trail yang rapi.
- **Vendor/Dapur**: proses registrasi dan verifikasi lebih jelas dan terstandar, pelaporan lebih mudah, mengurangi bolak-balik administrasi, meningkatkan kredibilitas vendor.
- **Penerima manfaat & institusi**: kanal aduan/penilaian yang jelas, respon lebih cepat, kualitas dan keamanan pangan lebih terjaga.
- **Publik/masyarakat**: transparansi ringkas (tanpa data sensitif) untuk membangun kepercayaan dan mendorong pengawasan partisipatif.
</aside>

<aside>
<img src="https://www.notion.so/icons/connecting-flight_green.svg" alt="https://www.notion.so/icons/connecting-flight_green.svg" width="40px" />

**Channels (Bagaimana cara kita menjangkau mereka)**

- Portal web untuk **BGN/Pemda** (dashboard monitoring & verifikasi).
- Portal web / web app untuk **vendor** (registrasi, unggah dokumen, laporan aktivitas, kuitansi).
- Halaman publik (read-only) untuk ringkasan performa dan transparansi terpilih.
- Integrasi sosialisasi: webinar, pelatihan operator daerah, onboarding vendor (panduan + video).
- Kanal pengaduan: form/fitur laporan di portal, serta opsi integrasi WhatsApp/email (opsional untuk tahap lanjut).
</aside>

<aside>
<img src="https://www.notion.so/icons/light-bulb_blue.svg" alt="https://www.notion.so/icons/light-bulb_blue.svg" width="40px" />

**Key Activities (Apa kegiatan utama operasional kita)**

- Mendesain dan menjalankan alur **registrasi–verifikasi–perizinan** vendor.
- Pengumpulan & validasi dokumen (legalitas, kuitansi, RAB) + pencatatan audit trail.
- Monitoring pelaksanaan: laporan aktivitas vendor, dashboard, indikator kepatuhan.
- Moderasi dan klasifikasi aduan publik (NLP) + tindak lanjut/eskalasi.
- Pengembangan & pemeliharaan platform (UI/UX, keamanan, data governance).
- Pelatihan pengguna (admin pusat, operator daerah, vendor).
</aside>

<aside>
<img src="https://www.notion.so/icons/meeting_blue.svg" alt="https://www.notion.so/icons/meeting_blue.svg" width="40px" />

**Customer Relationships (Bagaimana cara kita menjaga hubungan)**

- Akun berbasis peran (BGN/Pemda/Vendor/Publik) dengan panduan onboarding.
- Helpdesk dan SLA dukungan (ticketing/email) untuk operator dan vendor.
- Knowledge base (juknis, SOP, FAQ) di dalam aplikasi.
- Review berkala: laporan bulanan untuk pemangku kepentingan + perbaikan fitur.
- Mekanisme feedback in-app dari vendor dan operator.
</aside>

<aside>
<img src="https://www.notion.so/icons/chart-line_blue.svg" alt="https://www.notion.so/icons/chart-line_blue.svg" width="40px" />

**Revenue Streams (Darimana kita menghasilkan uang)**

- **B2G**: kontrak pengadaan / langganan SaaS (annual) dari BGN/Pemda untuk penggunaan platform.
- Biaya implementasi awal (setup, migrasi data, konfigurasi role, pelatihan).
- Add-on: modul audit lanjutan, analitik, integrasi (SSO, WhatsApp/email gateway), dan hosting dedicated.
- (Opsional) Hibah/innovation grant untuk fase pilot dan evaluasi.
</aside>

<aside>
<img src="https://www.notion.so/icons/key_yellow.svg" alt="https://www.notion.so/icons/key_yellow.svg" width="40px" />

**Key Resources (Aset terpenting yang kita butuhkan)**

- Tim produk: PM, UI/UX, backend, frontend, data/ML, security.
- Infrastruktur: hosting, database, auth, storage dokumen (off-chain) + IPFS/hash (opsional).
- Dataset dan standar: Tabel Komposisi Pangan, juknis/SOP BGN, standar keamanan pangan.
- Kemitraan & akses data: akses proses bisnis BGN/Pemda, definisi indikator kinerja.
- Operasional support: helpdesk, materi pelatihan.
</aside>

<aside>
<img src="https://www.notion.so/icons/tabs-user_yellow.svg" alt="https://www.notion.so/icons/tabs-user_yellow.svg" width="40px" />

**Key Partnerships (Siapa mitra strategis kita)**

- **BGN** dan **Pemda** (owner proses, regulasi, operasional pengawasan).
- Penyedia infrastruktur cloud (mis. Firebase/GCP) untuk hosting, auth, dan storage.
- Penyedia verifikasi/identitas dan legalitas (mis. integrasi NIB/NIK bila tersedia via API resmi).
- Komunitas/relawan/pengawas lapangan untuk validasi dan verifikasi lapangan.
- (Jika blockchain dipakai) penyedia infra web3 (L2, IPFS/pinning) dan auditor smart contract.
</aside>

<aside>
<img src="https://www.notion.so/icons/construction-crane_yellow.svg" alt="https://www.notion.so/icons/construction-crane_yellow.svg" width="40px" />

**Cost Structure (Kemana uang akan dihabiskan)**

- Biaya pengembangan produk: gaji tim, QA, desain, manajemen proyek.
- Infrastruktur: hosting, database, storage dokumen, monitoring, keamanan.
- Biaya implementasi: pelatihan, support, dokumentasi, deployment per daerah.
- Biaya kepatuhan: audit keamanan, kepatuhan PDP, legal.
- (Opsional) biaya web3: audit smart contract, node/provider, pinning IPFS.
</aside>

<aside>
💡

**Catatan cepat**: Kalau kamu mau, kita bisa pilih satu model: (1) fokus *MVP Web2* dulu (registrasi + dashboard + aduan), lalu (2) blockchain jadi fase 2 untuk audit trail transaksi.

</aside>