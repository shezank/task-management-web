import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from '../Root/Root';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import ErrorPages from '../../Pages/ErrorPages/ErrorPages';
import PrivateRoute from '../../Sharde/PrivateRoute/PrivateRoute';
import TaskManagement from '../../Pages/Dashboard/TaskManagement/TaskManagement';
import TaskForm from '../../Pages/Dashboard/TaskForm/TaskForm';
import Mytask from '../../Pages/Dashboard/MyTask/Mytask';
import UpdateTask from '../../Pages/Dashboard/UpdateTask/UpdateTask';
import Dashboard from '../../../layout/Dashboard';

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/Register',
        element: <Register />
      },
    ]
  },

  {
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/',
        element: <PrivateRoute><TaskManagement></TaskManagement></PrivateRoute> 
      },
      {
        path: "/dashboard/add-task/",
        element: <PrivateRoute><TaskForm></TaskForm></PrivateRoute> 
      },
      {
        path: "/dashboard/my-added-task/",
        element: <PrivateRoute><Mytask></Mytask></PrivateRoute> 
      },
      {
        path: "/dashboard/update-task/:id",
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://task-managment-server-gray.vercel.app/task-details/${params?.id}`)
      },
    ]
  }
]);

export default Routers;