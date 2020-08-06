var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbtestRouter = require('./routes/dbtest');

//Join form.
// var joinconfirmRouter = require('./routes/join/joinconfirm');
// var joinsurveysweatorRouter = require('./routes/join/surveysweator'); 

var controllertest = require('./routes/join/joinform.routes');

const userRouter = require('./routes/join/user.routes');

//mvc test
// var mvctestRouter = require('./routes/mvctest');

// Main pages
var classRouter = require('./routes/class/classplan');
var profileRouter = require('./routes/class/profile_sweator');
var mypageteeRouter = require('./routes/class/mypagetee');
var mypagetorRouter = require('./routes/class/mypagetor');
var swetorteachingRouter = require('./routes/class/swetorswetingroom');
var sweteeswetingroomRouter = require('./routes/class/sweteeswetingroom');
var profileeditRouter = require('./routes/class/profile_edit');
const { allowedNodeEnvironmentFlags } = require('process');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('layout', 'layout');
app.set("layout extractScripts", true);
app.use(expressLayouts);


app.use('/', indexRouter);
app.use('/users', usersRouter); // 삭제요망 test 용
app.use('/dbtest', dbtestRouter);
// Join forms
// app.use('/joinconfirm', joinconfirmRouter);
// app.use('/joinsurveysweator', joinsurveysweatorRouter);
app.use('/', userRouter);

app.use('/', controllertest);
// app.use('/testtest', mvctestRouter);
//Main pages
app.use('/classplan', classRouter);
app.use('/profile', profileRouter);
app.use('/mypagetee', mypageteeRouter);
app.use('/mypagetor', mypagetorRouter);
app.use('/swetorswetingroom',swetorteachingRouter);
app.use('/sweteeswetingroom',sweteeswetingroomRouter);
app.use('/profileedit',profileeditRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
