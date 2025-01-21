const express = require('express')
const app = express()
const route = require('./routes/index.routes')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path'); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views','./src/views')
app.use('/',route)


// app.use("/profile",route)

// app.get('/profile', (req, res) => {
//    const { username, gender, imageURL, phone, email, jobRole, bio } = req.query;

//     // Render the profile.ejs and pass the username to the view
//     res.render('profile', { username, gender, imageURL, phone, email, jobRole, bio });
// });

module.exports = app