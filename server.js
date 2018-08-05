// Server

/////////////////////////////////////////////////////////////////////
// Modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const debug = require('./debug');

/////////////////////////////////////////////////////////////////////
// Configurations

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

// Parse for SQL Injections
function containsInjection(input, type) {
  let specialChar = "";
  switch (type) {
    case "email":
      specialChar = "!#$%^&*;:'{}[]=+`~,/\\";
      break;
    case "caption":
    case "password":
      specialChar = "\"\'\`\\";
      break;
    case "regular":
    case "default":
      specialChar = "@!#$%^&*;:'{}[]=+`~,./\\";
  }
  for (let i = 0; i < specialChar.length; i++) {
    if (input.includes(specialChar[i])) {
      return true;
    }
  }
  return false;
}

/////////////////////////////////////////////////////////////////////
// HTTP Methods

// QUERY: Verify login credentials
app.post('/login', (req, res) => {

  let userinfo = [];

  let checkInjection = () => {
    return new Promise((resolve, reject) => {
      if (containsInjection(req.body.username, "regular") ||
          containsInjection(req.body.password, "password")) {
        reject();
      }
      else {
        resolve();
      }
    });
  }
  checkInjection().then(() => {
    console.log("Running query...");
    const username = req.body.username.toLowerCase();

    const query_one = 'SELECT * FROM User_Login WHERE Username="' + username + '" and Password="' + req.body.password + '";';
    console.log(query_one);

    connection.query(query_one, (err, result, fields) => {
      if (err) throw err;
      else {
        // Check if one entry in SQL database shows up correctly
        if(Object.keys(result).length === 0) {
          console.log("Invalid username or password entered for: " +
                      username + ".\n");
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
  }).catch(() => {
    res.contentType('application/json');
    res.send(JSON.stringify(userinfo));
  });
});

// QUERY: Registration
// TODO: Need to hash passwords here
app.post('/register', (req, res) => {

  console.log("Running query...");
  var userinfo = [];
  let checkInjection = () => {
    return new Promise((resolve, reject) => {
      if (containsInjection(req.body.username, "regular") ||
          containsInjection(req.body.password, "password") ||
          containsInjection(req.body.email, "email")) {
        reject();
      }
      else {
        resolve();
      }
    });
  }

  checkInjection().then(() => {
    const username = req.body.username.toLowerCase();
    const query_one = 'INSERT INTO User_Login (Username, Email, Password) VALUES ("' + username + '", "' + req.body.email + '", "' + req.body.password + '");';
    console.log(query_one);
    connection.query(query_one, (err, response, fields) => {
      try {
        if (err) throw err;
        else {
          console.log(username + " has registered an account.\n");
          const query_two = 'SELECT * FROM User_Login WHERE Username="' + username + '" and Password="' + req.body.password + '";';
          console.log(query_two);
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
        console.log("The username or email '" + username + "' attempting to register already exists in the database.")
        res.contentType('application/json');
        res.send(JSON.stringify(userinfo));
      }
    });
  }).catch(() => {
    res.contentType('application/json');
    res.send(JSON.stringify(userinfo));
  });
});

// QUERY: User saves a place to both database and into account
// Try to insert place, regardless if its duplicate
// If duplicate, then proceed to next step
app.post('/place', (req, res) => {
    console.log("Running query...");
    const username = req.body.username.toLowerCase();
    const query_one = 'INSERT INTO Places (Place, Latitude, Longitude) VALUES ("' + req.body.place + '", "' + req.body.latitude + '", "' + req.body.longitude + '");';
    console.log(query_one);

    connection.query(query_one, (err, response, fields) => {
      try {
        if (err) throw err;
        else {
          // Query successfully
          // This means new place was inserted
          // Set the new Place_ID for the User_Places_ID foreign key
          const place_id = response.insertId;
          const query_two = 'INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("' + req.body.user_id + '", "' + place_id + '", "' + req.body.date + '", "' + req.body.caption + '");';
          console.log(query_two);

          connection.query(query_two, (err_two, result, fields_two) => {
            try {
              if (err_two) throw err_two;
              else {
                console.log(username + " has saved a new place!\n");
                res.send(JSON.stringify(place_id));
              }
            }
            catch (err_two) {
              console.log("ERROR: " + username + " has an error in saving a place!\n");
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
              const place_id = result[0].Place_ID;
              const query_four = 'INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("' + req.body.user_id + '", "' + place_id + '", "' + req.body.date + '", "' + req.body.caption + '");';
              console.log(query_four);

              connection.query(query_four, (err_three, results, fields_three) => {
                try {
                  console.log(username + " has saved a new place!\n");
                  res.send(JSON.stringify(place_id));
                }
                catch (err_three) {
                  console.log("ERROR: " + username + " has an error in saving a place!\n");
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
app.get('/place/:user_id/:username', (req, res) => {

  const user_id = req.params.user_id;

  // TODO: Figure out how to retrieve someone's username without adding onto the JOIN query
  const username = req.params.username;

  console.log("Running query...");
  const query = 'SELECT Place, Latitude, Longitude, Date_Record, Caption FROM User_Places JOIN Places ON User_Places.Place_ID = Places.Place_ID WHERE User_Places_ID="' + user_id + '";';
  console.log(query);

  connection.query(query, (err, savedPlaces, fields) => {
    try {
      if (err) throw err;
      console.log(username + " has retrieved all saved places!\n");
      res.contentType('application/json');
      res.send(JSON.stringify(savedPlaces));
    }
    catch (err) {
      console.log("ERROR: " + username + " has an error in retrieving all their saved places!\n");

      const empty = [];
      res.contentType('application/json');
      res.send(JSON.stringify(empty));
    }
  });
});

// QUERY: Update saved place
app.put('/place', (req, res) => {

  let checkInjection = () => {
    return new Promise((resolve, reject) => {
      if (containsInjection(req.body.caption, "caption")) {
        reject();
      }
      else {
        resolve();
      }
    });
  }
  checkInjection().then(() => {
    const username = req.body.username;
    console.log("Running query...");
    const query = 'UPDATE User_Places SET Date_Record="' + req.body.date + '", Caption="' + req.body.caption + '" WHERE User_Places_ID="' + req.body.user_id + '" AND Place_ID="' + req.body.place_id + '";';
    console.log(query);
    connection.query(query, (err, result, fields) => {
      try {
        if (err) throw err;
        console.log(username + " has successfully updated a place.\n");
        res.end();
      }
      catch (err) {
        console.log("ERROR: " + username + " has an error in updating a place!\n");
        res.end();
      }
    });
  }).catch(() => {
    // TODO: Flash message saying no special characters because of SQL injection
    res.end();
  });
});

// QUERY: Delete user account

// QUERY: Delete place

// QUERY: Retrieve all users

// QUERY: Search for user's places

/////////////////////////////////////////////////////////////////////
// Start Application

// Set port
var port = process.env.PORT || 3001;

// TODO: Change this to true to deploy the optimized React package
// NOTE: Must run npm run build in client directory for latest updates
// NOTE: Moreover, the site is running on PORT 3001
const deploy = false;

if (deploy) {
  const path = require('path');
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(port);

console.log('Server running on port 3001...');
