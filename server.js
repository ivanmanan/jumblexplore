// Server

/////////////////////////////////////////////////////////////////////
// Modules
const express = require('express');
const app = express();
var bodyParser = require('body-parser');


/////////////////////////////////////////////////////////////////////
// Configurations

// Set view engine to HTML
app.set('view engine', 'html');

// Set port
var port = process.env.PORT || 3001;

// Parsers for HTTP Methods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////////////////////////////////////////////
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


/////////////////////////////////////////////////////////////////////
// HTTP Methods

// TODO: Also run query of all the places the user saved such that
// the front-end can render that onto the map
// QUERY: Verify login credentials
app.post('/login', (req, res) => {

  console.log("Running query...");
  var userinfo = [];
  // Prevent SQL injection here, then do res.send with empty userinfo as flag
  // and return from this function and do not execute query
  // Login.jsx catches the error, and renders the error message
  // This same SQL injection check must be made for registration
  // I need to unhash passwords here

  const query_one = 'SELECT * FROM User_Login WHERE Username="' + req.body.username + '" and Password="' + req.body.password + '";';
  console.log(query_one);

  connection.query(query_one, (err, result, fields) => {
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

// QUERY: Registration
// TODO: Need to hash passwords here
app.post('/register', (req, res) => {

  console.log("Running query...");
  var userinfo = [];

  const query_one = 'INSERT INTO User_Login (Username, Email, Password) VALUES ("' + req.body.username + '", "' + req.body.email + '", "' + req.body.password + '");';
  console.log(query_one);

  connection.query(query_one, (err, response, fields) => {

    // TODO: Check if username or email is case sensitive in the database -- e.g. "ivan" is the same as "Ivan"
    // If duplicates exist
    try {
      if (err) throw err;
      else {
        console.log(req.body.username + " has registered an account.\n");

        const query_two = 'SELECT * FROM User_Login WHERE Username="' + req.body.username + '" and Password="' + req.body.password + '";';

        connection.query(query_two, (err, result, fields) => {
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
    }
    catch (err) {
      console.log("The username or email '" + req.body.username + "' attempting to register already exists in the database.")
      res.contentType('application/json');
      res.send(JSON.stringify(userinfo));
    }
  });


  // I will need to run ALTER query to change the foreign keys

});

// QUERY: User saves a place to both database and into account
// Try to insert place, regardless if its duplicate
// If duplicate, then proceed to next step
app.post('/place', (req, res) => {

  // TODO: if User_Places_ID is NULL, then update it with ALTER query

  console.log("Running query...");
  const query_one = 'INSERT INTO Places (Place, Latitude, Longitude) VALUES ("' + req.body.place + '", "' + req.body.latitude + '", "' + req.body.longitude + '");';
  console.log(query_one);

  connection.query(query_one, (err, response, fields) => {
    try {
      if (err) throw err;
      else {
        // Query successfully
        // This means new place was inserted
        // Set the new Place_ID for the User_Places_ID foreign key
        const query_two = 'INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("' + req.body.user_id + '", "' + response.insertId + '", "' + req.body.date + '", "' + req.body.caption + '");';
        console.log(query_two);

        connection.query(query_two, (err_two, result, fields_two) => {
          try {
            if (err_two) throw err_two;
            else {
              console.log(req.body.username + " has saved a new place!\n");
              res.send(JSON.stringify("Success!"));
            }
          }
          catch (err_two) {
            console.log("ERROR: " + req.body.username + " has an error in saving a place!\n");
          }
        });
      }
    }
    catch (err) {
      // If place exists, then find that place_id
      const query_three = 'SELECT * FROM Places WHERE Place="' + req.body.place + '";';
      console.log(query_three);

      connection.query(query_three, (err_two, result, fields_two) => {
        try {
          if (err_two) throw err_two;
          else {

            const query_four = 'INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("' + req.body.user_id + '", "' + result[0].Place_ID + '", "' + req.body.date + '", "' + req.body.caption + '");';
            console.log(query_four);

            connection.query(query_four, (err_three, results, fields_three) => {
              try {
                console.log(req.body.username + " has saved a new place!\n");
                res.send(JSON.stringify("Success!"));
              }
              catch (err_three) {
                console.log("ERROR: " + req.body.username + " has an error in saving a place!\n");
              }
            });
          }
        }
        catch (err_two) {
          // User attempts to reinsert same place into the database
          console.log("Do nothing.\n");
          // TODO: Flash error message on the front-end
        }
      });
    }
  });
});


// QUERY: Search for all the places the user saved
app.post('/saved', (req, res) => {

  console.log("Running query...");
  const query = 'SELECT Place, Latitude, Longitude, Date_Record, Caption FROM User_Places JOIN Places ON User_Places.Place_ID = Places.Place_ID WHERE User_Places_ID="' + req.body.user_id + '";';
  console.log(query);

  connection.query(query, (err, savedPlaces, fields) => {
    try {
      if (err) throw err;
      console.log(req.body.username + " has retrieved all saved places!\n");
      res.contentType('application/json');
      res.send(JSON.stringify(savedPlaces));
    }
    catch (err) {
      console.log("ERROR: " + req.body.username + " has an error in retrieving all their saved places!\n");

      // TODO: Test that this actually works -- see incorrect login
      const empty = [];
      res.contentType('application/json');
      res.send(JSON.stringify(empty));
    }
  });
});

// QUERY: Update saved place
app.post('/update', (req, res) => {

  // result[0].Place_ID can be retrieved from 'SELECT * ...' query
  const query = 'UPDATE User_Places SET User_Places_ID="' + req.body.user_id + '", Place_ID="' + 0 + '", Date_Record="' + req.body.date + '", Caption="' + req.body.caption + '" WHERE User_Places_ID="' + req.body.user_id + '" AND Place_ID="' + 0 + '";';
  console.log(query);
});

/////////////////////////////////////////////////////////////////////
// Start Application

app.listen(port);
console.log('Server running on port 3001...');
