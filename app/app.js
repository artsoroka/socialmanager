var express      = require('express'); 
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var app 	 = express(); 
var config 	 = require(__dirname +'/config'); 

app.set('config', config); 

app.set('views', __dirname + '/views'); 
app.set('view engine', 'jade'); 

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.render('index', {
    title: 'Social manager' 
  }); 
}); 

module.exports = app;   
