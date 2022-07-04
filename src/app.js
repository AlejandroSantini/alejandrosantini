import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Layout />} />
        <Route exact path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
