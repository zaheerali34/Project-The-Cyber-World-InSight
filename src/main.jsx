import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contribute from './Components/Contribute/Contribute.jsx'
import New from './Components/New/New.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home/>,
      },

      {
        path: 'about',
        element: <About/>,
      },

      {
        path: 'contribute',
        element: <Contribute/>,
      },

      {
        path: "New",
        element: <New />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
