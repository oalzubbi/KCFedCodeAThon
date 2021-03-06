var LocalStrategy   = require('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var geocoder = require('geocoder');
var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
      console.log("GOOOOOOOOT HERE1!!!\n\n");
      console.log(user);
        done(null, user);
    });

    passport.deserializeUser(function(id, done) {
      console.log("GOOOOOOOOT HERE2!!!\n\n");
        connection.query("SELECT * FROM Users WHERE User_Id = ? ",[id.User_Id], function(err, rows){
            console.log(rows);
            console.log(id);
            done(err, rows);
        });
    });
    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, username, password, done) {
            connection.query("SELECT * FROM Users WHERE User_Id = ? AND PassWord = ?",[username,password], function(err, rows) {
                var FirstName = req.body.FirstName;
                var LastName = req.body.LastName;
                var bio = req.body.bio;
                var city = req.body.city;
                var state = req.body.state;
                var pic = req.body.picLink;
                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                } else {
                    var newUserMysql = {
                        username: username,
                        password: bcrypt.hashSync(password, null, null)
                    };
                    geocoder.geocode(city + ', ' + state, function ( err, data ) {

                        var insertQuery = 'INSERT INTO Users (User_Id,PROFILEPIC, LastName, FirstName, Karma, Verified, Bio, Location, PassWord) VALUES (\'' + newUserMysql.username + '\',\'' + pic + '\',\'' + LastName + '\', \'' + FirstName + '\', \'0\' , \'0\' , \'' + bio + '\', \'' + data.results[0].place_id + '\', \'' + newUserMysql.password + '\')';
                        connection.query(insertQuery,function(err, results) {
                            //console.log(newUserMysql);
                            connection.query("SELECT * FROM Users WHERE User_Id = ?",[username], function(err, rows){
                              return done(null, rows[0]);
                            });
                        });
                    });
                }
            });
        })
    );

    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, username, password, done) {
            connection.query("SELECT * FROM Users WHERE User_Id = ?",[username], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false);
                }
                if (!bcrypt.compareSync(password, rows[0].PassWord))
                    return done(null, false);
                //console.log(rows[0]);
                return done(null, rows[0]);
            });
        })
    );
};
