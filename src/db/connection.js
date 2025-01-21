const mongoose = require('mongoose')
const connect = () =>{
    mongoose.connect("mongodb://0.0.0.0/firstproject").then(()=>{
        console.log('coonect to data bse')
    }).catch(err =>{
        console.log("error coonecting to database")
    })
}
module.exports = connect