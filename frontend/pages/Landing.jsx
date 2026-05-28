import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginSignupPopup from '../components/LoginSignupPopup';
import './Landing.css';

function Landing({ role, setRole, onLogout }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <header className="navbar">
        <div className="logo-container">
          <img src="/Logo_Badan_Gizi_Nasional_(2024).png" alt="Logo Badan Gizi Nasional" className="navbar-logo" />
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); role ? navigate(role === 'vendor' ? '/dapur/sppg-jkt-001' : '/dashboard') : setShowPopup(true); }}>Dasbor</a>
          <a href="#umpan-balik" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('umpan-balik')?.scrollIntoView({ behavior: 'smooth' }); }}>Umpan Balik</a>
          <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>FAQ</a>
        </nav>
        <div className="nav-actions">
          {role ? (
            <div className="profile-wrapper">
              <div className="profile-trigger" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                <div className="avatar"></div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              {showProfileMenu && (
                <div className="profile-dropdown">
                  <div className="dropdown-user-info">
                    <div className="avatar-small"></div>
                    <div className="dropdown-user-text">
                      <span className="dropdown-name">Daru Okta Buana</span>
                      <span className="dropdown-email">daruokta@gmail.com</span>
                    </div>
                  </div>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => navigate(role === 'vendor' ? '/dapur/sppg-jkt-001' : '/dashboard')}>Profil Saya</li>
                    <li className="dropdown-item" onClick={() => alert("Fitur pengaturan sedang dalam pengembangan.")}>Pengaturan</li>
                    <li className="dropdown-item text-red" onClick={onLogout}>Keluar</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="btn-primary" onClick={() => setShowPopup(true)}>Masuk / Daftar</button>
          )}
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="hero-heading">Tentang P3MBG</h1>
            <p className="hero-subheading">
              P3MBG (Platform Pengawasan Program Makan Bergizi Gratis) adalah platform digital yang ditujukan kepada pusat pemerintah, vendor, maupun publik untuk mendukung transparansi distribusi anggaran serta makanan bergizi sesuai standar BGN (Badan Gizi Nasional).
            </p>
            <button className="btn-primary" onClick={() => alert("Mengarahkan ke Portal Resmi P3MBG...")}>Portal Resmi</button>
          </div>
          <div className="hero-image-container">
            <img src="/Logo_Badan_Gizi_Nasional_(2024).png" alt="Logo Badan Gizi Nasional" className="hero-image" />
          </div>
        </section>

        <section className="card-container stats-card">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Total Dapur</div>
              <div className="stat-value">25.822</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Total Penerima</div>
              <div className="stat-value">61,6 Juta</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Total Anggaran</div>
              <div className="stat-value">Rp138.908.687.124.526</div>
            </div>
          </div>
          <div className="stats-disclaimer">
            *Data diambil per <b>05 April 2026 pukul 23.59 WIB</b> sebagai bentuk transparansi informasi kepada publik.
          </div>
        </section>

        <section id="faq" className="card-container faq-card">
          <div className="faq-text">
            <h2 className="faq-heading">Pertanyaan Umum Seputar P3MBG</h2>
            <p className="faq-desc">
              Di sini Anda dapat menemukan jawaban atas berbagai pertanyaan umum seputar program dan inisiatif kami dalam meningkatkan gizi masyarakat Indonesia. Untuk pertanyaan lainnya, silakan hubungi kami.
            </p>
            <button className="btn-primary">Lihat Semua FAQ</button>
          </div>
          <div className="faq-accordion">
            <div className="faq-item">
              <div className="faq-question" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>Apakah semua kolom formulir harus diisi? <svg className={openFaq === 0 ? "faq-icon open" : "faq-icon"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
              {openFaq === 0 && <div className="faq-answer">Kolom bertanda "Wajib (*)" harus diisi agar dapat melanjutkan ke tahap berikutnya.</div>}
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>Apakah benar ada keterlibatan ormas dalam program ini? <svg className={openFaq === 1 ? "faq-icon open" : "faq-icon"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
              {openFaq === 1 && <div className="faq-answer">Tidak ada keterlibatan ormas. Program ini dikelola langsung oleh Badan Gizi Nasional berkolaborasi dengan vendor resmi.</div>}
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>Di mana saya dapat mengakses panduan teknis penggunaan portal? <svg className={openFaq === 2 ? "faq-icon open" : "faq-icon"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
              {openFaq === 2 && <div className="faq-answer">Panduan teknis dalam bentuk PDF dapat diunduh melalui menu pusat bantuan di dalam Dashboard.</div>}
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>Bagaimana cara mendaftar sebuah akun? <svg className={openFaq === 3 ? "faq-icon open" : "faq-icon"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
              {openFaq === 3 && <div className="faq-answer">Anda dapat masuk atau mendaftar dengan menekan tombol "Masuk / Daftar" di sudut kanan atas dan menggunakan akun Google.</div>}
            </div>
          </div>
        </section>

        <section id="umpan-balik" className="card-container feedback-card">
          <div className="feedback-text">
            <h2 className="feedback-heading">Suarakan Pengaduanmu<br/>untuk Indonesia Lebih Baik !</h2>
            <p className="feedback-desc">
              P3MBG kini terhubung dengan pelaporan untuk menerima pengaduan dan laporan dari masyarakat. Laporkan permasalahan terkait layanan gizi secara cepat dan mudah melalui platform kami. Bersama kita wujudkan pelayanan yang lebih responsif dan transparan!
            </p>
            <button className="btn-primary" onClick={() => role ? navigate('/lapor') : setShowPopup(true)}>Laporkan Sekarang</button>
          </div>
          <div className="megaphone-container">
            <img src="/megaphone.png" alt="Megaphone Illustration" className="megaphone-image" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <img src="/Logo_Badan_Gizi_Nasional_(2024).png" alt="Logo Badan Gizi Nasional" className="footer-logo" />
          <div className="footer-links">
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); role ? navigate(role === 'vendor' ? '/dapur/sppg-jkt-001' : '/dashboard') : setShowPopup(true); }}>Dasbor</a>
            <a href="#umpan-balik" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('umpan-balik')?.scrollIntoView({ behavior: 'smooth' }); }}>Umpan Balik</a>
            <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>FAQ</a>
          </div>
          <div className="footer-socials">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
        </div>
        
        <div className="footer-contact">
          <div className="footer-contact-title">Kontak</div>
          <div className="footer-contact-text">Email: halo@bgn.dummy.id</div>
          <div className="footer-contact-text">No. HP: 021-555-0198</div>
          <div className="footer-contact-text">Alamat: Jl. Dummy Alamat No. 123, Jakarta Pusat, Indonesia</div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <span>© 2026 Amicorum. Semua Hak Dilindungi Undang-Undang.</span>
          <a href="#">Kebijakan Privasi</a>
        </div>
      </footer>

      {showPopup && <LoginSignupPopup onClose={() => setShowPopup(false)} setRole={setRole} />}
    </div>
  );
}

export default Landing;
