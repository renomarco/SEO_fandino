//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/home.html'));
});
app.get('/index2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index2.html'));
});
app.get('/index3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index3.html'));
});
app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname, 'views/login.html'));
});
app.get('/index', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/index1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index1.html'));
});
app.get('/page2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/page2.html'));
});
app.get('/page3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/page3.html'));
});
app.get('/page4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/page4.html'));
});
app.get('/page5', function(req, res){
  res.sendFile(path.join(__dirname, 'views/page5.html'));
});
app.get('/page6', function(req, res){
  res.sendFile(path.join(__dirname, 'views/page6.html'));
});
app.get('*', function(req, res){
  res.status(Index3).sendFile(path.join(__dirname, 'views/Index3.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});
