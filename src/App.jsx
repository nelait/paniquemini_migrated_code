// Main app with routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ExampleOne from './pages/ExampleOne';
import ExampleTwo from './pages/ExampleTwo';
import Songs from './pages/Songs';
import EditSong from './pages/EditSong';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/home/exampleone" element={<ExampleOne />} />
          <Route path="/home/exampletwo" element={<ExampleTwo />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/editsong/:id" element={<EditSong />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
