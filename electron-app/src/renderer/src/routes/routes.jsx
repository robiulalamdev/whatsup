/* eslint-disable prettier/prettier */
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import MainLayout from '../layouts/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])
