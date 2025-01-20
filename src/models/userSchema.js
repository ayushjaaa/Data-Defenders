const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
      username:{
        type:String,
        required:true
      },
      profileImage:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
        unique:true
      },
      bio:{
        type:String,
        required:true
      },
      gender:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        required:true
      }
})

const UserSchema = mongoose.model('UserSchema',userSchema);
module.exports = UserSchema;