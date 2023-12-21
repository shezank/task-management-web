import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Sharde/Navbar/Navbar';
import Footer from '../../Sharde/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;