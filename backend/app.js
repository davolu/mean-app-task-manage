const express = require('express');
const app   = express();
const mongoose = require("./database/mongoose");

const List = require("./database/models/list");
const Task = require("./database/models/task");


app.use ((req, res, next) =>{
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
});

app.use(express.json());


app.get("/lists", (req, res)=>{
   Task.find({})
   .then( lists => res.send(lists))
   .catch(error => console.log(error));
})

app.post("/lists", (req, res)=>{

   ( new Task.create({
      'title' : req.body.title
   })).save()


})
app.listen(3000,()=>{
   console.log("Connected on Port 3000");
},)