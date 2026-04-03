import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

export default function Dashboard({ role, onLogout }) {
  const [sbOpen, setSbOpen] = useState(false);

  // Dummy Data for SPPG Units (Rich dataset for proposal rendering)
  const sppgList = [
    { id: 'SPPG-JKT-001', name: 'Satuan Pelayanan Dapur A', loc: 'Kebayoran Baru, Jakarta', status: 'Operasional', type: 'Daging & Unggas', fulfill: 98.2, cap: '2.450', score: 9.2, cls: 'op', lo: false },
    { id: 'SPPG-BOG-042', name: 'Satuan Pelayanan Dapur B', loc: 'Bojong Gede, Bogor', status: 'Peringatan Kritis', type: 'Sayur & Biji-bijian', fulfill: 64.5, cap: '1.200', score: 4.8, cls: 'cr', lo: true },
    { id: 'SPPG-JKT-012', name: 'Central Kitchen Jkt', loc: 'Pulogadung, Jakarta', status: 'Operasional', type: 'Campuran Lengkap', fulfill: 97.2, cap: '5.000', score: 8.9, cls: 'op', lo: false },
    { id: 'SPPG-BDG-008', name: 'Dapur Regional Bandung', loc: 'Cidadap, Bandung', status: 'Maintenance', type: 'Daging & Susu', fulfill: 82.0, cap: '1.500', score: 7.2, cls: 'mn', lo: false },
    { id: 'SPPG-JKT-088', name: 'Logistik Cepat Bersama', loc: 'Cengkareng, Jakarta', status: 'Aktif', type: 'Distribusi', fulfill: 89.0, cap: 'Armada', score: 7.9, cls: 'ac', lo: false },
    { id: 'SPPG-SBY-021', name: 'Dapur Pesisir Sby', loc: 'Kenjeran, Surabaya', status: 'Operasional', type: 'Ikan & Seafood', fulfill: 95.4, cap: '3.200', score: 9.0, cls: 'op', lo: false },
    { id: 'SPPG-JKT-043', name: 'Dapur Cempaka', loc: 'Kemayoran, Jakarta', status: 'Operasional', type: 'Daging & Sayur', fulfill: 91.5, cap: '2.100', score: 8.4, cls: 'op', lo: false },
    { id: 'SPPG-BOG-015', name: 'Pusat Logistik Bogor', loc: 'Cibinong, Bogor', status: 'Aktif', type: 'Distri. Sayur', fulfill: 88.3, cap: 'Armada', score: 7.6, cls: 'ac', lo: false },
    { id: 'SPPG-BDG-034', name: 'Dapur Bunga Mekar', loc: 'Coblong, Bandung', status: 'Peringatan', type: 'Karbohidrat & Biji', fulfill: 75.2, cap: '1.800', score: 6.5, cls: 'cr', lo: true },
    { id: 'SPPG-JKT-055', name: 'Dapur Menteng Utama', loc: 'Menteng, Jakarta', status: 'Operasional', type: 'Premium Mix', fulfill: 99.1, cap: '1.000', score: 9.6, cls: 'op', lo: false },
    { id: 'SPPG-SBY-045', name: 'Sentra Gizi Gubeng', loc: 'Gubeng, Surabaya', status: 'Operasional', type: 'Daging & Unggas', fulfill: 93.8, cap: '2.800', score: 8.7, cls: 'op', lo: false },
    { id: 'SPPG-JKT-072', name: 'Dapur Sehat Tebet', loc: 'Tebet, Jakarta', status: 'Operasional', type: 'Sayuran Ekstra', fulfill: 94.2, cap: '2.200', score: 8.8, cls: 'op', lo: false },
    { id: 'SPPG-BOG-029', name: 'Dapur Sentul City', loc: 'Sentul, Bogor', status: 'Peringatan', type: 'Daging & Susu', fulfill: 70.4, cap: '1.400', score: 5.9, cls: 'cr', lo: true },
    { id: 'SPPG-BDG-091', name: 'Gudang Suplai Jabar', loc: 'Kiaracondong, Bandung', status: 'Aktif', type: 'Distribusi Utama', fulfill: 87.5, cap: 'Armada', score: 8.1, cls: 'ac', lo: false },
    { id: 'SPPG-SBY-088', name: 'Dapur Wonokromo', loc: 'Wonokromo, Surabaya', status: 'Operasional', type: 'Susu & Suplemen', fulfill: 96.0, cap: '2.000', score: 9.1, cls: 'op', lo: false },
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
            <div>
              <div className="page-tag">{role === 'user' ? 'Transparansi Publik' : 'Intelijen Editorial'}</div>
              <div className="page-title">Ikhtisar {role === 'vendor' ? 'Pasar (View: Vendor)' : role === 'user' ? 'Dapur Terbuka' : 'Pasar (View: Pusat)'}</div>
            </div>
          </div>
          <div className="topbar-kpi">
            {role !== 'user' && (
              <>
                <div className="tkpi">
                  <div className="tkpi-lbl">Valuasi Pasar</div>
                  <div className="tkpi-val">Rp 4,28M <span className="pill">+12,4%</span></div>
                </div>
                <div className="tkpi">
                  <div className="tkpi-lbl">Kritis</div>
                  <div className="tkpi-val r">04</div>
                </div>
              </>
            )}
            <div className="tkpi">
              <div className="tkpi-lbl">Unit Aktif</div>
              <div className="tkpi-val b">142 <span style={{fontSize:10,color:'var(--tx3)'}}>89% kap.</span></div>
            </div>
            {role === 'user' && (
              <Link to="/lapor" style={{ textDecoration: 'none' }}>
                <button className="ur-submit" style={{ padding: '8px 16px', margin: 0, marginTop: 0 }}>Lapor / Umpan Balik</button>
              </Link>
            )}
            <button style={{fontSize: 11, cursor: 'pointer', border: '1px solid var(--bdr)', padding: '4px 10px', borderRadius: 6, color: 'var(--red)', background: 'var(--rdim)', marginLeft: 15}} onClick={onLogout}>Sign Out</button>
          </div>
        </div>

        <div className="content">
          {role !== 'user' && (
            <div className="alert">
              <div className="pulse"></div>
              <div className="alert-txt">4 unit memerlukan perhatian segera — Dapur B (Bogor) & 3 lainnya dalam status PERINGATAN KRITIS</div>
              <div className="alert-time">Diperbarui 10 dtk lalu</div>
            </div>
          )}

          <div className="kpi-row">
            <div className="kcard">
              <div className="kcard-lbl">Total Unit SPPG</div>
              <div className="kcard-val b">142</div>
              <div className="kcard-sub">↑ 8 unit dari bulan lalu</div>
              <div className="bar"><div className="bf" style={{width:'89%',background:'var(--blue)'}}></div></div>
            </div>
            <div className="kcard">
              <div className="kcard-lbl">Makanan / Hari</div>
              <div className="kcard-val g">98,4K</div>
              <div className="kcard-sub">Target: 110K/hari</div>
              <div className="bar"><div className="bf" style={{width:'89%',background:'var(--green)'}}></div></div>
            </div>
            <div className="kcard">
              <div className="kcard-lbl">Tingkat Kepatuhan Khasiat</div>
              <div className="kcard-val g">94,2%</div>
              <div className="kcard-sub">Standar gizi nasional</div>
              <div className="bar"><div className="bf" style={{width:'94%',background:'var(--green)'}}></div></div>
            </div>
            {role !== 'user' && (
              <div className="kcard">
                <div className="kcard-lbl">Unit Kritis</div>
                <div className="kcard-val r">04</div>
                <div className="kcard-sub">Perlu intervensi segera</div>
                <div className="bar"><div className="bf" style={{width:'16%',background:'var(--red)'}}></div></div>
              </div>
            )}
          </div>

          <div className="filter-bar">
            {['Semua', 'Jakarta', 'Bogor', 'Bandung', 'Surabaya'].map((f, i) => (
              <button key={i} className={`fbtn ${i===0?'on':''}`}>{f}</button>
            ))}
            <input className="fsearch" placeholder="Cari wilayah lokal Anda..." />
            {role !== 'user' && <button className="expbtn ml">↓ Ekspor Data</button>}
          </div>

          <div className="grid2">
            <div className="panel">
              <div className="phead">
                <div className="ptitle">Daftar Ekstensif Unit SPPG</div>
                <div className="ptag">1–15 dari 142</div>
              </div>
              <div className="tbl-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama Unit</th>
                      <th>Lokasi</th>
                      <th>Status</th>
                      <th>Detail Logistik</th>
                      <th>Pemenuhan Target</th>
                      <th>Skor Audit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sppgList.map((item, index) => (
                      <tr 
                        key={item.id} 
                        style={{ cursor: 'pointer', background: item.lo ? 'rgba(248,113,113,0.03)' : 'transparent' }}
                        onClick={() => window.location.href=`/dapur/${item.id.toLowerCase()}`}
                      >
                        <td style={{fontFamily:'var(--mono)',color:'var(--tx3)',fontSize:10}}>
                          {String(index + 1).padStart(2, '0')}
                        </td>
                        <td>
                          <Link to={`/dapur/${item.id.toLowerCase()}`} style={{textDecoration:'none', color:'inherit'}}>
                            <div className="uname-s">{item.name}</div>
                            <div className="uid">{item.id}</div>
                          </Link>
                        </td>
                        <td className="uloc">{item.loc}</td>
                        <td><span className={`badge b-${item.cls}`}>{item.status}</span></td>
                        <td style={{fontSize:11,color:'var(--tx2)'}}>{item.type}</td>
                        <td>
                          <div className={`ful ${item.lo ? 'lo' : ''}`}>{item.fulfill.toFixed(1)}%</div>
                          <div className="ful-sub">{item.cap} {item.cap==='Armada'?'Unit':'porsi/hari'}</div>
                          <div className="mbar">
                            <div className="mbf" style={{width:`${item.fulfill}%`,background: item.lo ? 'var(--red)' : item.cls === 'ac' ? 'var(--blue)' : 'var(--green)'}}></div>
                          </div>
                        </td>
                        <td><span className={`sc ${item.lo ? 'lo' : (item.score > 8.5 ? 'hi' : 'mid')}`}>{item.score.toFixed(1)}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rcol">
              <div className="vpanel">
                <div className="phead">
                  <div className="ptitle">Vendor Terbaik (Rekap)</div>
                  <div className="ptag">Top 4 Bulan Ini</div>
                </div>
                <div className="vitem">
                  <div className="vlogo" style={{background:'var(--bdim)', color:'var(--blue)', borderColor:'rgba(96,165,250,0.2)'}}>PN</div>
                  <div><div className="vname">PT. Pangan Nusantara</div><div className="vtype">Daging & Susu</div></div>
                  <div className="vscore" style={{color:'var(--blue)'}}>9,7</div>
                </div>
                <div className="vitem">
                  <div className="vlogo" style={{background:'var(--ydim)', color:'var(--yellow)', borderColor:'rgba(251,191,36,0.2)'}}>MB</div>
                  <div><div className="vname">Mitra Bumi Segar</div><div className="vtype">Biji-bijian Organik</div></div>
                  <div className="vscore" style={{color:'var(--yellow)'}}>9,5</div>
                </div>
                <div className="vitem">
                  <div className="vlogo" style={{background:'var(--gdim)', color:'var(--green)', borderColor:'rgba(61,220,132,0.2)'}}>GD</div>
                  <div><div className="vname">Global Dairy Supply</div><div className="vtype">Rantai Dingin</div></div>
                  <div className="vscore" style={{color:'var(--green)'}}>9,1</div>
                </div>
                <div className="vitem">
                  <div className="vlogo" style={{background:'var(--rdim)', color:'var(--red)', borderColor:'rgba(248,113,113,0.2)'}}>AS</div>
                  <div><div className="vname">Agro Segar Indo</div><div className="vtype">Sayur Tani Lokal</div></div>
                  <div className="vscore" style={{color:'var(--red)'}}>8,7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
