import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './PelaporanMingguan.css';

export default function PelaporanMingguan({ role, onLogout }) {
  const [sbOpen, setSbOpen] = useState(false);
  const navigate = useNavigate();

  // States
  const [anggaran, setAnggaran] = useState('');
  
  const [penerima, setPenerima] = useState({
    sekolah: '',
    balita: '',
    besar: '',
    kecil: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Format Helper
  const formatRupiah = (value) => {
    if (!value) return '';
    const numberString = value.toString().replace(/[^,\d]/g, '');
    const split = numberString.split(',');
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    if (ribuan) {
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    return split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
  };

  const handleSubmit = () => {
    setIsSuccess(true);
  };

  return (
    <div className="app">
      {role !== 'user' && <Sidebar isOpen={sbOpen} onClose={() => setSbOpen(false)} role={role} />}

      <div className="main">
        <div className="topbar">
          <div className="topbar-left">
            {role !== 'user' && (
              <div className="burger" onClick={() => setSbOpen(true)}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 4h12M2 8h12M2 12h12" />
                </svg>
              </div>
            )}
            <div className="breadcrumb" style={{ marginLeft: 10 }}>
              <span style={{ color: 'var(--tx3)' }}>Laporan</span>
              <span className="bc-sep">›</span>
              <span style={{ color: 'var(--tx)' }}>Pelaporan Mingguan</span>
            </div>
          </div>
          <div className="topbar-kpi">
            <button style={{fontSize: 11, cursor: 'pointer', border: '1px solid var(--bdr)', padding: '4px 10px', borderRadius: 6, color: 'var(--red)', background: 'var(--rdim)', marginLeft: 15}} onClick={onLogout}>Sign Out</button>
          </div>
        </div>

        <div className="content pm-content">
          <div className="pm-title-wrap">
            <div className="pm-title">Pelaporan Mingguan</div>
          </div>

          <div className="pm-container">
            
            {/* Section 1: Total Anggaran */}
            <div className="pm-card">
              <div className="pm-card-title">Total Anggaran Diterima</div>
              <div className="pm-card-desc">Pastikan anggaran yang dimasukkan sesuai dengan yang diterima Vendor/SPPG</div>
              
              <div className="pm-input-grp">
                <div className="rp-input-wrap">
                  <span className="rp-prefix">Rp.</span>
                  <input 
                    type="text" 
                    className="rp-input"
                    value={anggaran}
                    onChange={(e) => setAnggaran(formatRupiah(e.target.value))}
                  />
                </div>
              </div>

              <div className="pm-input-grp">
                <label style={{ fontStyle: 'italic', marginBottom: 8, display: 'block', color: 'var(--tx)' }}>Upload Bukti</label>
                <div className="pm-dropzone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <div>Upload dari komputer</div>
                </div>
              </div>
            </div>

            <hr className="pm-divider" />

            {/* Section 2: Total Penerima */}
            <div className="pm-card" style={{ marginTop: 24 }}>
              <div className="pm-card-title">Total Penerima</div>
              
              <div className="pm-grid">
                <div className="pm-input-grp">
                  <label>Total Sekolah Penerima</label>
                  <input 
                    type="text" 
                    value={penerima.sekolah}
                    onChange={(e) => setPenerima({...penerima, sekolah: e.target.value})}
                  />
                </div>
                <div className="pm-input-grp">
                  <label>Total Balita / Ibu Hamil</label>
                  <input 
                    type="text" 
                    value={penerima.balita}
                    onChange={(e) => setPenerima({...penerima, balita: e.target.value})}
                  />
                </div>
                <div className="pm-input-grp">
                  <label>Porsi Besar</label>
                  <input 
                    type="text" 
                    value={penerima.besar}
                    onChange={(e) => setPenerima({...penerima, besar: e.target.value})}
                  />
                </div>
                <div className="pm-input-grp">
                  <label>Porsi Kecil</label>
                  <input 
                    type="text" 
                    value={penerima.kecil}
                    onChange={(e) => setPenerima({...penerima, kecil: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="pm-actions" style={{ marginTop: 30, justifyContent: 'flex-end' }}>
              <button className="pm-btn-submit" onClick={handleSubmit}>Submit</button>
            </div>

          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isSuccess && (
        <div className="modal-overlay">
          <div className="modal-box success-box">
            <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="modal-title" style={{ textAlign: 'center', marginBottom: 10 }}>Pelaporan Berhasil Disimpan</div>
            <div className="step-desc" style={{ textAlign: 'center', marginBottom: 20 }}>Laporan Anda telah disimpan sebagai PDF dan dikirimkan ke pihak berwenang. Anda dapat melihat arsip laporannya di menu Riwayat.</div>
            <button className="pm-btn-submit" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsSuccess(false)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}
