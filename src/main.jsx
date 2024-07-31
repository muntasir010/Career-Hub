import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root'
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage'
import JobDetails from './Components/JobDetails'
import AppliedJobs from './Components/AppliedJobs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs/>,
        loader: () => fetch('/jobs.json')
      },
      {                                                   
        path: '/job/:id',
        element: <JobDetails/>,
        loader: () => fetch('../jobs.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
