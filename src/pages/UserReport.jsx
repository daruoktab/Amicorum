import { useState } from 'react';
import './UserReport.css';

export default function UserReport({ onLogout }) {
  const [selectedDapur, setSelectedDapur] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [reportText, setReportText] = useState('');
  const [history, setHistory] = useState([
    { id: '#REP-992', dapur: 'Satuan Pelayanan Dapur A', sent: 'positif', txt: 'Lauk ayam suwir dan sayurnya segar! Anak saya sangat suka.', status: 'Verified', date: 'Hari ini, 09:12' },
    { id: '#REP-941', dapur: 'Central Kitchen Jkt', sent: 'negatif', txt: 'Keterlambatan distribusi 30 menit ke posko wilayah Cilandak Timur.', status: 'Processing', date: 'Kemarin, 11:45' },
    { id: '#REP-883', dapur: 'Dapur Sehat Tebet', sent: 'netral', txt: 'Rasa sudah oke, tapi porsi karbonya mungkin bisa ditambah sedikit.', status: 'Verified', date: '3 hari lalu' },
    { id: '#REP-812', dapur: 'Satuan Pelayanan Dapur A', sent: 'positif', txt: 'Kemasan sangat rapi dan ramah lingkungan (zero waste).', status: 'Verified', date: 'Minggu lalu' },
    { id: '#REP-705', dapur: 'Dapur Melati', sent: 'negatif', txt: 'Daging agak alot dan kurang bumbu hari ini.', status: 'Rejected', date: 'Bulan lalu' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDapur || !sentiment || !reportText) return alert('Mohon lengkapi seluruh field laporan.');
    
    const newReport = {
      id: '#REP-' + Math.floor(Math.random() * 900 + 100),
      dapur: selectedDapur === 'dapur-a' ? 'Satuan Pelayanan Dapur A' : 'Central Kitchen Jkt',
      sent: sentiment,
      txt: reportText,
      status: 'Pending',
      date: 'Baru saja'
    };
    
    setHistory([newReport, ...history]);
    setReportText('');
    setSentiment('');
    alert('Laporan berhasil direkam dan masuk tahap validasi NLP.');
  };

  return (
    <div className="ur-app">
      <div className="ur-topnav">
        <div className="ur-logo">SPPG Civic</div>
        <div className="ur-actions">
          <div className="ur-loc">📍 Jakarta Selatan</div>
          <button className="ur-logout" onClick={onLogout}>Keluar</button>
        </div>
      </div>

      <div className="ur-container">
        <div className="ur-header">
          <h1>Portal Aspirasi Masyarakat</h1>
          <p>Laporkan pantauan program Makan Bergizi Gratis (MBG) di wilayah operasional Anda secara transparan.</p>
        </div>

        <div className="ur-grid">
          <div className="ur-form-card">
            <h3>Buat Laporan Baru</h3>
            <form onSubmit={handleSubmit}>
              <div className="fg">
                <label>Pilih Fasilitas Dapur (Regional Anda)</label>
                <select value={selectedDapur} onChange={e => setSelectedDapur(e.target.value)} className="ur-input">
                  <option value="" disabled>-- Pilih Dapur Jakarta --</option>
                  <option value="dapur-a">Satuan Pelayanan Dapur A (Kebayoran Baru)</option>
                  <option value="central-jkt">Central Kitchen Jkt (Pulogadung)</option>
                  <option value="dapur-tebet">Dapur Sehat Tebet (Tebet)</option>
                  <option value="dapur-cempaka">Dapur Cempaka (Kemayoran)</option>
                  <option value="dapur-menteng">Dapur Menteng Utama (Menteng)</option>
                </select>
              </div>

              <div className="fg">
                <label>Klasifikasi Sentimen/Tanggapan</label>
                <div className="ur-sentiments">
                  <button type="button" className={`sbtn ${sentiment==='positif'?'pos':''}`} onClick={()=>setSentiment('positif')}>😊 Positif</button>
                  <button type="button" className={`sbtn ${sentiment==='netral'?'neu':''}`} onClick={()=>setSentiment('netral')}>😐 Netral</button>
                  <button type="button" className={`sbtn ${sentiment==='negatif'?'neg':''}`} onClick={()=>setSentiment('negatif')}>⚠️ Komplain</button>
                </div>
              </div>

              <div className="fg">
                <label>Detail Laporan</label>
                <textarea 
                  value={reportText} 
                  onChange={e => setReportText(e.target.value)}
                  className="ur-input ta" 
                  placeholder="Deskripsikan porsi, kualitas rasa, higienitas, atau ketepatan waktu distribusi hari ini..."
                ></textarea>
              </div>

              <button type="submit" className="ur-submit">Kirim Laporan Validasi ↗</button>
            </form>
          </div>

          <div className="ur-side">
            <div className="ur-info-card">
              <h4>Transparansi Publik: Dapur A</h4>
              <p>Sentimen Masyarakat Mingguan (Word Cloud AI):</p>
              <div className="ur-wc">
                <span style={{color:'var(--green)', fontSize:18, fontWeight:600}}>Kualitas Prima</span>
                <span style={{color:'var(--blue)', fontSize:14}}>&nbsp;Distribusi Cepat</span>
                <span style={{color:'var(--tx2)', fontSize:12}}>&nbsp;Zero Waste</span>
                <span style={{color:'var(--orange)', fontSize:15}}>&nbsp;Protein Tinggi</span>
              </div>
              <div className="ur-mask">
                [Data RAB dan Audit Terenkripsi — Akses Hanya Pemerintah]
              </div>
            </div>

            <div className="ur-history">
              <h4>Riwayat Aspirasi Anda</h4>
              {history.map((h, i) => (
                <div className="ur-hist-item" key={i}>
                  <div className="uhi-head">
                    <span className="uhi-id">{h.id}</span>
                    <span className={`uhi-status ${h.status.toLowerCase()}`}>{h.status}</span>
                  </div>
                  <div className="uhi-dapur">{h.dapur}</div>
                  <div className="uhi-txt">"{h.txt}"</div>
                  <div className="uhi-date">{h.date} - Sentimen: <span style={{textTransform:'capitalize'}}>{h.sent}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
