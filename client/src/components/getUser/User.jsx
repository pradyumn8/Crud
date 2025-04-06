import React, { useEffect, useState } from 'react'
import "./User.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const response=await axios.get("http://localhost:5000/api/getAll")
            setUsers(response.data);
        }
        fetchData();
    },[])
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
                {
                    users.map((user, index)=>{
                        return(
                            <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td className='actionBtn'>
                                <button>Delete</button>
                                <Link to={`/edit/${user._id}`}>Edit</Link>
                            </td>
                        </tr>
                        )
                    })
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default User