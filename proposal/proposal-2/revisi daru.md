# Revisi & Analisis Proposal 2

Berikut adalah analisis dan usulan perbaikan untuk setiap *heading* pada *draft* Proposal 2 berdasarkan materi Design Thinking dan konteks Proposal 1. Bagian yang tidak perlu diubah tidak dicantumkan. Untuk memudahkan perbandingan, bagian yang direvisi disajikan dalam format kolom bersebelahan, dengan bagian yang ditambahkan/diubah dicetak **_miring (italic)_**.

## Team Composition
**Analisis:** Karena di dokumen asli bagian ini hanya berisi instruksi kosong (placeholder), maka usulan perbaikan di bawah ini adalah teks yang sepenuhnya baru. Pembagian peran harus jelas dan mencerminkan kapabilitas teknis yang dibutuhkan oleh solusi (AI, Cloud, Frontend, Blockchain).

| Teks Original | Revisi dari Daru |
| --- | --- |
| - Pembagian nya harus lengkap dan background kenapa orang ini ngambil posisi itu juga harus ada hasi | *Tim Amicorum terdiri dari individu dengan latar belakang Teknologi Informasi yang memiliki spesialisasi komplementer untuk mewujudkan solusi digital yang efisien, aman, dan inovatif:*<br><br>*1. **Daru Okta Buana (Team Leader & AI/NLP Engineer)***<br>   - ***Background:** Keahlian mendalam dalam kecerdasan buatan dan pemrosesan bahasa alami (NLP).*<br>   - ***Peran:** Mengarahkan visi produk serta merancang dan mengimplementasikan modul NLP untuk analisis sentimen aduan publik dan deteksi buzzer.*<br>*2. **Eddy Ryansyah (Backend & Cloud Engineer)***<br>   - ***Background:** Berpengalaman dalam pengembangan arsitektur cloud serverless dan manajemen database.*<br>   - ***Peran:** Membangun arsitektur backend menggunakan Firebase/Cloud Firestore, mengelola Security Rules, serta memastikan sinkronisasi data real-time yang tangguh dan skalabel.*<br>*3. **Muhammad Erlangga Prasetya (Frontend Web Developer)***<br>   - ***Background:** Spesialis dalam pengembangan antarmuka web yang interaktif dan user-friendly.*<br>   - ***Peran:** Mengembangkan Portal Vendor dan Dashboard Transparansi (pemerintah dan publik) menggunakan React.js, memastikan pengalaman pengguna (User Experience) yang optimal.*<br>*4. **Firman Hasibuan (Security & Blockchain Engineer)***<br>   - ***Background:** Fokus pada keamanan siber dan teknologi distributed ledger (blockchain).*<br>   - ***Peran:** Mengimplementasikan keamanan hashing dokumen PDF berbasis blockchain untuk menjamin integritas laporan dari potensi manipulasi pasca-penerbitan.* |

---

## Primary Sub-Problem Statement
**Analisis:** Kalimat aslinya lebih terdengar seperti "solusi" daripada "masalah". Berdasarkan Proposal 1, harus dikembalikan ke esensi masalah dan ditambahkan konteks digitalisasi sesuai fokus hackathon.

| Teks Original | Revisi dari Daru |
| --- | --- |
| Digitalisasi layanan publik dan pengawasan vendor MBG melalui platform perizinan, pelaporan, pemantauan anggaran, pemantauan kepatuhan standar gizi, serta transparansi publik berbasis data real-time. | *_Digitalisasi Layanan Publik & Pariwisata:_* Platform perizinan dan pengawasan vendor MBG melalui *_digitalisasi_* pelaporan, pemantauan anggaran, kepatuhan standar gizi, serta transparansi publik berbasis data real-time. |

---

## Impact Measurement (Bagian Impact Statement)
**Analisis:** Sesuai prinsip *Design Thinking* (SMART Formula), Impact Statement harus mencantumkan metrik yang spesifik, terukur, dan memiliki batas waktu (Measurable & Time-bound).

