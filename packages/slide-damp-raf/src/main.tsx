import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SlideDampContainer from './components/SlideDampContainer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SlideDampContainer damping={0.01}>
      <App />
    </SlideDampContainer>
  </React.StrictMode>
);
