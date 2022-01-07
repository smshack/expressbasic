import express from "express";
const app = express();
const port = 8080

app.get('/',(req,res,next)=>{
    console.log('get')
    res.send('hello world')
})



app.listen(port)