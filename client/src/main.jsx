import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Profile from './pages/Profile.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SearchPatient from './pages/patientComponents/SearchPatient.jsx';
import NewPatient from './pages/patientComponents/NewPatient.jsx';
import Patients from './pages/Patients.jsx';
import PatientProfile from './pages/PatientProfile.jsx';

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
    path: '/patients',
    element: <Patients />
  },
  {
    path: 'patients/:id',
    element: <PatientProfile />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
