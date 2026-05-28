# Hackathon Proposal tahap 2

## Team Composition

- Pembagian nya harus lengkap dan background kenapa orang ini ngambil posisi itu juga harus ada hasi

## Executive Summary

---

Program Makan Bergizi Gratis (MBG) membutuhkan tata kelola vendor yang cepat, transparan, dan akuntabel. Saat ini, proses perizinan, validasi administratif, pemantuan RAB, serta pengawasan kualitas layanan vendor belum sepenuhnya terintegrasi dalam satu sistem digital. Kondisi tersebut berpotensi menimbulkan keterlambatan verifikasi, kesalahan administratif, lemahnya pengawasan lapangan, serta rendahnya visibilitas publik terhadap penggunaan dana dan pelaksanaan program.

Platform yang diusulkan adalah sistem digital terintegrasi untuk perizinan dan pemantauan vendor MBG secara real-time. Solusi ini menggabungkan Portal Vendor, Dashboard Pengawasan Pemerintah, Dashboard Transparansi Publik, analitik AI berbasis NLP, serta verifikasi dokumen berbasis blockchain. Melalui platform ini, vendor dapat menyampaikan laporan aktivitas dan data operasional secara terstruktur; pemerintah dapat memantau kepatuhan, performa, anggaran, dan kualitas layanan vendor; sedangkan publik memperoleh akses terbatas terhadap informasi kinerja dan alokasi anggaran yang relevan tanpa membuka data sensitif.

Solusi ini dirancang untuk mempercepat layanan publik, memperkuat akuntabilitas penggunaan anggaran, meningkatkan efektivitas pengawasan vendor, serta membangun kepercayaan masyarakat terhadap pelaksanaan program MBG.

## Problem Statement

---

Pengelolaan vendor dalam Program Makan Bergizi Gratis belum sepenuhnya terintegrasi dalam sistem digital terpusat yang mampu mendukung proses perizinan, validasi data administratif, pemantauan anggaran, dan pengawasan kualitas layanan secara real-time. Data vendor, laporan aktivitas, RAB, komposisi gizi, dan aduan publik masih berpotensi tersebar sehingga proses verifikasi menjadi lambat, pengawasan bersifat pasif, serta deteksi dini terhadap penyimpangan sulit dilakukan.

Masalah ini berdampak pada lambatnya perizinan vendor, meningkatnya risiko kesalahan administratif, terbatasnya pemantauan kualitas makanan, lemahnya akuntabilitas penggunaan dana publik, dan  rendahnya kepercayaan masyarakat terhadap pelaksanaan program prioritas nasional.

## Primary Sub-Problem Statement

---

Digitalisasi layanan publik dan pengawasan vendor MBG melalui platform perizinan, pelaporan, pemantauan anggaran, pemantauan kepatuhan standar gizi, serta transparansi publik berbasis data real-time.

## Problem-Solution Mapping

| **Masalah Utama** | **Dampak** | **Solusi yang Diusulkan** |
| --- | --- | --- |
| Proses perizinan vendor MBG belum terintegrasi | Verifikasi lambat dan rawan kesalahan administratif | Portal Vendor dengan registrasi digital, autentikasi, validasi data, dan status perizinan terpusat |
| Data vendor, RAB, dan laporan aktivitas tersebar | Pemerintah sulit memantau pelaksanaan MBG secara menyeluruh | Dashboard Pemerintah untuk memantau vendor, alokasi anggaran, kapasitas dapur, kualitas menu, dan laporan harian |
| Pengawasan publik masih terbatas | Kepercayaan masyarakat terhadap program melemah | Dashboard Transparansi Publik dengan informasi kinerja vendor dan alokasi anggaran secara terbatas |
| Aduan publik sulit dianalisis secara sistematis | Potensi pelanggaran terlambat terdeteksi | Modul NLP untuk analisis sentimen, klasifikasi aduan, tren isu, dan deteksi pola buzzer |
| Dokumen laporan berisiko dimanipulasi | Integritas administrasi dan audit melemah | Hashing dokumen PDF berbasis blockchain untuk verifikasi keaslian laporan |

## Ecosystem Alignment

---

Solusi ini selaras dengan tema percepatan layanan publik, ekonomi kreatif, dan ekspor jasa digital, khususnya pada sub-tema digitalisasi layanan publik. Platform ini mendukung percepatan proses perizinan vendor, memperkuat pengawasan pelaksanaan program MBG, dan meningkatkan akuntabilitas pengelolaan dana publik.

