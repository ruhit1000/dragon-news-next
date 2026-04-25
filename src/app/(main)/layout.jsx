import BreakingNews from '@/components/shared/BreakingNews';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;