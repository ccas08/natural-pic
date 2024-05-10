import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ImageProvider } from './components/imageContext';
import Gallery from './components/gallery';
import Favorites from './components/favorite';

function App() {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </ImageProvider>
  );
}

export default App;


