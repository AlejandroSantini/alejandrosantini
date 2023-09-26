import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Layout />} basename={process.env.PUBLIC_URL} />
        <Route exact path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
