import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import RegisterInfos from '../pages/resume/RegisterInfos';
import RegisterExp from '../pages/resume/RegisterExp';
import ListingExp from '../pages/resume/ListingExp';
import RegisterPortfolio from '../pages/portfolio/RegisterPortfolio';
import ListingPortfolio from '../pages/portfolio/ListingPortfolio';

import Layout from '../components/layout';
import { useAuth } from '../contexts/AuthContext';

const AuthRoutes: React.FC = () => {

    const { isAuthenticated, isLoading } = useAuth();
    
    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    }

    return (
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
    );
};

export default AuthRoutes;