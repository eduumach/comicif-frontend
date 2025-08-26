import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhotoProcessorPage from './pages/PhotoProcessorPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heroi" element={<PhotoProcessorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;