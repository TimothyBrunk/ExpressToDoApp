


module.exports.index = function(req, res){
      res.render('index');
};

//controller functions for mysql queries in (controllers/main.js)
var mysql = require('../models/mysql.js');

//code for a get request
module.exports.index = function(req, res){
    var id = req.params.id;
    mysql.getConnection(function(err, con){
      con.query('Select * from expenses', function(err, rows){
          if(err) throw err;
          console.log("You are now connected");
          res.render('index', {data:rows});
      });
    });
};

//code for a post request
module.exports.create = function(req, res){
    var olddate = req.body.date;
    var date = olddate.replace( "-","").replace("-", "");
    var category = req.body.category;
    var expenses = req.body.expenses;
    var notes = req.body.notes;
    console.log(date);
    console.log("in create method");
    console.log(date);
    mysql.getConnection(function(err, con){
      con.query('INSERT INTO expenses (date, category, expenses, notes) VALUES ('+ date + ",'"+category+"'," + expenses + ",'"+notes+"'" +')');
    });
    res.redirect('/');
};


module.exports.delete = function(req, res){
    var id = req.body.exid;
    console.log(id);
    console.log("in delete method");
    mysql.getConnection(function(err, con){
      con.query('DELETE FROM expenses WHERE id ='+id+';');
    });
    res.redirect('/');
};
module.exports.edit = function(req, res){
    var id = req.body.editid;
    console.log(id);
    mysql.getConnection(function(err, con){
      con.query('Select * from expenses WHERE id='+id+';', function(err, rows){
          if(err) throw err;
          console.log("You hit the edit page");
          res.render('edit', {data:rows});
      });
    });

};
module.exports.update = function(req, res){
    var id = req.body.upid;
    var date = req.body.date;
    var category = req.body.category;
    var expenses = req.body.expenses;
    var notes = req.body.notes;
    console.log(id);
    console.log("in update method");
    console.log(date);
        console.log(id); 
    mysql.getConnection(function(err, con){
      con.query("UPDATE expenses SET date='"+date+"', category='"+category+"', expenses="+expenses+", notes='"+notes+"' WHERE id ="+id+";");
    });
    res.redirect('/');
};
