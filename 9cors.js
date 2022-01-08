import express from 'express';
import cors from 'cors';

const app = express();

//  전체 * origin 허용시
// app.use(cors())

app.use(cors(
    // 허용할 도메인 및 url 정보로 배열 형태로 허용 가능
    {origin:['http://127.0.0.1:5000'],
    optionsSuccessStatus:200, // 자동으로 status 설정 안할 시 200으로 응답
    credentials:true // Access-Control-Allow-Credentials:true
    }
))

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);
