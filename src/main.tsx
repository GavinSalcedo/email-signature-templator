import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SideMenu from './components/SideMenu/index.tsx';
import MainLayout from './layout/MainLayout.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainLayout>
      <SideMenu />
      <App />
    </MainLayout>
  </React.StrictMode>,
);
