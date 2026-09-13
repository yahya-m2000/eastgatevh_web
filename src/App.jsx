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
import TeamPage from './pages/TeamPage';

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
        <Route path="/team" element={<TeamPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    <Analytics />
  </BrandIntro>
);

export default App;
