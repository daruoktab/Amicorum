import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login({ setRole }) {
  const nav = useNavigate();

  const handleLogin = (roleName) => {
    setRole(roleName);
    if (roleName === 'user' || roleName === 'admin') {
      nav('/dashboard');
    } else {
      nav('/dapur/sppg-jkt-001'); // Vendor directly to their specific kitchen
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="l-title">SPPG Portal</h1>
        <p className="l-sub">Hackathon MVP - Silakan Pilih Simulasi Akses</p>
        
        <div className="role-cards">
          <div className="rcard admin" onClick={() => handleLogin('admin')}>
            <div className="rc-icon">🏛️</div>
            <div className="rc-body">
              <h3>Admin Pusat (Pemerintah)</h3>
              <p>Akses ke seluruh data 142 Dapur, analitik makro, dan operasional pengawasan gizi skala nasional.</p>
            </div>
          </div>

          <div className="rcard vendor" onClick={() => handleLogin('vendor')}>
            <div className="rc-icon">🍳</div>
            <div className="rc-body">
              <h3>Vendor (Dapur A)</h3>
              <p>Ruang manajerial untuk memantau performa dapur pribadi, komplain sentimen, dan alokasi anggaran khusus.</p>
            </div>
          </div>

          <div className="rcard public" onClick={() => handleLogin('user')}>
            <div className="rc-icon">📱</div>
            <div className="rc-body">
              <h3>Publik (Masyarakat)</h3>
              <p>Akses pelaporan dan aspirasi transparan. Cek profil fasilitas regional terdekat tanpa data anggaran sensitif.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
