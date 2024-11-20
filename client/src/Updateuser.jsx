import React ,{useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



function Updateuser() {
  const {id} = useParams()
  const [name , setName] = useState()
  const [age , setAge] = useState()
  const [email , setEmail] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
        axios.get(`http://localhost:3001/getUser/${id}`)
        .then(result => {
          console.log(result)
          setName(result.data.name)
          setAge(result.data.age)
          setEmail(result.data.email)
        })
        .catch(err => console.log(err))
  },[])


  const handleUpdate = (e) =>{
          e.preventDefault();
          axios.put(`http://localhost:3001/updateUser/${id}` ,{name , age , email})
          .then(result => {
            console.log(result)
            navigate('/')
          })
           .catch(err => console.log(err))
  }
  return (
    <div className='d-flex  p-5 bg-primary rounded justify-content-center align-items-center' style={{width:'800px'}} >
    <div className=' bg-white rounded p-3' style={{width:'400px'}}>
    <form onSubmit={handleUpdate} >
      <h3>Update User</h3>
   
    <div className='mb-2 d-flex justify-content-spacearound mt-4 '>
      <label htmlFor=''>Name</label>
      <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control w-50 ms-4'/>
    </div>
    <div className='mb-2 d-flex justify-content-spacearound mt-4 '>
      <label htmlFor=''>Age</label>
      <input type='number' placeholder='Enter Age' value={age}  onChange={(e) => setAge(e.target.value) } className='form-control w-50 ms-5' style={{position:"relative" ,right:"10px"}}/>
    </div>
    <div className='mb-2 d-flex justify-content-spacearound mt-4'>
      <label htmlFor=''>Email</label>
      <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control w-50 ms-4'/>
    </div>
        <button type='submit' className='btn btn-success'>Update</button>
        </form>   
    </div>
      
    </div>
  )
}

export default Updateuser

