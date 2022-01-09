import bcrypt from 'bcrypt'

const password ='1234adf';
const password2 = 'asdfasdf';
// 보통 10 ~ 12 까지 사용하는게 좋음 
//  hashSync 비밀번호를 12길이로 해싱
const hashed = bcrypt.hashSync(password,12);

console.log(`password: ${password} , hashed: ${hashed}`)

// 해싱한 값이 원래 값이랑 일치하는지 비교 일치하면 true 아니면 false
const result = bcrypt.compareSync(password2,hashed)
console.log(result)
