const express = require("express");

const app = express()



app.use("/user",(err,req,res,next) => {
    res.send("hello next")
    // next()

});

app.get("/user",(req,res) => {
    res.send("new hlwwwww")
}
)


app.listen(7777, ()=> {
    console.log("server is successfully run on port 7777")
})
