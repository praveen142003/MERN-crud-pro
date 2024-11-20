import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route, } from 'react-router-dom'
import Users from './Users.jsx'
import Createuser from './Createuser.jsx'
import Updateuser from './Updateuser.jsx'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Users />}/>
        <Route path ='/create' element ={<Createuser/>}/>
        <Route path ='/update/:id' element ={<Updateuser/>}/>
        
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
