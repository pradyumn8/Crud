import React from 'react'
import "./User.css"
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='table'>
        <Link to={"/add"} className='addButton'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>User name</th>
                    <th>User Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>Shubham</td>
                    <td>Shubham@gmail.com</td>
                    <td className='actionBtn'>
                        <button>Delete</button>
                        <Link to={'/edit'}>Edit</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default User