const userModel = require('../models/user.model')

const alluser = [];
module.exports.creatuser =(req,res) =>{
    res.render('form')
    
}
module.exports.svaeuser =  async (req,res)=>{
    console.log(req.body)
const {username,gender,imageURL,phone,email,jobRole,bio} = req.body

    const neeuser =   new userModel({
        username:username,
        gender:gender,
        imageURL:imageURL,
        phone:phone,
        email:email,
        jobRole:jobRole,
        bio:bio
    })
alluser.push(neeuser)

    await neeuser.save()
    const jsonString = JSON.stringify(alluser);

    res.redirect(`/profile?data=${jsonString}`);
   
}


module.exports.home = (req, res) => {



    const data = JSON.parse(decodeURIComponent(req.query.data));
    res.render('profile', { data: data });
 }
 