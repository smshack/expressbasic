import jwt from 'jsonwebtoken';

const scret = "'Mm+3ZVbHGay;)G2tEJ<;7?^L=g$FC}/"
// 정말 필수적인 데이터만
// 만료할 수 있도록 유효기간을 설정해야 함
const token = jwt.sign({
    id:'userId',
    isAdmin:true,
},scret,
{expiresIn:2}
)

const edited = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
// jwt 토큰 
setTimeout(()=>{
    jwt.verify(token,scret,(error,decoded)=>{
        console.log(error,decoded)
    })
},3000)

console.log(token)
