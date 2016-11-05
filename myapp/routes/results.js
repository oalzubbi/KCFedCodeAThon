var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/results', function(req, res, next) {
    console.log("got here");
    res.render('results', { title: "formTest", name: req.body.name });
    console.log(req.body.name);
});

module.exports = router;
