import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Profile from './pages/Profile.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Patients from './pages/Patients.jsx';
import PatientProfile from './pages/PatientProfile.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AllOrders from './pages/AllOrders.jsx';
import AllGlOrders from './pages/AllGlOrders.jsx';
import AllClOrders from './pages/AllClOrders.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: InMemoryCache,
})

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
  },
  {
    path: '/orders/all',
    element: <AllOrders />
  },
  {
    path: '/orders/glasses',
    element: <AllGlOrders />
  },
  {
    path: '/orders/contacts',
    element: <AllClOrders />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
