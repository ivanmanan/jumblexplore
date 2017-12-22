// Server

////////////////////////////////////////////////////////////////////////
// Modules
const express = require('express');
const app = express();
var bodyParser = require('body-parser');


////////////////////////////////////////////////////////////////////////
// Configurations

// Set view engine to HTML
app.set('view engine', 'html');

// Set port
var port = process.env.PORT || 3001;

// Parsers for HTTP Methods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////////////////////////////////////////////////////////
// MySQL Database

var mysql = require('mysql');
config = require("./config");
db = config.database;

var connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected to the MySQL Database.')
})


////////////////////////////////////////////////////////////////////////
// HTTP Methods

// Verify login credentials
app.post('/login', (req, res) => {

  console.log("Running query...");
  var userinfo = [];
  // Prevent SQL injection here, then do res.send with empty userinfo as flag
  // and return from this function and do not execute query
  // Login.jsx catches the error, and renders the error message
  // This same SQL injection check must be made for registration
  // I need to unhash passwords here

  connection.query('SELECT * FROM UserLogin WHERE Username="' + req.body.username + '" and Password="' + req.body.password + '";', (err, result, fields) => {
    if (err) throw err;
    else {
      // Check if one entry in SQL database shows up correctly
      if(Object.keys(result).length === 0) {
        console.log("Invalid username or password entered for: " +
                    req.body.username + ".\n");
        res.contentType('application/json');
        res.send(JSON.stringify(userinfo));
      }
      else {
        console.log(result[0].Username + " has logged in.\n");
        userinfo.push({
          username: result[0].Username,
          password: result[0].Password,
          user_id: result[0].User_ID
        });
        res.contentType('application/json');
        res.send(JSON.stringify(userinfo));
      }
    }
  });
});

// Registration
// I also need to hash passwords here
app.post('/register', (req, res) => {

  console.log("Running query...");
  var userinfo = [];

  connection.query('INSERT INTO UserLogin (Username, Password, User_Places_ID) VALUES ("' + req.body.username + '", "' + req.body.password + '", NULL);', (err, response, fields) => {

  // If duplicates exist
  if (err) throw err;
  else {
    console.log(req.body.username + " has registered an account.\n");

    connection.query('SELECT * FROM UserLogin WHERE Username="' + req.body.username + '" and Password="' + req.body.password + '";', (err, result, fields) => {
      if (err) throw err;
      else {

        userinfo.push({
          username: result[0].Username,
          password: result[0].Password,
          user_id: result[0].User_ID
        });
        res.contentType('application/json');
        res.send(JSON.stringify(userinfo));
      }
    });
  }
});


  // I will need to run ALTER query to change the foreign keys



});








////////////////////////////////////////////////////////////////////////
// Start Application

app.listen(port);
console.log('Server running on port 3001...');
