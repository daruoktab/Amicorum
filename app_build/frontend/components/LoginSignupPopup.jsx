import React from "react";
import { useNavigate } from "react-router-dom";

function LoginSignupPopup({ onClose, setRole }) {
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    onClose();
    if (selectedRole === "user") {
      navigate("/dashboard");
    } else if (selectedRole === "vendor") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="popup-left">
          <img
            src="/illustration_gizi.png"
            alt="Ilustrasi Makan Bergizi"
            className="popup-illustration"
          />
        </div>

        <div className="popup-right">
          <img
            src="/Logo_Badan_Gizi_Nasional_(2024).png"
            alt="Logo Badan Gizi Nasional"
            className="popup-logo-img"
          />

          <h2 className="popup-title">Pilih Akses Simulasi</h2>
          <p className="popup-subtitle">
            Silakan pilih peran Anda untuk mengakses <b>Dasbor P3MBG</b>
          </p>

          <div className="role-cards">
            <div
              className="rcard admin"
              onClick={() => handleRoleSelect("admin")}
            >
              <div className="rc-icon">🏛️</div>
              <div className="rc-body">
                <h3>Admin Pusat (Pemerintah)</h3>
                <p>
                  Akses ke seluruh data 142 Dapur, analitik makro, dan
                  operasional pengawasan gizi skala nasional.
                </p>
              </div>
            </div>

            <div
              className="rcard vendor"
              onClick={() => handleRoleSelect("vendor")}
            >
              <div className="rc-icon">🍳</div>
              <div className="rc-body">
                <h3>Vendor (Dapur A)</h3>
                <p>
                  Ruang manajerial untuk memantau performa dapur pribadi,
                  komplain sentimen, dan alokasi anggaran khusus.
                </p>
              </div>
            </div>

            <div
              className="rcard public"
              onClick={() => handleRoleSelect("user")}
            >
              <div className="rc-icon">📱</div>
              <div className="rc-body">
                <h3>Publik (Masyarakat)</h3>
                <p>
                  Akses pelaporan dan aspirasi transparan. Cek profil fasilitas
                  regional terdekat tanpa data anggaran sensitif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupPopup;
