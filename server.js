// Server

////////////////////////////////////////////////////////////////////////
// Modules
const express = require('express');
const app = express();


////////////////////////////////////////////////////////////////////////
// Configurations

// Set view engine to HTML
// app.engine('html', require('ejs').renderFile);
// app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// Set port
var port = process.env.PORT || 3001;

////////////////////////////////////////////////////////////////////////
// MySQL Connection
var mysql = require('mysql');
config = require("./config");
db = config.database;
var connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
})

////////////////////////////////////////////////////////////////////////
// Start Application

app.listen(port);
console.log('Server running on port 3001...');

module.exports = app;