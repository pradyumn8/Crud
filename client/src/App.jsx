import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import User from './components/getUser/User';
import AddUser from './components/addUser/AddUser';
import Edit from './components/UpdateUser/Edit';

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<AddUser/>,
    },
    {
      path:"/edit",
      element:<Edit/>,
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