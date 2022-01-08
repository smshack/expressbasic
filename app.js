import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
    // 동기적인 함수를 호출하는 경우에는
    // try catch문으로 감싸고
    // catch 에서 에러를 던저준다
  // 1.
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  // });

  // 2.
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    // res.sendStatus(404);
    res.status(404).send('File not found')
  }
});
// 프로미스 코드일 경우
app.get('/file2', (req, res) => {
    // 비동기적인 처리일 경우
    // then
    // catch로 처리를 해야됨
    //처리할 경우 콜백함수로 에러가 던져졌기 때문에
    //  try catch로 외부에서 처리할 수 없고
    // 콜백 함수 내에서 에러를 처리해 줘야 함
  fsAsync
    .readFile('/file2.txt') //
    .catch((error) => {
    //   res.sendStatus(404);
    res.status(404).send('File2 not found')
    });
});

app.get('/file3', async (req, res) => {
    // 코드 자체는 동기처럼 처리이지만
    // 함수 자체는 Promise로 감싸지기 때문에 인식이 안됨
    // get file3 {} 블록 함수는 Promise로 되기 때문에 
    // try  catch를 이용해서 잡아야 함
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch {
    // res.sendStatus(404);
    res.status(404).send('File3 not found')
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
