import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Filter out benign Vite HMR WebSocket connection errors in iframe environment
if (typeof window !== 'undefined') {
  const isWsError = (msg: unknown) => {
    const s = String(msg || '');
    return s.includes('WebSocket') || s.includes('ws://') || s.includes('wss://');
  };

  window.addEventListener('error', (event) => {
    if (isWsError(event.message) || isWsError(event.error)) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    if (isWsError(event.reason)) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });

  const origError = console.error;
  console.error = (...args: unknown[]) => {
    if (args.some((arg) => isWsError(arg))) {
      return;
    }
    origError.apply(console, args);
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
