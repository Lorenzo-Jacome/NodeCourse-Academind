const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Pass a function. Function is exectued with each incomming request
/* app.use((req, res, next) => {
    console.log("I'm in middleware 1");
    next(); //Allows the request to continue to the next middleware (next app.use)
});*/

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

//To catch a route that is not right
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);