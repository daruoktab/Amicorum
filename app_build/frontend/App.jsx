import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import KitchenDetail from './pages/KitchenDetail';
import UserReport from './pages/UserReport';
import PelaporanHarian from './pages/PelaporanHarian';
import PelaporanMingguan from './pages/PelaporanMingguan';
import PerizinanAnggaran from './pages/PerizinanAnggaran';
import PerizinanRelawan from './pages/PerizinanRelawan';
import Riwayat from './pages/Riwayat';

function App() {
  const [role, setRole] = useState(localStorage.getItem('sppg_role') || null);

  useEffect(() => {
    if (role) {
      localStorage.setItem('sppg_role', role);
    } else {
      localStorage.removeItem('sppg_role');
    }
  }, [role]);

  const handleLogout = () => {
    setRole(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing role={role} setRole={setRole} onLogout={handleLogout} />} />
        
        {/* Conditional Routing Based on Role */}
        {role ? (
          <>
            <Route path="/dashboard" element={<Dashboard role={role} onLogout={handleLogout} />} />
            <Route path="/dapur/:id" element={<KitchenDetail role={role} onLogout={handleLogout} />} />
            <Route path="/lapor" element={<UserReport onLogout={handleLogout} />} />
            <Route path="/laporan-harian" element={<PelaporanHarian role={role} onLogout={handleLogout} />} />
            <Route path="/laporan-mingguan" element={<PelaporanMingguan role={role} onLogout={handleLogout} />} />
            <Route path="/perizinan/anggaran" element={<PerizinanAnggaran role={role} onLogout={handleLogout} />} />
            <Route path="/perizinan/relawan" element={<PerizinanRelawan role={role} onLogout={handleLogout} />} />
            <Route path="/riwayat" element={<Riwayat role={role} onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to={role === 'vendor' ? '/dapur/sppg-jkt-001' : '/dashboard'} replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
