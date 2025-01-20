const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/data-Defenders').then(()=>{
    console.log("Connected to MongoDB")
}).catch(err =>console.log(err));