var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var flash    = require('connect-flash');


var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var index = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var geocoding_example = require('./routes/geocoding_example');
var database = require('./routes/database');
var formTest = require('./routes/formTest');
var results = require('./routes/results');
var login = require('./routes/login');
var login_results = require('./routes/login_results');
var createPost = require('./routes/createPost');
var post_results = require('./routes/post_results');
var app = express();



// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/post_results", post_results);
app.use("/createPost", createPost);
app.use("/login_results", login_results);
app.use("/login", login);
app.use("/results", results);
app.use('/formTest', formTest);
app.use('/', index);
app.use('/users', users);
app.use('/', routes);
app.use('/about', about);
app.use('/geocoding_example', geocoding_example);
app.use('/database',database);


require('./routes/passport')(passport); // pass passport for configuration



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
