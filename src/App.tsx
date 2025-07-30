import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Preferences from './pages/Preferences';
import Recommendations from './pages/Recommendations';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <Chatbot />
    </Router>
  );
};

export default App;