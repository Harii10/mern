import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Components/Login.jsx'
import Layout from './Components/Layout.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Lists from './Components/Lists.jsx'

const router = createBrowserRouter([
  {
    path: '/mern',
    element: <Login/>
  },
  {
    path: '/mern',
    element: <Layout/>,
    children:[
      {
        path: 'dashboard',
        element: <Dashboard/>
      },
      {
        path: 'employeelist',
        element: <Lists/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
