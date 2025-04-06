import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:"Home page",
    },
    {
      path:"/add",
      element:"User add Page",
    },
    {
      path:"/edit",
      element:"update user page",
    },
  ])
  return (
    <div>
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  )
}

export default App