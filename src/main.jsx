import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Notfound from './pages/Notfound.jsx'
import Home from './pages/Home.jsx'

const baseName = import.meta.env.MODE === "development" ? "/" : "/Portfolio";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Notfound/>,
  },
], {
  basename: baseName
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);