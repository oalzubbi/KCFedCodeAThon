var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('formTest', { title: 'title' });
  console.log("here");
});
module.exports = router;
