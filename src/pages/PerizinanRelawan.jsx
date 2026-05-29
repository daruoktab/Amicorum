import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './Perizinan.css';

export default function PerizinanRelawan({ role, onLogout }) {
  const [sbOpen, setSbOpen] = useState(false);

  // States
  const [pergantian, setPergantian] = useState({
    namaMundur: '',
    jabatanMundur: '',
    namaBaru: '',
    alamat: '',
    nik: '',
    gender: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

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
              <span style={{ color: 'var(--tx3)' }}>Perizinan</span>
              <span className="bc-sep">›</span>
              <span style={{ color: 'var(--tx)' }}>Permintaan Pergantian Relawan</span>
            </div>
          </div>
          <div className="topbar-kpi">
            <button style={{fontSize: 11, cursor: 'pointer', border: '1px solid var(--bdr)', padding: '4px 10px', borderRadius: 6, color: 'var(--red)', background: 'var(--rdim)', marginLeft: 15}} onClick={onLogout}>Sign Out</button>
          </div>
        </div>

        <div className="content pz-content">
          <div className="pz-title-wrap">
            <div className="pz-title">Permintaan Pergantian Relawan</div>
          </div>

          <div className="pz-container">
            
            <div className="pz-card">
              <div className="pz-card-title">Data Relawan Mengundurkan Diri</div>
              <div className="pz-grid pz-grid-2" style={{ marginTop: 12 }}>
                <div className="pz-input-grp">
                  <label>Nama Relawan</label>
                  <input 
                    type="text" 
                    value={pergantian.namaMundur}
                    onChange={(e) => setPergantian({...pergantian, namaMundur: e.target.value})}
                  />
                </div>
                <div className="pz-input-grp">
                  <label>Jabatan Relawan</label>
                  <input 
                    type="text" 
                    value={pergantian.jabatanMundur}
                    onChange={(e) => setPergantian({...pergantian, jabatanMundur: e.target.value})}
                  />
                </div>
              </div>

              <div className="pz-subcard-title" style={{ marginTop: 24 }}>Data Relawan Baru</div>
              <div className="pz-input-grp">
                <label>Nama Relawan Pengganti</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={pergantian.namaBaru}
                  onChange={(e) => setPergantian({...pergantian, namaBaru: e.target.value})}
                />
              </div>

              <div className="pz-input-grp">
                <label>Alamat</label>
                <input 
                  type="text" 
                  placeholder="cth: JL. Kebon Sirih No. 1, R.T. 1/RW. 7, Kb. Sirih, Kec. Menteng..."
                  value={pergantian.alamat}
                  onChange={(e) => setPergantian({...pergantian, alamat: e.target.value})}
                />
              </div>

              <div className="pz-grid pz-grid-2">
                <div className="pz-input-grp">
                  <label>Nomor Induk Kependudukan (NIK)</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan 16 digit (cth: 32011xxxxxxxx)"
                    value={pergantian.nik}
                    onChange={(e) => setPergantian({...pergantian, nik: e.target.value})}
                  />
                </div>
                <div className="pz-input-grp">
                  <label>Jenis Kelamin</label>
                  <input 
                    type="text" 
                    placeholder="Pria/Wanita"
                    value={pergantian.gender}
                    onChange={(e) => setPergantian({...pergantian, gender: e.target.value})}
                  />
                </div>
              </div>

            </div>

            <div className="pz-actions" style={{ marginTop: 30, justifyContent: 'flex-end' }}>
              <button className="pz-btn-submit" onClick={handleSubmit}>Submit</button>
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
            <div className="modal-title" style={{ textAlign: 'center', marginBottom: 10 }}>Perizinan Berhasil Disimpan</div>
            <div className="step-desc" style={{ textAlign: 'center', marginBottom: 20 }}>Permintaan pergantian relawan Anda telah disimpan sebagai referensi dan dikirimkan ke pihak berwenang. Anda dapat melihat arsipnya di menu Riwayat.</div>
            <button className="pz-btn-submit" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsSuccess(false)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}