Dalam ekosistem MBG, solusi ini menghubungkan beberapa aktor utama:

1. Vendor/dapur MBG sebagai pelaksana layanan dan pengirim laporan operasional.
2. Badan Gizi Nasional dan pemerintah daerah sebagai pengelola, pengawas dan evaluator program.
3. Publik dan penerima manfaat sebagai pihak yang memperoleh informasi terbatas dan dapat memberikan umpan balik.
4. Auditor atau instansi pengawasan sebagai pihak yang membutuhkan dokumen dan data terverifikasi
5. Mitra teknologi dan regulator sebgai pendukung standardisasi, keamanan data, dan skalabilitas sistem

## **Solution Approach & Mechanism**

---

Solusi bekerja melalui alur input, proses, dan output.

Input:

- Data registrasi vendor melalui SSO dan geolokasi.
- Data profil vendor, kapasitas dapur, dan cakupan layanan.
- Laporan harian vendor terkait menu, komposisi gizi, RAB, dan pelaksanaan distribusi.
- Aduan, komentar, dan umpan balik publik.
- Dokumen laporan PDF yang membutuhkan verifikasi integritas.

Proses:

- Data masuk melalui security and validation gate.
- Sistem melakukan autentikasi, validasi data, dan pembatasan akses berdasarkan peran pengguna.
- Data disimpan dan disinkronkan secara real-time menggunakan Firebase/Cloud Firestore.
- Modul NLP memproses aduan publik untuk analisis sentimen, klasifikasi isu, deteksi tren, dan indikasi buzzer.
- Dokumen laporan diproses menggunakan hashing dan dicatat pada blockchain untuk menjaga integritas.
- Data operasional diolah menjadi metrik kinerja, visualisasi, leaderboard, dan laporan audit.

Output:

- Dashboard pengawasan pemerintah.
- Dashboard transparansi publik.
- Leaderboard kinerja vendor.
- Visualisasi tren aduan dan sentimen publik.
- Laporan PDF terverifikasi.
- Status kepatuhan vendor terhadap standar administrasi, anggaran, dan kualitas layanan.

## **Impact Scale & Targets**

---

Dampak yang ditargetkan mencakup skala operasional, tata kelola, dan kepercayaan publik.

Target jangka pendek:

- Mempercepat proses verifikasi dan perizinan vendor.
- Mengurangi kesalahan administratif pada data vendor dan laporan harian.
- Menyediakan visibilitas real-time atas status vendor, RAB, kapasitas dapur, dan komposisi menu.
- Menyediakan akses publik terbatas terhadap informasi kinerja vendor dan alokasi anggaran.
- Memungkinkan pemerintah merespons aduan publik secara lebih cepat dan berbasis data.

## **Impact Measurement**

---

Pengukuran dampak dilakukan melalui indikator kuantitatif dan kualitatif.

KPI utama:

1. Penurunan waktu rata-rata verifikasi vendor dibandingkan proses manual.
2. Jumlah vendor yang berhasil diregistrasi dan diverifikasi melalui platform.
3. Persentase laporan harian vendor yang masuk tepat waktu.
4. Jumlah anomali RAB, laporan, atau aduan yang terdeteksi sistem.
5. Jumlah dokumen PDF yang berhasil diverifikasi menggunakan hash blockchain.
6. Jumlah aduan publik yang berhasil diklasifikasi berdasarkan sentimen dan kategori isu.
7. Tingkat penggunaan dashboard oleh pemerintah dan pemangku kepentingan.
8. Peningkatan visibilitas publik terhadap status vendor dan ringkasan alokasi anggaran.

Impact Statement:

Pemerintah dan pengelola Program MBG sangat membutuhkan cara untuk memantau vendor secara cepat, transparan, dan berbasis data karena proses perizinan, pelaporan, dan pengawasan yang belum terintegrasi menyebabkan keterlambatan verifikasi, lemahnya akuntabilitas, dan rendahnya visibilitas publik. Melalui solusi ini, metrik keberhasilan utama kami adalah peningkatan kecepatan verifikasi, konsistensi pelaporan vendor, dan deteksi dini anomali, yang pada akhirnya menciptakan dampak berupa tata kelola MBG yang lebih akuntabel, efisien, dan dipercaya publik.

