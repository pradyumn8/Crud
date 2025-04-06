import React from 'react'
import { Link } from 'react-router-dom'
import "./AddUser.css"

function AddUser() {
    const inputHandler = (e) => {
       const {name,value}= e.target;
       console.log(name);
       console.log(value);
       
    }
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new User</h3>
        <form className='addUserForm'>
            <div className="inputGroup">
                <label htmlFor="fname">First Name</label>
                <input type="text" onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='First Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">First Name</label>
                <input type="text" onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={inputHandler} id='password' name='password' autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <button type='submit'>Add User</button>
             </div>
        </form>
    </div>
  )
}

export default AddUser