import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.scss";

import Home from './Home';
import Layout from './Layout';
import Sobre from './Sobre';
import Contato from './Contato';
import Servicos from './Servicos';
import NoPage from './NoPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className='all'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
         
          <Route path="servicos" element={<Servicos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  </StrictMode>
);
