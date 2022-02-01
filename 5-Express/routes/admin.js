const express = require('express');
const path = require('path');  
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //SEND - helps us send the response. Can be: HTML,
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//app.get = Same as app.use, but only works with get requests
//app.post = Same as app.use, but only works with post requests
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;