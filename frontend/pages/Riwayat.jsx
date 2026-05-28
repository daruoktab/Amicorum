import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './Riwayat.css';

export default function Riwayat({ role, onLogout }) {
  const [sbOpen, setSbOpen] = useState(false);
  const [search, setSearch] = useState('');

  const dummyData = [
    { id: 1, jenis: 'Laporan Harian', tanggal: '04/04/2026' },
    { id: 2, jenis: 'Laporan Mingguan', tanggal: '04/04/2026' },
    { id: 3, jenis: 'Laporan Perizinan', tanggal: '31/03/2026' },
    { id: 4, jenis: 'Laporan Harian', tanggal: '30/04/2026' }
  ];

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
              <span style={{ color: 'var(--tx)' }}>Riwayat</span>
            </div>
          </div>
          <div className="topbar-kpi">
            <button style={{fontSize: 11, cursor: 'pointer', border: '1px solid var(--bdr)', padding: '4px 10px', borderRadius: 6, color: 'var(--red)', background: 'var(--rdim)', marginLeft: 15}} onClick={onLogout}>Sign Out</button>
          </div>
        </div>

        <div className="content rw-content">
          <div className="rw-title-wrap">
            <div className="rw-title">Riwayat</div>
          </div>

          <div className="rw-container">
            
            {/* Search Bar */}
            <div className="rw-search-bar">
              <div className="rw-search-input-wrap">
                <svg className="rw-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input 
                  type="text" 
                  placeholder="masukan kata kunci : tanggal, jenis laporan" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg className="rw-filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                  <circle cx="8" cy="6" r="2" fill="var(--surf2)" />
                  <circle cx="16" cy="12" r="2" fill="var(--surf2)" />
                  <circle cx="10" cy="18" r="2" fill="var(--surf2)" />
                </svg>
              </div>
            </div>

            {/* Table */}
            <div className="rw-table-wrap">
              <table className="rw-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px', textAlign: 'center' }}>No</th>
                    <th>Jenis Laporan</th>
                    <th>Tanggal</th>
                    <th style={{ width: '100px', textAlign: 'center' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((row, idx) => (
                    <tr key={row.id}>
                      <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                      <td>{row.jenis}</td>
                      <td>{row.tanggal}</td>
                      <td style={{ textAlign: 'center' }}>
                        <button className="rw-btn-dl" title="Download">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
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
