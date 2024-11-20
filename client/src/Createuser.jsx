import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Createuser() {
         const [name , setName] = useState()
         const [age , setAge] = useState()
         const [email , setEmail] = useState()
         const navigate = useNavigate()

         const handleSubmit = (e) => {
          e.preventDefault();
          axios.post("http://localhost:3001/createUser" , {name , age , email})
          .then(() => {
            navigate("/")
          })
          .catch(err => console.log(err))
         }
  return (
    <div className='d-flex  bg-primary rounded p-5 justify-content-center align-items-center' style={{width:'800px'}}>
      <div className=' bg-white rounded p-3' style={{width:'400px'}}>
        <form onSubmit={handleSubmit}>
          <h3>Add User</h3>
          <div className='mb-2 d-flex justify-content-spacearound mt-4 '>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Name' value={name}  onChange={(e)=> setName(e.target.value)} className='form-control w-50 ms-4' />
          </div>
          <div className='mb-2 d-flex justify-content-spacearound mt-4 '>
            <label htmlFor=''>Age</label>
            <input type='number' placeholder='Enter Age' value={age}  onChange={(e)=> setAge(e.target.value)} className='form-control w-50 ms-5' style={{ position: "relative", right: "10px" }} />
          </div>
          <div className='mb-2 d-flex justify-content-spacearound mt-4'>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='Enter Email' value={email}  onChange={(e)=> setEmail(e.target.value)} className='form-control w-50 ms-4' />
          </div>

          <button className='btn btn-success' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Createuser