## **System & Public Value Proposition**

---

Platform ini memberikan nilai bagi dua kelompok utama: pemangku kepentingan internal pemerintah dan publik.

Nilai bagi pemerintah:

- Mempercepat proses perizinan dan verifikasi vendor.
- Menyediakan data operasional vendor secara terpusat.
- Memudahkan pemantauan alokasi anggaran, kapasitas dapur, menu, dan standar gizi.
- Membantu deteksi dini terhadap potensi penyimpangan atau ketidaksesuaian laporan.
- Menyediakan laporan terverifikasi untuk kebutuhan audit dan evaluasi.

Nilai bagi vendor:

- Mempermudah proses registrasi, pelaporan, dan pemenuhan kewajiban administratif.
- Menyediakan alur kerja digital yang lebih jelas dan terdokumentasi.
- Mengurangi risiko kesalahan penginputan dan keterlambatan pelaporan.

Nilai bagi publik:

- Memberikan akses informasi terbatas mengenai kinerja vendor dan penggunaan anggaran.
- Memungkinkan masyarakat menyampaikan aduan atau umpan balik.
- Meningkatkan transparansi dan kepercayaan terhadap program MBG.

## **Solution Originality**

---

Keunikan solusi ini terletak pada integrasi perizinan, pemantauan vendor, transparansi publik, analitik AI, dan keamanan dokumen dalam satu platform. Solusi yang sudah tersedia umumnya berfokus pada administrasi internal dan belum menyediakan akses publik terbatas yang dapat memperkuat pengawasan partisipatif.

Solusi ini tidak hanya mendigitalisasi proses birokrasi, tetapi juga mengubah pola pengawasan dari pasif dan reaktif menjadi aktif, real-time, dan berbasis data. Partisipasi publik diperkuat melalui kanal aduan dan pemantauan terbatas, sementara pemerintah tetap memiliki kontrol atas data sensitif

## **Technological / Method Innovation**

---

Inovasi teknologi yang digunakan meliputi:

1. React.js untuk frontend
Digunakan untuk membangun antarmuka web modular, responsif, dan mudah digunakan.
2. Firebase dan Cloud Firestore untuk backend serverless
Digunakan untuk autentikasi, penyimpanan data, sinkronisasi real-time, serta skalabilitas otomatis.
3. Python/NLP untuk analitik AI
Digunakan untuk analisis sentimen publik, klasifikasi aduan, identifikasi tren isu, dan deteksi pola buzzer.
4. Blockchain-based PDF verification
Digunakan untuk mencatat hash dokumen laporan sehingga keaslian dokumen dapat diverifikasi dan manipulasi pasca-penerbitan dapat dideteksi.
5. Geolocation-based reporting
Digunakan untuk mendukung validasi lokasi vendor dan laporan aktivitas lapangan.

## **Creativity in Implementation**

---

Kreativitas implementasi terlihat pada kombinasi dashboard pemerintah, dashboard publik, leaderboard vendor, visualisasi word cloud, analisis sentimen, dan verifikasi dokumen berbasis blockchain. Platform tidak hanya menampilkan data administratif, tetapi juga menerjemahkan laporan dan aduan publik menjadi insight yang dapat ditindaklanjuti.

Fitur leaderboard mendorong vendor untuk menjaga konsistensi performa, sedangkan dashboard publik menciptakan mekanisme pengawasan partisipatif tanpa membuka data sensitif. Verifikasi PDF melalui hashing blockchain memperkuat kepercayaan terhadap dokumen laporan, terutama dalam konteks audit dan evaluasi program berskala nasional.

## **System Architecture**

---

Arsitektur sistem terdiri dari beberapa lapisan utama:

1. User Layer
    - Vendor MBG
    - Pemerintah/Badan Gizi Nasional/Pemda
    - Publik
    - Auditor atau instansi pengawasan
2. Application Layer
    - Portal Vendor
    - Dashboard Pengawasan Pemerintah
    - Dashboard Transparansi Publik
    - Modul Aduan dan Umpan Balik
    - Modul Laporan PDF
3. Backend Layer
    - Firebase Authentication
    - Cloud Firestore
    - Firebase Security Rules
    - API service untuk validasi dan sinkronisasi data
