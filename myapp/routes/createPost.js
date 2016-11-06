var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res){

  var html = '<form action="/post_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="userName" placeholder="bob" />' +
               '<br>' +
               'Enter your Post:' +
               '<input type="text" name="post" placeholder="Hello" />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('createPost', {myform: html, title: "Post Complete" });

});
