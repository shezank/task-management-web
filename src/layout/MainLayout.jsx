import React, { useEffect } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import AOS from 'aos'; 

const MainLayout = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;