4. AI Analytics Layer
    - NLP sentiment analysis
    - Deteksi buzzer
    - Klasifikasi aduan
    - Word cloud dan tren isu
    - Agregasi performa vendor
5. Security & Verification Layer
    - OAuth authentication
    - Role-based access control
    - Hashing dokumen PDF
    - Blockchain ledger verification
    - Validasi integritas laporan
6. Output Layer
    - Status vendor
    - Dashboard monitoring
    - Leaderboard vendor
    - Laporan terverifikasi
    - Visualisasi anggaran, gizi, dan aduan publik

## **Data & Feasibility**

---

Data utama yang digunakan meliputi:

1. Data registrasi entitas
    - Identitas vendor
    - Email
    - Metadata profil
    - Geolokasi GPS
    - Status verifikasi
2. Data laporan vendor
    - Kapasitas dapur
    - Menu harian
    - Komposisi gizi
    - RAB
    - Laporan pelaksanaan distribusi
3. Data umpan balik publik
    - Aduan
    - Komentar
    - Sentimen
    - Tag regional
    - Status validasi laporan publik
4. Data dokumen
    - PDF laporan harian
    - Hash dokumen
    - Metadata waktu penerbitan
    - Status verifikasi blockchain

Kelayakan implementasi dinilai tinggi karena MVP menggunakan teknologi yang relatif cepat dibangun, yaitu React.js untuk frontend, Firebase untuk backend serverless, Python/NLP sebagai microservice analitik, dan hashing blockchain sebagai modul keamanan dokumen. Arsitektur modular memungkinkan pengembangan paralel dalam jangka waktu hackathon.

## **Security & Compliance**

---

Keamanan sistem dirancang melalui beberapa mekanisme:

1. Autentikasi pengguna
    - Menggunakan Firebase Authentication dan OAuth untuk mengelola akses pengguna.
2. Pembatasan akses
    - Role-based access control membedakan hak akses vendor, pemerintah, publik, dan auditor.
3. Perlindungan data sensitif
    - Data internal seperti detail vendor, data administratif lengkap, dan dokumen audit tidak dibuka sepenuhnya kepada publik.
4. Firebase Security Rules
    - Digunakan untuk mengatur izin baca dan tulis berdasarkan peran pengguna.
5. Verifikasi dokumen
    - PDF laporan di-hash dan hash dicatat ke blockchain untuk mendeteksi perubahan dokumen.
6. Keamanan geolokasi
    - Data lokasi hanya dikumpulkan melalui otorisasi pengguna dan digunakan untuk validasi pelaporan.
7. Kepatuhan data
    - Platform dirancang dengan prinsip minimisasi data, transparansi akses, dan pemisahan data publik dengan data sensitif.

## **Implementation Readiness (MVP)**

---

Status inovasi saat ini berada pada tahap High-Fidelity Mockup/Prototype. Fokus MVP adalah membuktikan alur utama sistem yang mencakup Portal Vendor dan Dashboard Transparansi Publik sebelum integrasi backend penuh.

Fitur MVP:

1. Registrasi dan autentikasi vendor.
2. Input laporan harian vendor.
3. Dashboard pemerintah untuk melihat status vendor, laporan, RAB, dan indikator kinerja.
4. Dashboard publik untuk melihat ringkasan informasi vendor dan alokasi anggaran terbatas.
5. Modul analisis sentimen sederhana untuk aduan publik.
6. Leaderboard vendor berdasarkan indikator performa.
7. Modul hashing PDF untuk verifikasi laporan.

Tahapan implementasi:

1. Inisialisasi backend Firebase dan struktur database.
2. Implementasi frontend menggunakan React.js.
3. Integrasi autentikasi dan role-based access.
4. Pengembangan dashboard monitoring dan dashboard publik.
5. Integrasi NLP untuk analisis sentimen dan deteksi pola aduan.
6. Implementasi hashing dokumen PDF.
7. Simulasi end-to-end dari input vendor hingga laporan terverifikasi.
8. Deployment menggunakan hosting serverless.

## **Value Proposition**

---

Solusi ini menawarkan platform pengelolaan vendor MBG yang mempercepat perizinan, memperkuat pemantauan, meningkatkan transparansi, dan menjaga integritas dokumen melalui teknologi digital.

Value proposition utama:

