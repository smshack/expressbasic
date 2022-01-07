import express from "express";
import cookieParser from 'cookie-parser'

const app = express();
const port = 8080

app.use(cookieParser())

app.get('/sky/:id',(req,res,next)=>{
    const reqs ={
        path:req.path,
        headers:req.headers,
        params:req.params,
        query:req.query,
        cookie:req.cookies
    }
    res.setHeader('key','value')
    res.status(200).send(reqs)
})



app.listen(port)