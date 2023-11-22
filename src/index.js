import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SidebarProvider from './components/context/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);

