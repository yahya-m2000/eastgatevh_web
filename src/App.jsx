import { Analytics } from '@vercel/analytics/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import BrandIntro from './components/BrandIntro';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FounderPartnershipsPage from './pages/FounderPartnershipsPage';
import HomePage from './pages/HomePage';
import InsightsPage from './pages/InsightsPage';
import InvestmentModelPage from './pages/InvestmentModelPage';
import PortfolioPage from './pages/PortfolioPage';
import RegionsPage from './pages/RegionsPage';

const App = () => (
  <BrandIntro>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/investment-model" element={<InvestmentModelPage />} />
        <Route path="/founder-partnerships" element={<FounderPartnershipsPage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {/* Team page hidden pending owner review: /team falls through to the redirect below.
            src/pages/TeamPage.jsx and its content remain in place to restore it. */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    <Analytics />
  </BrandIntro>
);

export default App;
