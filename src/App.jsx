import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhoWeHelp from './pages/WhoWeHelp';
import Training from './pages/Training';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/who-we-help" element={<WhoWeHelp />} />
          <Route path="/training" element={<Training />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Unknown paths fall back to home, as the original site did */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
