var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res){

  var html = '<form action="/cmt_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="userName" placeholder="bob" />' +
               '<br>' +
               'Enter your Comment:' +
               '<textarea name="cmt" rows="4" cols="50">  </textarea>' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('createCmt', {myform: html,parent:"sample_user", title: "Comment", parent_id: 1});

});
