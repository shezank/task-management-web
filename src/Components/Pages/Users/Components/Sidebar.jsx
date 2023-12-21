import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBookOpen, FaCartArrowDown, FaFirstOrder, FaHome, FaIceCream, FaList, FaRProject, FaRunning, FaStar, FaStreetView, FaUser, FaUserCircle, FaWallet } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div>
            <div className='w-72 min-h-screen bg-red-500'>
                <h1 className='text-center text-2xl text-white'>Bistro Boss Dashboard</h1>
                <ul className='menu space-y-5'>
                    { <>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/adminHome'> <FaHome></FaHome> Admin </NavLink></li>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/allparcel'> <FaBookOpen></FaBookOpen>Parcels</NavLink></li>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/deliverymans'> <FaRunning></FaRunning> Delivery Mans</NavLink></li>
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/dashboard/allusers'> <FaUser></FaUser>Users</NavLink></li>
                        <hr />
                        <li className='bg-slate-100 text-xl font-bold'><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                        
                    </>
                    }
                    


                </ul>
            </div>
        </div>
    );
};

export default Sidebar;