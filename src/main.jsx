import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

const VercelInsights = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/_vercel/insights/script.js';
    script.defer = true;
    script.dataset.sdkn = '@vercel/analytics';
    script.dataset.sdkv = '1.0.0';
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <VercelInsights />
    </BrowserRouter>
  </React.StrictMode>,
);
