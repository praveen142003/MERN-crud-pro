const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/User')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/crud")
console.log('connected')

app.get("/" , (req , res) => {
    UserModel.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.post("/createUser" , (req ,res)=>{
    console.log(req.body)
     UserModel.create(req.body)
    .then( users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUser/:id" , (req ,res) => {
    const id = req.params.id;
    UserModel.findById({_id :id})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    })
  app.put("/updateUser/:id" ,(req ,res) => {
           const id = req.params.id;
           UserModel.findByIdAndUpdate({_id : id} , {
            name : req.body.name,
             age : req.body.age,
            email: req.body.email
           })
           .then(response => res.json(response) )
           .catch(err => res.json(err))
  })

  app.delete("/deleteUser/:id" , (req , res)=>{
      const id = req.params.id;
      UserModel.findByIdAndDelete({_id : id})
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })

app.listen(3001 ,()=> {
    console.log("server is running")
})