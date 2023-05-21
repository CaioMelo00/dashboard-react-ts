import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';

import Home from './pages/home';
import RegisterInfos from './pages/resume/RegisterInfos';
import RegisterExp from './pages/resume/RegisterExp';
import ListingExp from './pages/resume/ListingExp';
import RegisterPortfolio from './pages/portfolio/RegisterPortfolio';
import ListingPortfolio from './pages/portfolio/ListingPortfolio';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume/infos/register' element={<RegisterInfos />} />
          <Route path='/resume/experiences/register' element={<RegisterExp />} />
          <Route path='/resume/experiences/listing' element={<ListingExp />} />
          <Route path='/portfolio/register' element={<RegisterPortfolio />} />
          <Route path='/portfolio/listing' element={<ListingPortfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
