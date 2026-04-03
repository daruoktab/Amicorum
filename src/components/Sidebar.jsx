import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const isNavActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <div className="logo-name">SPPG MONITOR</div>
          <div className="logo-sub">Analytical Architect v1.0</div>
        </div>
        <nav className="nav">
          <div className="nav-grp">Ikhtisar</div>
          <Link to="/" className={`ni ${isNavActive('/') ? 'on' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="1" width="6" height="6" rx="1.5" />
              <rect x="9" y="1" width="6" height="6" rx="1.5" />
              <rect x="1" y="9" width="6" height="6" rx="1.5" />
              <rect x="9" y="9" width="6" height="6" rx="1.5" />
            </svg>
            Ikhtisar Pasar
          </Link>
          <Link to="/dapur/sppg-jkt-001" className={`ni ${isNavActive('/dapur') ? 'on' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 2v12M2 8h12" />
              <circle cx="8" cy="8" r="6" />
            </svg>
            Analitik Dapur
          </Link>
          <div className="ni">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 13L6 7l3 4 2-3 3 5" />
            </svg>
            Pemantauan Vendor
          </div>
          <div className="nav-sep"></div>
          <div className="nav-grp">Laporan</div>
          <div className="ni">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h8M4 8h5M4 12h3" />
              <rect x="1" y="1" width="14" height="14" rx="2" />
            </svg>
            Audit Gizi
          </div>
        </nav>
        <div className="sfooter">
          <div className="ava">AE</div>
          <div>
            <div className="uname">Admin Eksekutif</div>
            <div className="urole">SPPG Pusat</div>
          </div>
        </div>
      </div>
    </>
  );
}
