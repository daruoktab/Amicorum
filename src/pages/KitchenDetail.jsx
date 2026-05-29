import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './KitchenDetail.css';

export default function KitchenDetail({ role, onLogout }) {
  const [sbOpen, setSbOpen] = useState(false);
  const [porsiBesar, setPorsiBesar] = useState(true);

  const lbData = [
    { r: 1, n: 'Dapur A', s: 98.4, hl: true },
    { r: 2, n: 'Dapur Bunga', s: 97.8 },
    { r: 3, n: 'Central Kitchen Jkt', s: 97.2 },
    { r: 4, n: 'Dapur Melati', s: 96.5 },
  ];

  return (
    <div className="app">
      {role !== 'user' && <Sidebar isOpen={sbOpen} onClose={() => setSbOpen(false)} role={role} />}
      
      <div className="main">
        <div className="topbar pt-topbar">
          {role !== 'user' && (
            <div className="burger" onClick={() => setSbOpen(true)}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4h12M2 8h12M2 12h12" />
              </svg>
            </div>
          )}
          <div className="breadcrumb">
            <Link to="/dashboard" style={{ color: 'var(--tx3)', textDecoration: 'none' }}>Ikhtisar Pasar</Link>
            <span className="bc-sep">›</span>
            <span>{role === 'user' ? 'Informasi Publik' : 'Analitik Dapur'}</span>
            <span className="bc-sep">›</span>
            <span style={{ color: 'var(--tx)', fontWeight: 500 }}>Dapur A</span>
          </div>
          <div className="tb-right">
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div className="status-dot"></div>
              <div className="status-lbl">Normal</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="compliance-lbl">Tingkat Kepatuhan</div>
              <div className="compliance">98,4%</div>
            </div>
            {role !== 'user' && <button className="expbtn">↓ Ekspor Audit</button>}
            <button style={{fontSize: 11, cursor: 'pointer', border: '1px solid var(--bdr)', padding: '4px 10px', marginLeft: '10px', borderRadius: 6, color: 'var(--red)', background: 'var(--rdim)'}} onClick={onLogout}>Sign Out</button>
          </div>
        </div>

        <div className="content">
          <div className="profile-head">
            <div className="ph-left">
              <div className="ph-tag">Profil Dasar</div>
              <div className="ph-name">Satuan Pelayanan Dapur A</div>
              <div className="ph-id">SPPG-JKT-001 · Kebayoran Baru, Jakarta Selatan</div>
              <div className="ph-meta">
                <span className="badge b-op">Operasional</span>
                {role !== 'user' && <span style={{ fontSize: 11, color: 'var(--tx3)', padding: '3px 0' }}>Vendor: PT. Pangan Nusantara</span>}
                <span style={{ fontSize: 11, color: 'var(--tx3)', padding: '3px 0' }}>Kapasitas: 2.450 porsi/hari</span>
              </div>
            </div>
            <div className="ph-actions">
              {role !== 'user' && <button className="act-btn">Hubungi PIC</button>}
              {role === 'admin' && <button className="act-btn primary" style={{background: 'var(--red)', borderColor: 'var(--red)'}}>Kirim Peringatan</button>}
              {role === 'user' && (
                <Link to="/lapor">
                  <button className="act-btn primary">Tulis Laporan Masyarakat</button>
                </Link>
              )}
            </div>
          </div>

          <div className="wc-panel">
            <div className="wc-header">
              <div className="wc-title">Awan Kata — Komentar Trending Masyarakat</div>
              <div className="wc-live"><div className="live-dot"></div>Live Sentiment Stream</div>
            </div>
            <div className="wordcloud">
              <span className="ww" style={{ fontSize: 32, color: '#dde3f0', fontWeight: 600 }}>Kualitas Prima</span>
              <span className="ww" style={{ fontSize: 26, color: '#60a5fa', fontWeight: 600 }}>Distribusi Cepat</span>
              <span className="ww" style={{ fontSize: 21, color: '#7c8daa', fontWeight: 500 }}>Protein Tinggi</span>
              <span className="ww" style={{ fontSize: 22, color: '#dde3f0', fontWeight: 500 }}>Fresh Poultry</span>
              <span className="ww" style={{ fontSize: 28, color: '#dde3f0', fontWeight: 600 }}>Efisiensi</span>
            </div>
          </div>

          <div className="three-col summary-row">
            <div className="panel kcard summary-card">
              <div className="pbody text-center">
                <div className="summary-lbl">Total Penerima</div>
                <div className="summary-val">1243</div>
              </div>
            </div>
            <div className="panel kcard summary-card">
              <div className="pbody text-center">
                <div className="summary-lbl">Porsi Besar</div>
                <div className="summary-val">800</div>
              </div>
            </div>
            <div className="panel kcard summary-card">
              <div className="pbody text-center">
                <div className="summary-lbl">Porsi Kecil</div>
                <div className="summary-val">443</div>
              </div>
            </div>
          </div>

          <div className="three-col">
            <div className="panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="phead">
                <div className="ptitle" style={{ fontStyle: 'italic', color: 'var(--tx)' }}>Rincian Alokasi Anggaran</div>
              </div>
              <div className="pbody" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {role === 'user' ? (
                  <div style={{ textAlign: 'center', padding: '40px 10px', background: 'rgba(0,0,0,0.2)', borderRadius: 8, border: '1px dashed var(--bdr)' }}>
                    <div style={{ fontSize: 24, marginBottom: 10 }}>🔒</div>
                    <div style={{ fontSize: 12, color: 'var(--tx2)', lineHeight: 1.5 }}>Data Anggaran/RAB Disembunyikan Demi Keamanan Administratif Otoritas.</div>
                  </div>
                ) : (
                  <>
                    <div className="alloc-list">
                      <div className="alloc-item">
                        <div className="alloc-name" style={{ fontStyle: 'italic', textTransform: 'lowercase' }}>ayam goreng</div>
                        <div className="alloc-price"><span>Rp.</span> <span>50.000</span></div>
                      </div>
                      <div className="alloc-item">
                        <div className="alloc-name" style={{ fontStyle: 'italic', textTransform: 'lowercase' }}>nasi putih</div>
                        <div className="alloc-price"><span>Rp.</span> <span>20.000</span></div>
                      </div>
                      <div className="alloc-item">
                        <div className="alloc-name" style={{ fontStyle: 'italic', textTransform: 'lowercase' }}>susu full-cream</div>
                        <div className="alloc-price"><span>Rp.</span> <span>30.000</span></div>
                      </div>
                      <div className="alloc-item">
                        <div className="alloc-name" style={{ fontStyle: 'italic' }}>Operasi</div>
                        <div className="alloc-price"><span>Rp.</span> <span>30.000</span></div>
                      </div>
                    </div>
                    <div className="total-row mt-auto">
                      <div className="total-lbl" style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>Total Anggaran Harian</div>
                      <div className="total-val" style={{ fontStyle: 'italic' }}><span>Rp.</span> <span>1.430.000</span></div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="phead" style={{ borderBottom: 'none' }}>
                <div className="ptitle text-center" style={{ fontStyle: 'italic', color: 'var(--tx)' }}>Kandungan Gizi</div>
              </div>
              <div className="toggle-row">
                <div className="toggle-text">{porsiBesar ? 'Porsi Besar' : 'Porsi Kecil'}</div>
                <button className="toggle-btn" onClick={() => setPorsiBesar(!porsiBesar)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              <div className="kcal-center" style={{ borderBottom: 'none' }}>
                <div className="kcal-num" style={{ fontStyle: 'italic' }}>{porsiBesar ? '2.420' : '1.800'}</div>
                <div className="kcal-lbl" style={{ fontStyle: 'italic' }}>kkal / hari</div>
              </div>
              <div className="nutri-boxes mt-auto">
                <div className="nb">
                  <div className="nb-lbl">Protein</div>
                  <div className="nb-val">{porsiBesar ? '35' : '25'}</div>
                </div>
                <div className="nb">
                  <div className="nb-lbl">Serat</div>
                  <div className="nb-val">{porsiBesar ? '35' : '25'}</div>
                </div>
                <div className="nb">
                  <div className="nb-lbl">Lemak</div>
                  <div className="nb-val">{porsiBesar ? '35' : '25'}</div>
                </div>
                <div className="nb">
                  <div className="nb-lbl">Karbohidrat</div>
                  <div className="nb-val">{porsiBesar ? '35' : '25'}</div>
                </div>
                <div className="nb wide">
                  <div className="nb-lbl">Energi</div>
                  <div className="nb-val">{porsiBesar ? '35' : '25'}</div>
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="phead">
                <div className="ptitle" style={{ fontStyle: 'italic', color: 'var(--tx)' }}>Leaderboard Regional</div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Peringkat</th>
                    <th>Nama Dapur</th>
                    <th>Skor</th>
                  </tr>
                </thead>
                <tbody>
                  {lbData.map((lb, i) => (
                    <tr key={i}>
                      <td><span className={`lb-rank ${lb.r===1?'gold':''}`}>#{lb.r}</span></td>
                      <td><span className={`lb-name ${lb.hl?'hl':''}`}>{lb.n}</span></td>
                      <td>
                        <span className={`lb-score ${lb.hl?'hi':''}`}>{lb.s.toFixed(1)}</span>
                        <span className="lb-bar"><span className="lb-bf" style={{width: `${Math.round((lb.s-90)*10)}%`}}></span></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
