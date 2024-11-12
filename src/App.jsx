// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GastoProvider } from './context/GastoContext';
import GastoPage from './pages/GastoPage';
import AddGastoPage from './pages/AddGastoPage';
import EditGastoPage from './pages/EditGastoPage';

const App = () => {
  return (
    <GastoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GastoPage />} />
          <Route path="/gastos/adicionar" element={<AddGastoPage />} />
          <Route path="/gastos/editar/:id" element={<EditGastoPage />} />
        </Routes>
      </Router>
    </GastoProvider>
  );
};

export default App;
