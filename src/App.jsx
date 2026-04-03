import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import KitchenDetail from './pages/KitchenDetail';
import UserReport from './pages/UserReport';

function App() {
  const [role, setRole] = useState(localStorage.getItem('sppg_role') || null);

  useEffect(() => {
    if (role) localStorage.setItem('sppg_role', role);
  }, [role]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setRole={setRole} />} />
        
        {/* Conditional Routing Based on Role */}
        {role ? (
          <>
            <Route path="/dashboard" element={<Dashboard role={role} onLogout={() => { setRole(null); localStorage.removeItem('sppg_role') }} />} />
            <Route path="/dapur/:id" element={<KitchenDetail role={role} onLogout={() => { setRole(null); localStorage.removeItem('sppg_role') }} />} />
            <Route path="/lapor" element={<UserReport onLogout={() => { setRole(null); localStorage.removeItem('sppg_role') }} />} />
            <Route path="*" element={<Navigate to={role === 'vendor' ? '/dapur/sppg-jkt-001' : '/dashboard'} replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
