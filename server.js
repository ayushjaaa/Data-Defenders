const app = require('./src/app')
const db = require('./src/config/db');

app.listen(5600,()=>{
    console.log("running on port ",5600)
})