


module.exports.index = function(req, res){
      res.render('index');
};

//controller functions for mysql queries in (controllers/main.js)
var mysql = require('../models/mysql.js');

//code for a get request
module.exports.index = function(req, res){
    mysql.getConnection(function(err, con){
      con.query('Select * from expenses', function(err, rows){
          if(err) throw err;
          res.render('index', { title : 'Express Todo App', todos: rows });
      });
    });
};

//code for a post request
module.exports.create = function(req, res){
    var content = req.body.content;
    mysql.getConnection(function(err, con){
      con.query('INSERT INTO todos (content) VALUES ("' + content + '")');
    });
    res.redirect('/');
};
