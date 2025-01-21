const app = require('./src/app')
const coonectTodb = require('./src/db/connection')
coonectTodb()

app.listen(4000,()=>{
console.log("ruuning on the port 4000")
})