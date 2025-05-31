import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Pedidos from './Pedidos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
 



      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Pedidos" element={<Pedidos />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
