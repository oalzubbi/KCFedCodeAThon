var express = require('express');
var router = express.Router();

/* GET geocoding_example page. */
router.get('/', function(req, res, next) {
  res.render('geocoding_example', { title: 'Express' });
});

module.exports = router;
