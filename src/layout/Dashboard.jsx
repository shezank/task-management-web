import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import 'flowbite';
import { MdLogout } from "react-icons/md";
import Swal from 'sweetalert2';
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaClipboardList, FaDonate } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Components/Sharde/AuthProvider/AuthProvider';


const Dashboard = () => {

   const navigate = useNavigate();

   const {logoutUser, user} = useContext(AuthContext);
   console.log(user)

   const handleLogout = ()=> {
    logoutUser()
       .then( () => {
         setTimeout(() => {
           Swal.fire({
               title: "Logout Success",
               icon: "success",
               showConfirmButton: false,
               timer: 1500
             });
         }, 200);
         navigate('/') 
       })
       .catch(error => console.error(error))
     }


    return (
        <>
        {/* <Helmet>
         <title>
         Welcome to Task Management Dashboard
         </title>
        </Helmet> */}
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
            <li>
            <NavLink to={'/dashboard/'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3">Dashboard</span>
            </NavLink>
         </li>
         <li>
            <NavLink to={'/dashboard/add-task'} className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group' >
               <MdFormatListBulletedAdd className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
               <span className="flex-1 ms-3 whitespace-nowrap">Add Task</span>
               {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </NavLink>
         </li>
         <li>
            <NavLink to={'/dashboard/my-added-task/'}  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <FaClipboardList className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
               <span className="flex-1 ms-3 whitespace-nowrap">My Added Task</span>
            </NavLink>
         </li>
      </ul>
      
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
      <li>
            <NavLink to={'/'}  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
            </NavLink>
    </li>
    <li className='flex items-center gap-2'>
    <img className="w-10 h-10 rounded-full " src={user?.photoURL} alt="user photo"/>
    {user?.displayName || null}
    <br />
    {user?.email}
    </li>
         <li onClick={handleLogout} className='flex items-center cursor-pointer p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'>
         <MdLogout className='mr-2 text-xl' /> Logout
         </li>
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64 ">
   <Outlet/>
</div>

        </>
    );
};

export default Dashboard;