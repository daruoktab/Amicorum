import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './PelaporanHarian.css';

export default function PelaporanHarian({ role, onLogout }) {
  const [sbOpen, setSbOpen] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Step 1: Komposisi Makanan
  const [komposisi, setKomposisi] = useState([]);
  const [tagInput, setTagInput] = useState('');

  // Step 2: Kandungan Gizi
  const [gizi, setGizi] = useState({
    besar: { energi: '', karbohidrat: '', protein: '', lemak: '', serat: '' },
    kecil: { energi: '', karbohidrat: '', protein: '', lemak: '', serat: '' }
  });

  // Step 3: Rincian Harga Bahan
  const [rincianHarga, setRincianHarga] = useState({});

  // Step 4: Rincian Operasional
  const [operasional, setOperasional] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [opForm, setOpForm] = useState({ id: null, nama: '', biaya: '' });

  // Step 5: Audit
  const [auditParams, setAuditParams] = useState({ link: '' });
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

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!komposisi.includes(tagInput.trim())) {
        setKomposisi([...komposisi, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tag) => {
    setKomposisi(komposisi.filter((t) => t !== tag));
    const newHarga = { ...rincianHarga };
    delete newHarga[tag];
    setRincianHarga(newHarga);
  };

  const calculateTotal = () => {
    let total = 0;
    Object.values(rincianHarga).forEach((val) => {
      total += parseInt(val.replace(/\./g, '') || '0', 10);
    });
    operasional.forEach((op) => {
      total += parseInt(op.biaya.replace(/\./g, '') || '0', 10);
    });
    return total;
  };

  const handleOpSubmit = () => {
    if (!opForm.nama || !opForm.biaya) return;
    if (opForm.id) {
      setOperasional(operasional.map((op) => (op.id === opForm.id ? opForm : op)));
    } else {
      setOperasional([...operasional, { ...opForm, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setOpForm({ id: null, nama: '', biaya: '' });
  };

  const handleOpEdit = (op) => {
    setOpForm(op);
    setIsModalOpen(true);
  };

  const handleOpDelete = (id) => {
    setOperasional(operasional.filter((op) => op.id !== id));
  };

  const submitForm = () => {
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
              <span style={{ color: 'var(--tx)' }}>Pelaporan Harian</span>
            </div>
          </div>
          <div className="topbar-kpi">
            <button style={{fontSize: 11, cursor: 'pointer', border: '1px solid var(--bdr)', padding: '4px 10px', borderRadius: 6, color: 'var(--red)', background: 'var(--rdim)', marginLeft: 15}} onClick={onLogout}>Sign Out</button>
          </div>
        </div>

        <div className="content ph-content">
          <div className="ph-title-wrap">
            <div className="ph-title">Pelaporan Harian</div>
          </div>

          <div className="ph-panel">
            {/* Step 1 */}
            {step === 1 && (
              <div className="ph-step">
                <div className="step-title">Komposisi Makanan</div>
                <div className="step-desc">Pastikan penamaan setiap komposisi makanan dibuat sedetail mungkin</div>
                
                <div className="tag-input-container">
                  <div className="tags-wrapper">
                    {komposisi.map((tag, idx) => (
                      <div key={idx} className="tag-item">
                        {tag}
                        <span className="tag-close" onClick={() => removeTag(tag)}>×</span>
                      </div>
                    ))}
                    <input 
                      type="text" 
                      className="tag-input" 
                      placeholder={komposisi.length === 0 ? "Masukkan nama makanan (contoh: Ayam Goreng) lalu tekan Enter" : ""}
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagKeyDown}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="ph-step">
                <div className="step-title">Kandungan Gizi</div>
                <div className="gizi-grid">
                  {['besar', 'kecil'].map((porsi) => (
                    <div key={porsi} className="gizi-col">
                      <div className="gizi-col-title">Porsi {porsi === 'besar' ? 'Besar' : 'Kecil'}</div>
                      {['energi', 'karbohidrat', 'protein', 'lemak', 'serat'].map((item) => (
                        <div className="gizi-input-grp" key={item}>
                          <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                          <input 
                            type="text" 
                            placeholder={item === 'energi' ? "Masukkan dalam format Kkal" : "Masukkan dalam format gramasi (gr)"} 
                            value={gizi[porsi][item]}
                            onChange={(e) => setGizi({...gizi, [porsi]: {...gizi[porsi], [item]: e.target.value}})}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="ph-step">
                <div className="step-title">Rincian Harga Bahan</div>
                
                <div className="harga-grid">
                  {komposisi.map((tag) => (
                    <div className="harga-input-grp" key={tag}>
                      <label>{tag}</label>
                      <div className="rp-input-wrap">
                        <span className="rp-prefix">Rp.</span>
                        <input 
                          type="text" 
                          className="rp-input"
                          placeholder="Masukkan harga bahan per porsi"
                          value={rincianHarga[tag] || ''}
                          onChange={(e) => setRincianHarga({...rincianHarga, [tag]: formatRupiah(e.target.value)})}
                        />
                      </div>
                    </div>
                  ))}
                  {komposisi.length === 0 && <div style={{ color: 'var(--tx3)', fontSize: 13, marginTop: 10 }}>Belum ada komposisi makanan yang ditambahkan di langkah pertama.</div>}
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="ph-step">
                <div className="step-title">Rincian Operasional</div>
                
                <button className="op-add-btn" onClick={() => { setOpForm({ id: null, nama: '', biaya: '' }); setIsModalOpen(true); }}>
                  Tambah +
                </button>

                <div className="op-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Operasional</th>
                        <th>Biaya</th>
                        <th style={{ width: 80, textAlign: 'center' }}>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {operasional.map((op, idx) => (
                        <tr key={op.id}>
                          <td style={{ color: 'var(--tx3)', fontFamily: 'var(--mono)' }}>{idx + 1}</td>
                          <td style={{ fontStyle: 'italic' }}>{op.nama}</td>
                          <td style={{ fontFamily: 'var(--mono)' }}>Rp. {op.biaya}</td>
                          <td style={{ textAlign: 'center' }}>
                            <svg className="action-icon edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" onClick={() => handleOpEdit(op)}>
                              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            <svg className="action-icon delete" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" onClick={() => handleOpDelete(op.id)}>
                              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                            </svg>
                          </td>
                        </tr>
                      ))}
                      {operasional.length === 0 && (
                        <tr>
                          <td colSpan="4" style={{ textAlign: 'center', color: 'var(--tx3)', padding: 30 }}>Belum ada rincian operasional</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Modal Rincian Operasional */}
                {isModalOpen && (
                  <div className="modal-overlay">
                    <div className="modal-box">
                      <div className="modal-title">{opForm.id ? "Edit Item Operasional" : "Tambah Item Operasional"}</div>
                      <div className="modal-form">
                        <div className="input-grp">
                          <label>Nama Operasional</label>
                          <input type="text" value={opForm.nama} onChange={(e) => setOpForm({...opForm, nama: e.target.value})} placeholder="Contoh: Listrik, Air, Gas" />
                        </div>
                        <div className="input-grp">
                          <label>Biaya</label>
                          <div className="rp-input-wrap">
                            <span className="rp-prefix">Rp.</span>
                            <input type="text" className="rp-input" value={opForm.biaya} onChange={(e) => setOpForm({...opForm, biaya: formatRupiah(e.target.value)})} placeholder="Contoh: 50.000" />
                          </div>
                        </div>
                        <div className="modal-actions">
                          <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>Batal</button>
                          <button className="btn-save" onClick={handleOpSubmit}>Simpan</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 5 */}
            {step === 5 && (
              <div className="ph-step">
                <div className="step-title">Anggaran Total Terpakai</div>
                <div className="step-desc">Pastikan total anggaran sesuai dengan yang terpakai</div>
                <div className="input-grp readonly-grp">
                  <input type="text" value={`Rp. ${formatRupiah(calculateTotal())}`} readOnly disabled className="readonly-input" />
                </div>

                <div className="step-title" style={{ marginTop: 30 }}>Audit</div>
                <div className="step-desc" style={{ color: 'var(--red)' }}>* Section khusus Laporan PDF, tidak tampil di publik.</div>
                
                <div className="input-grp">
                  <label style={{ fontStyle: 'italic', textTransform: 'none' }}>Link postingan instagram</label>
                  <input type="text" value={auditParams.link} onChange={(e) => setAuditParams({...auditParams, link: e.target.value})} placeholder="https://www.instagram.com/p/..." />
                </div>

                <div className="input-grp">
                  <label style={{ fontStyle: 'italic', textTransform: 'none' }}>Upload semua nota</label>
                  <div className="dropzone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <div>Upload dari komputer</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step Navigation */}
            <div className="ph-nav">
              {step > 1 && <button className="nav-btn prev" onClick={() => setStep(step - 1)}>Back</button>}
              <div style={{ flex: 1 }}></div>
              {step < 5 ? (
                <button className="nav-btn next" onClick={() => setStep(step + 1)}>Next</button>
              ) : (
                <button className="nav-btn submit" onClick={submitForm}>Submit</button>
              )}
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
            <button className="btn-save" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsSuccess(false)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}
