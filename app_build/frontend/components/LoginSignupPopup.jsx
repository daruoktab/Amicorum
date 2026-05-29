import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSignupPopup({ onClose, setRole }) {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Dummy login action simulating Google Auth success
    const isVendor = window.confirm("Klik 'OK' untuk login sebagai Vendor, atau 'Batal' untuk Admin.");
    if (isVendor) {
      setRole('vendor');
      onClose();
      navigate('/dapur/sppg-jkt-001');
    } else {
      setRole('admin');
      onClose();
      navigate('/dashboard');
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="popup-left">
          <img src="/illustration_gizi.png" alt="Ilustrasi Makan Bergizi" className="popup-illustration" />
        </div>

        <div className="popup-right">
          <img src="/Logo_Badan_Gizi_Nasional_(2024).png" alt="Logo Badan Gizi Nasional" className="popup-logo-img" />
          
          <h2 className="popup-title">Masuk atau daftar</h2>
          <p className="popup-subtitle">
            Untuk dapat mengakses fitur <b>Dasbor P3MBG</b>
          </p>

          <button className="btn-google" onClick={handleGoogleLogin}>
            <div className="google-icon">G</div>
            Continue with Google
          </button>
        </div>

      </div>
    </div>
  );
}

export default LoginSignupPopup;
