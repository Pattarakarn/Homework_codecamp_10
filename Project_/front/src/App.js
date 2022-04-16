import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import LocalStorageService from './services/localStorageService';

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} />
      {/* <PrivateRoutes role="guest" /> */}
      {/* <PrivateRoutes role="NonCath" /> */}
      {/* <PrivateRoutes role="OPD" /> */}
      {/* <PrivateRoutes role="Supervisor" /> */}
      {/* <PrivateRoutes role="OR" /> */}
      {/* <PrivateRoutes role="user" /> */}
    </div>
  );
}

export default App;
