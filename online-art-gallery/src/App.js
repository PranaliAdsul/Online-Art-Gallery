import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Component/Header/header.js';
import Home from './Component/Home/home.js';
import Cart from './Component/Cart/Cart.js';
import AddArtwork from './Component/ArtWork/AddArtwork.js';
import Artworks from './Component/ArtWork/Artworks.js';
import Artists from './Component/Artists/Artists.js';
import AddArtist from './Component/Artists/AddArtist.js';
function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artworks" element={<Artworks />} />
      <Route path="/artworks/add" element={<AddArtwork />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/add" element={<AddArtist />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  );
};

export default App;