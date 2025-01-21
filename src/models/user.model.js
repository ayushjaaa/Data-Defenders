const mongoose = require('mongoose');
const userScheam = new mongoose.Schema({
    username:{
        type:String
    },
    imageURL:{
        type:String
    },
    phone:{
        type:Number
    },jobRole:{
        type:String
    },email:{
        type:String
    },jobRole:{
        String:String
    },bio:{
        type:String
    }

})


const userModel = mongoose.model('user',U=userScheam)
module.exports = userModel