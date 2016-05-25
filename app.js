var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//set path to views folder
app.set('views', path.join(__dirname, 'app_server', 'views'));

//set static public file
app.use(express.static(__dirname + '/public'));

//set handlebars as default templeting agent
var handlebars = require('express-handlebars').create({defaultLayout:'../../app_server/views/layouts/main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');




app.use('/home', require('./app_server/routes/index.js'));


app.use(function(req, res){
      res.status(404);
      res.render('404');
});

app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.render('500');
});
//always at the bottom of a file
app.listen(3000, function(){
  console.log("todoExpress app started on http://localhost:" + 3000 + ";press ctrl-c to terminate.");


});