- Bagi pemerintah, platform ini menyediakan pengawasan vendor berbasis data real-time.
- Bagi vendor, platform ini menyederhanakan proses registrasi dan pelaporan.
- Bagi publik, platform ini menyediakan akses informasi yang relevan untuk meningkatkan kepercayaan terhadap program MBG.
- Bagi auditor, platform ini menyediakan laporan yang dapat diverifikasi keasliannya.

Dengan demikian, solusi ini menjawab kebutuhan utama ekosistem MBG: percepatan layanan, akuntabilitas anggaran, kualitas layanan, dan transparansi publik.

## **Model Revenue / Funding**

---

Model bisnis yang digunakan adalah B2G dan SaaS licensing.

Sumber pendapatan utama:

1. Lisensi dashboard analitik kepada pemerintah daerah atau instansi pusat
    
    Pemerintah membayar biaya penggunaan platform sebagai sistem pemantauan vendor MBG.
    
2. Subscription/SaaS untuk pengelolaan multiwilayah
    
    Biaya berlangganan berdasarkan jumlah wilayah, vendor, atau kapasitas data yang dikelola.
    
3. Layanan implementasi dan integrasi
    
    Pendapatan dari konfigurasi sistem, pelatihan pengguna, migrasi data, dan integrasi dengan sistem pemerintah yang sudah ada.
    
4. Layanan audit dan verifikasi dokumen
    
    Modul verifikasi dokumen dapat ditawarkan sebagai fitur tambahan untuk kebutuhan audit dan compliance.
    
5. Hibah dan program inkubasi tahap awal
    
    Pada fase awal, pengembangan dapat didukung melalui hibah, kompetisi, atau program inkubasi sebelum masuk ke model lisensi komersial.
    

## **Cost Structure & Sustainability**

---

Struktur biaya utama:

1. Biaya pengembangan frontend dan backend.
2. Biaya cloud hosting dan penggunaan Firebase.
3. Biaya pengembangan dan pemeliharaan modul NLP.
4. Biaya integrasi blockchain atau ledger verifikasi.
5. Biaya keamanan, audit sistem, dan pengujian.
6. Biaya desain UI/UX dan pengujian pengguna.
7. Biaya pelatihan vendor dan instansi pengguna.
8. Biaya dukungan teknis dan operasional

Keberlanjutan:

Sustainability dicapai melalui model SaaS/B2G yang memungkinkan platform digunakan berulang oleh pemerintah daerah atau instansi pusat. Penggunaan infrastruktur serverless membantu menekan biaya operasional awal, sedangkan arsitektur modular memungkinkan fitur dikembangkan bertahap sesuai kebutuhan. Nilai efisiensi yang ditawarkan berupa pengurangan kesalahan administratif, percepatan verifikasi, dan peningkatan efektivitas pengawasan menjadi dasar kelayakan finansial jangka panjang.

## **Scalability**

---

Platform dirancang untuk dapat diskalakan dari pilot kecil ke tingkat nasional. Firebase dan Cloud Firestore mendukung auto-scaling sehingga sistem dapat menangani peningkatan jumlah vendor, laporan, pengguna dashboard, dan aduan publik.

Skalabilitas dilakukan melalui:

1. Arsitektur modular antara frontend, backend, AI analytics, dan blockchain verification.
2. Struktur database NoSQL yang fleksibel untuk multiwilayah.
3. Role-based access untuk mengakomodasi banyak jenis pengguna.
4. Dashboard yang dapat dikonfigurasi berdasarkan daerah, instansi, atau cakupan vendor.
5. Modul NLP yang dapat ditingkatkan secara bertahap dari rule-based sederhana ke model klasifikasi yang lebih akurat.
6. Infrastruktur serverless yang mengurangi kebutuhan manajemen server manual.

## **Partnership & Distribution**

---

Mitra potensial:

1. Badan Gizi Nasional.
2. Pemerintah daerah.
3. Dinas kesehatan.
4. Dinas pendidikan.
5. Instansi pengawasan dan auditor.
6. Vendor/dapur MBG.
7. Bank Indonesia atau mitra ekosistem inovasi digital.
8. Penyedia cloud dan keamanan data.
9. Komunitas teknologi dan lembaga riset.

Strategi distribusi:

