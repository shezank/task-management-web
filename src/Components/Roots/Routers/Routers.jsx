import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import ErrorPages from '../../Pages/ErrorPages/ErrorPages';
import Dashboard from '../../Pages/Users/Dashboard/Dashboard';

  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPages></ErrorPages>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/Register',
          element: <Register/>
        },
      ]
    },

    {
      path:'/Dashboard',
      element: <Dashboard></Dashboard>
    }
  ]);

export default Routers;