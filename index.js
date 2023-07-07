
const {connection} = require('./db');
const md5 = require ('md5');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});
app.post('/', async function(req, res){
  // console.log(req.query);
  // console.log(req.params);
  // console.log(req.);

  res.json(req.query);
});

app.get('/get/user', function (req, res){
  var id = req.query.id;
  connection.query('SELECT * FROM tbl_user WHERE id=?',[id], function (error, results, fields) {
    res.send(results)
  })
})

app.post('/create/user', async function (req, res){
  var username = req.query.username;
  var password = req.query.password;
  var age = req.query.age;
  var hometown = req.query.hometown;
  var dateofbirth = req.query.dateofbirth;
  // res.send(username);
  connection.query('Insert into tbl_user(`username`, `password`, `age`, `hometown`, `dateofbirth`) values(?,?,?,?,?)',[username, md5(password), age, hometown, dateofbirth],function (error, results, fields) {
    res.send(results)
  });
  //var user = await connection.query('SELECT * FROM tbl_user where id = 1', function (error, results, fields) {
  //  res.send(results)
  //});
  // res.json(JSON.stringify(user));
  // res.send(user);
});

app.get('/login', async function (req, res){
  var username = req.query.username;
  var password = req.query.password;
  connection.query('SELECT * FROM tbl_user where username=? and password =?', [username, md5(password)], 
  function (error, results, fields) {
  res.send(results)
})
  res.send("Hello " + username);
});


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", 'localhost', port)
})