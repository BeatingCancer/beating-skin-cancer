import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Melanoma from './pages/Melanoma';
import MelanomaStageMeaning from './pages/MelanomaStageMeaning';
import MelanomaTreatmentOptions from './pages/MelanomaTreatmentOptions';
import SentinelLymphNode from './pages/SentinelLymphNode';
import MelanomaAfterDiagnosis from './pages/MelanomaAfterDiagnosis';
import SquamousCellCarcinoma from './pages/SquamousCellCarcinoma';
import BasalCellCarcinoma from './pages/BasalCellCarcinoma';
import BCCBiopsyMeaning from './pages/BCCBiopsyMeaning';
import BCCTypes from './pages/BCCTypes';
import ActinicKeratosis from './pages/ActinicKeratosis';
import AtypicalNevi from './pages/AtypicalNevi';
import Prevention from './pages/Prevention';
import About from './pages/About';
import SmartQuestions from './pages/SmartQuestions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Navigate from './pages/Navigate';

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
          <Route path="/melanoma/sentinel-lymph-node-biopsy" element={<SentinelLymphNode />} />
          <Route path="/melanoma/what-to-expect-after-diagnosis" element={<MelanomaAfterDiagnosis />} />
          <Route path="/squamous-cell-carcinoma" element={<SquamousCellCarcinoma />} />
          <Route path="/basal-cell-carcinoma" element={<BasalCellCarcinoma />} />
          <Route path="/basal-cell-carcinoma/biopsy-meaning" element={<BCCBiopsyMeaning />} />
          <Route path="/basal-cell-carcinoma/types" element={<BCCTypes />} />
        
          <Route path="/actinic-keratosis" element={<ActinicKeratosis />} />
          <Route path="/atypical-nevi" element={<AtypicalNevi />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/about" element={<About />} />
          <Route path="/questions-to-ask" element={<SmartQuestions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/navigate" element={<Navigate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
