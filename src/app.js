const express = require("express");

const app = express()

app.get("/user",(req,res) => {
    res.send({myname:"sanjay",age:"100"})
});

app.post("/user",(req,res) => {
    res.send("add data to server ")
});

app.delete("/user",(req,res)=>{
    res.send("data deleted")
})

app.use("/home/new",(req,res)=>{
    res.send("hello home from new node js");
});




app.listen(7777, ()=> {
    console.log("server is successfully run on port 7777")
})
