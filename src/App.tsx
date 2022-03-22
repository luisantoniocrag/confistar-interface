import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home, Stats } from './pages';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
