import React, { useEffect, useState } from 'react'
import hlogo from './images/hospital.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.css' 
import {Link} from 'react-router-dom';
import axios from 'axios'

function Users() {
    const [user , setUser] = useState([])
    const date = new Date()
    const tdate = date.getDate()
    const tmonth = date.getUTCMonth()
 
  useEffect(()=> {
      axios.get("http://localhost:3001")
      .then((result) => setUser(result.data))
      .catch((err) =>  console.log(err))
     
  } , [])
  const handleDel = (id) => {
         axios.delete(`http://localhost:3001/deleteUser/${id}`)
         .then(result => {console.log(result)
            window.location.reload()
         })
         .catch(err => console.log(err))
  }
  return (
    <>
    {/* <div className='d-flex w-100 justify-content-center bg-primary rounded-top  me-5 ms-0'>
        <img src={hlogo} />  <h3 className='head'>ABC HOSPITAL</h3> 
     </div> */}
    <div className ='d-flex w-100  bg-primary justify-content-center align-items-center rounded me-5 ms-0 p-3'>
        <div className='w-80 bg-white rounded p-3 mt-3'>
        <Link to ='/create' className='btn btn-success add ' >Add +</Link>
        {/* <span style={{fontWeight:"bold"}}> Date:&nbsp;{`${tdate}/${tmonth}`}</span> */}
        <table className='table mt-3 w-100'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                user.map((per , ind)=>{
                    return <tr>
                        <td>{per.name}</td>
                        <td>{per.age}</td>
                        <td>{per.email}</td>
                        
                        <td> <Link to={`/update/${per._id}`} className='btn btn-primary'>Edit</Link>&nbsp;&nbsp;&nbsp;
                            <button className='btn btn-danger' onClick={()=> handleDel(per._id)}>Delete</button></td>
                    </tr>
                })
               } 
            </tbody>
        </table>
        </div>
    </div>
      
    </>
  )
}

export default Users
