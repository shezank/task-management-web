import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const navlinks = <>
        <Link to='/'><li><button>Home</button></li></Link>
        <Link to='/dashboard'><li><button>Dashboard</button></li></Link>
        <Link to='/dashboard/my-added-task'><li><button>My Task</button></li></Link>
        <Link to='/dashboard/add-task'><li><button>Add Task</button></li></Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Earn With Task</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/Dashboard' className="justify-between">
                                    <li><button>
                                        Dashboard
                                    </button></li>
                                </Link>
                                <button onClick={() => logout()}>Logout</button>
                            </ul>
                        </div> :
                        <Link to='/login'>
                            <a className="btn">Login</a>
                        </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;