import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Profile from './pages/Profile.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SearchPatient from './pages/SearchPatient.jsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Homepage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/profile', 
    element: <Profile />,
    children: [
      {
        path: '/profile/:profileId',
        element: <Profile />
      }
    ]
  },
  {
    path: 'searchPatients',
    element: <SearchPatient />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
