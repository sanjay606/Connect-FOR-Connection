const express = require("express");

const app = express()


// app.use("/",(req,res)=>{
//     res.send("hello sanjay from node js");
// });


app.use("/home",(req,res)=>{
    res.send("hello home from node js");
});


app.use("/about",(req,res)=>{
    res.send("hello about from node js");
});

app.listen(7777, ()=> {
    console.log("server is successfully run on port 7777")
})
