import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Melanoma from './pages/Melanoma';
import MelanomaStageMeaning from './pages/MelanomaStageMeaning';
import MelanomaTreatmentOptions from './pages/MelanomaTreatmentOptions';
import SquamousCellCarcinoma from './pages/SquamousCellCarcinoma';
import BasalCellCarcinoma from './pages/BasalCellCarcinoma';
import ActinicKeratosis from './pages/ActinicKeratosis';
import Prevention from './pages/Prevention';
import About from './pages/About';
import SmartQuestions from './pages/SmartQuestions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ivory">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/melanoma" element={<Melanoma />} />
          <Route path="/melanoma/melanoma-stage-meaning" element={<MelanomaStageMeaning />} />
          <Route path="/melanoma/melanoma-treatment-options" element={<MelanomaTreatmentOptions />} />
          <Route path="/squamous-cell-carcinoma" element={<SquamousCellCarcinoma />} />
          <Route path="/basal-cell-carcinoma" element={<BasalCellCarcinoma />} />
          <Route path="/actinic-keratosis" element={<ActinicKeratosis />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/about" element={<About />} />
          <Route path="/questions-to-ask" element={<SmartQuestions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
