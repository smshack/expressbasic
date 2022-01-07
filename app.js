import express from "express";
import cookieParser from 'cookie-parser'

const app = express();
const port = 8080

// use 모든 경로에 적용되야할 사항
// all 해당 경로에 맞는 get,post,delete, put ....  등의 모든 요청 
app.use(cookieParser())

app.get(
    '/',
    (req,res,next)=>{
        console.log('first')
        next()
        // next('route')  그 다음 미들웨어는 건너뜀
        next(new Error('error'))

    },
    (req,res,next)=>{
        console.log('second')
        next()
    },

)

app.get('/',(req,res,next)=>{
    return res.send('third')
})

// 아무데서도 처리가 안됬을 경우
app.use((req,res,next)=>{
    return res.status(404).send('Not available!')
})
// 에러가 발생했을 때 
app.use((error,req,res,next)=>{
    console.error(error)
    return res.status(500).send('Sorry! try later!')
})
app.listen(port)