| Teks Original | Revisi dari Daru |
| --- | --- |
| Pemerintah dan pengelola Program MBG sangat membutuhkan cara untuk memantau vendor secara cepat, transparan, dan berbasis data karena proses perizinan, pelaporan, dan pengawasan yang belum terintegrasi menyebabkan keterlambatan verifikasi, lemahnya akuntabilitas, dan rendahnya visibilitas publik. Melalui solusi ini, metrik keberhasilan utama kami adalah peningkatan kecepatan verifikasi, konsistensi pelaporan vendor, dan deteksi dini anomali, yang pada akhirnya menciptakan dampak berupa tata kelola MBG yang lebih akuntabel, efisien, dan dipercaya publik. | Pemerintah dan pengelola Program MBG sangat membutuhkan cara untuk memantau vendor secara cepat, transparan, dan berbasis data karena proses perizinan, pelaporan, dan pengawasan yang belum terintegrasi menyebabkan keterlambatan verifikasi, lemahnya akuntabilitas, dan rendahnya visibilitas publik. Melalui solusi ini, metrik keberhasilan utama kami adalah peningkatan kecepatan verifikasi *_vendor sebesar 50% dalam 6 bulan pertama_*, *_90%_* konsistensi pelaporan vendor *_harian_*, dan deteksi dini anomali *_dalam kurun waktu kurang dari 24 jam_*, yang pada akhirnya menciptakan dampak berupa tata kelola MBG yang lebih akuntabel, efisien, dan dipercaya publik. |

---

## System Architecture (Bagian AI Analytics Layer)
**Analisis:** Penjelasan fitur AI Analytics sebaiknya langsung dikaitkan dengan *value* atau kegunaannya agar terlihat bagaimana komponen teknis menyelesaikan masalah pengguna (bukan sekadar daftar teknologi).

| Teks Original | Revisi dari Daru |
| --- | --- |
| 4. AI Analytics Layer<br>    - NLP sentiment analysis<br>    - Deteksi buzzer<br>    - Klasifikasi aduan<br>    - Word cloud dan tren isu<br>    - Agregasi performa vendor | 4. AI Analytics Layer<br>    - NLP sentiment analysis<br>    - Deteksi buzzer *_untuk penyaringan aduan palsu_*<br>    - Klasifikasi aduan *_berbasis isu_*<br>    - Word cloud dan tren isu *_regional_*<br>    - Agregasi performa vendor *_untuk Leaderboard_* |

---

## Progress Since the 1st Submission
**Analisis:** Bagian ini sebelumnya masih kosong. Harus diisi dengan pencapaian yang telah dilakukan sejak submisi pertama agar juri melihat *progress* (kemajuan) yang nyata.

| Teks Original | Revisi dari Daru |
| --- | --- |
| *(Kosong)* | *_Sejak pengumpulan proposal pertama, tim kami telah melakukan beberapa progres signifikan, antara lain:_*<br><br>*_1. **Pengembangan High-Fidelity Mockup (Prototype):** Kami telah menyelesaikan desain UI/UX untuk Portal Vendor dan Dashboard Transparansi Publik, memvalidasi alur pelaporan dan visibilitas data._*<br>*_2. **Penajaman Business Model Canvas:** Merumuskan strategi revenue stream yang lebih jelas melalui model B2G (lisensi instansi) dan SaaS subscription untuk skalabilitas multiwilayah._*<br>*_3. **Formulasi Impact Measurement:** Mengadopsi kerangka SMART (Specific, Measurable, Achievable, Relevant, Time-bound) untuk metrik keberhasilan, seperti target peningkatan kecepatan verifikasi dan tingkat konsistensi pelaporan._*<br>*_4. **Detailing System Architecture:** Menjabarkan arsitektur backend secara lebih komprehensif, termasuk integrasi layanan AI (NLP) secara asinkron dan verifikasi blockchain untuk integritas dokumen pelaporan._* |
