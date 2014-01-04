
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  ,config = require('./config');

/*var response = require('response'); */

  // New Code
var mongo = require('mongodb');
var monk = require('monk');
var db = monk(config.database.host);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
//app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/helloworld',routes.helloworld);
app.get('/userlist',routes.userlist(db));
app.get('/newuser',routes.newuser);

// image posting and processing
app.get('/imageupload',routes.imageupload);

app.post('/adduser',routes.adduser(db));
app.post('/addimage',routes.addimage(db));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
