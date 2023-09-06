import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      // {
      //   path: '/Nav',
      //   element: <Nav />,
      // },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);


 


ReactDOM.createRoot(document.getElementById('root')).render(
   
   
    <RouterProvider router={router} />
);
