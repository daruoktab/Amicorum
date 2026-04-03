import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Sidebar from '../components/Sidebar';
import './KitchenDetail.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function KitchenDetail({ role, onLogout }) {
  const [sbOpen, setSbOpen] = useState(false);

  const chartData = {
    labels: ['Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'Pemenuhan',
        data: [88, 91, 93, 95, 97, 98.2],
        borderColor: '#3ddc84',
        backgroundColor: 'rgba(61,220,132,0.08)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: '#3ddc84',
        borderWidth: 2
      },
      {
        label: 'Target',
        data: [95, 95, 95, 95, 95, 95],
        borderColor: 'rgba(96,165,250,0.4)',
        borderDash: [4, 4],
        pointRadius: 0,
        borderWidth: 1.5,
        fill: false
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#4a5568', font: { size: 10 } } },
      y: { min: 80, max: 102, grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#4a5568', font: { size: 10 }, callback: v => v + '%' } }
    }
  };

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

          <div className="three-col">
            <div className="panel">
              <div className="phead">
                <div className="ptitle">Rincian Alokasi Anggaran</div>
              </div>
              <div className="pbody">
                {role === 'user' ? (
                  <div style={{ textAlign: 'center', padding: '40px 10px', background: 'rgba(0,0,0,0.2)', borderRadius: 8, border: '1px dashed var(--bdr)' }}>
                    <div style={{ fontSize: 24, marginBottom: 10 }}>🔒</div>
                    <div style={{ fontSize: 12, color: 'var(--tx2)', lineHeight: 1.5 }}>Data Anggaran/RAB Disembunyikan Demi Keamanan Administratif Otoritas.</div>
                  </div>
                ) : (
                  <>
                    <div className="alloc-lbl">Bahan Baku</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <div style={{ fontSize: 10, color: 'var(--tx3)' }}>65,9% dari total</div>
                      <div className="alloc-val">IDR 42,5M</div>
                    </div>
                    <div className="abar"><div className="abf" style={{ width: '66%', background: 'var(--green)' }}></div></div>
                    
                    <div className="alloc-lbl">Logistik & Pasokan</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <div style={{ fontSize: 10, color: 'var(--tx3)' }}>19,8% dari total</div>
                      <div className="alloc-val">IDR 12,8M</div>
                    </div>
                    <div className="abar"><div className="abf" style={{ width: '20%', background: 'var(--blue)' }}></div></div>

                    <div className="total-row">
                      <div className="total-lbl">Total Dialokasikan</div>
                      <div className="total-val">IDR 64,5M</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="panel">
              <div className="phead">
                <div className="ptitle">Komposisi Gizi Hari Ini</div>
                <div className="ptag">2.450 kkal/hari</div>
              </div>
              <div className="kcal-center">
                <div className="kcal-num">2.450</div>
                <div className="kcal-lbl">kkal / hari</div>
              </div>
              <div className="nutri-grid">
                <div className="nc">
                  <div className="nc-lbl">Protein</div>
                  <div className="nc-val near">85g <span style={{fontSize:11,color:'var(--tx3)'}}>/ 90g</span></div>
                  <div className="nc-bar"><div className="nc-bf" style={{width:'94%',background:'var(--yellow)'}}></div></div>
                </div>
                <div className="nc">
                  <div className="nc-lbl">Karbohidrat</div>
                  <div className="nc-val hit">310g <span style={{fontSize:11,color:'var(--tx3)'}}>/ 320g</span></div>
                  <div className="nc-bar"><div className="nc-bf" style={{width:'97%',background:'var(--green)'}}></div></div>
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="phead">
                <div className="ptitle">Leaderboard Regional</div>
                <div className="ptag">Top 4</div>
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

          <div className="panel">
            <div className="phead">
              <div className="ptitle">Tren Pemenuhan 6 Bulan</div>
              <div className="ptag">% Fulfillment</div>
            </div>
            <div className="trend-wrap">
              <div className="chart-area">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