1. Pilot project pada satu wilayah atau kelompok vendor terbatas.
2. Validasi manfaat melalui pengukuran waktu verifikasi, kelengkapan laporan, dan efektivitas monitoring.
3. Presentasi hasil pilot kepada pemerintah daerah atau instansi pusat.
4. Integrasi bertahap ke wilayah lain.
5. Pengajuan sebagai solusi digital pendukung tata kelola MBG.
6. Potensi masuk ke kanal pengadaan pemerintah atau kerja sama B2G.

## **Problem–Market Fit**

---

Problem-market fit terlihat dari kebutuhan nyata pemerintah untuk mengelola vendor MBG secara transparan, cepat, dan akuntabel. Program MBG memiliki cakupan nasional dan melibatkan banyak vendor, sehingga proses perizinan, pelaporan, pemantauan kualitas, dan penggunaan anggaran membutuhkan sistem digital yang dapat bekerja secara real-time.

Solusi ini relevan karena menjawab masalah yang langsung dialami oleh beberapa aktor: vendor membutuhkan proses administrasi yang lebih mudah, pemerintah membutuhkan sistem monitoring yang terpusat, publik membutuhkan transparansi, dan auditor membutuhkan dokumen yang dapat diverifikasi.

Kebutuhan pasar utama berada pada sektor layanan publik, tata kelola program sosial, pengawasan anggaran, dan digitalisasi pemerintahan.

## **Evidence of Demand**

---

Bukti kebutuhan terhadap solusi ini didasarkan pada beberapa indikasi:

1. Program MBG membutuhkan pengelolaan vendor dalam jumlah besar dan tersebar lintas wilayah.
2. Proposal pertama mencatat adanya isu transparansi, distribusi, koordinasi, dan pemantauan sumber daya dalam pelaksanaan MBG.
3. Sentimen negatif publik terhadap implementasi MBG menunjukkan kebutuhan atas visibilitas penggunaan dana dan distribusi makanan.
4. Pemerintah dan badan pengelola membutuhkan alat monitoring real-time agar pengawasan tidak hanya bersifat pasif.
5. Tanpa platform pelacakan digital, pemantauan alokasi sumber daya, kualitas makanan, dan keamanan pangan sulit dilakukan secara efisien.
6. Vendor membutuhkan sistem pelaporan yang lebih sederhana agar kewajiban administratif dapat dilakukan secara konsisten.

## **Target Market**

---

Target pengguna langsung:

1. Vendor/dapur MBG.
2. Admin pemerintah daerah.
3. Badan Gizi Nasional.
4. Tim pengawas program MBG.
5. Auditor dan instansi pengawasan.
6. Publik sebagai pengguna dashboard transparansi dan kanal aduan.

Target pembeli/payer:

1. Pemerintah pusat.
2. Pemerintah daerah.
3. Instansi pengelola program MBG.
4. Lembaga pengawasan atau audit yang membutuhkan sistem verifikasi dokumen.
5. Mitra implementasi program sosial berskala besar.

Segmen awal pilot:

- Satu wilayah pemerintah daerah dengan sejumlah vendor MBG terdaftar.
- Vendor yang sudah memiliki kebutuhan pelaporan rutin.
- Instansi pengawas yang membutuhkan dashboard monitoring dasar.

## **Adoption Readiness**

---

Kesiapan adopsi dinilai cukup tinggi karena solusi sudah berada pada tahap high-fidelity mockup/prototype dan menggunakan teknologi yang siap diimplementasikan. MVP dapat dimulai dengan fitur inti tanpa menunggu seluruh modul lanjutan selesai.

Faktor pendukung adopsi:

1. Antarmuka sederhana untuk vendor dengan literasi digital beragam.
2. Backend serverless yang mempercepat deployment.
3. Dashboard yang langsung menjawab kebutuhan pengawasan pemerintah.
4. Akses publik terbatas yang dapat meningkatkan kepercayaan masyarakat.
5. Modul verifikasi dokumen yang relevan untuk kebutuhan audit.
6. Pengembangan bertahap yang memungkinkan pilot skala kecil sebelum ekspansi.

Hambatan yang perlu diantisipasi:

1. Validasi data resmi vendor.
2. Integrasi dengan sistem pemerintah yang sudah ada.
3. Standarisasi format laporan antarwilayah.
4. Kesiapan vendor dalam mengadopsi pelaporan digital.
5. Kebijakan akses data publik dan perlindungan data sensitif.

## **Progress Since the 1st Submission**