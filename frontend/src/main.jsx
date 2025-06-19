import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'sonner';
import { AuthProvider } from './components/contexts/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
  </AuthProvider>
);
