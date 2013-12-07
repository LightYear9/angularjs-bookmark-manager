var express = require('express')
	, app = express()
	, db = require('./config/database')
	, pass = require('./config/pass')
	, passport = require('passport');


//Route
var routes = {};
routes.example = require('./route/example.js');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'af5d8ltLowdfDic24aQsPrfl1ds78dkjf5szSDdzge5' }));
app.use(passport.initialize());
app.use(passport.session());


app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost');
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.post('/path', routes.example.login);


console.log('Your project api is starting..');
app.listen(3000);
