const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //SEND - helps us send the response. Can be: HTML,
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

//app.get = Same as app.use, but only works with get requests
//app.post = Same as app.use, but only works with post requests
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;