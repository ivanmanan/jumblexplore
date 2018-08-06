# Travel Share

Document your travels and share with others.

## Content
* Front-End File Structure
* Needed Installments
* Future Installments
* Current Database
* Installation

### Front-End File Structure
├── App.jsx<br/>
├── index.js<br/>
├── **leaflet**<br/>
├── Maps.jsx<br/>
├── **sidebar**<br/>
│   ├── **omnibox**<br/>
│   │   ├── Omnibox.jsx<br/>
│   │   └── SearchBar.jsx<br/>
│   ├── Sidebar.jsx<br/>
│   ├── View.jsx<br/>
│   └── **views**<br/>
│       ├── **account**<br/>
│       │   ├── Account.jsx<br/>
│       │   └── Place.jsx<br/>
│       ├── Login.jsx<br/>
│       └── Register.jsx<br/>
└── styles.css<br/>

### Needed Installments
* FEATURE: Create initial map login screen of random places with
  lines drawn between them in accordance to date - this will most
  likely be my mapping of California - make it into SQL file
* FEATURE: At logout, places should be set to default map screen
* FEATURE: Generate paths/lines between each destination sorted by
  date after place is updated
* FEATURE: Registration -- user accounts must have their passwords hashed;
  must flash messages if registering duplicate usernames and emails
  or info containing special characters
* FEATURE: Have better view on mobile
* BUG: If entry gets deleted from database, then sessionStorage cache
  must be cleared immediately, otherwise this will cause bugs
  To replicate: Create account "ivan", then delete the "ivan"
  account from the database, and refresh the browser - "ivan" will
  still exist
* Configure raspberry pi with the default script to host the project
  when it gets turned on - must use optimized React package
* BUG: When user searches for a place that has already been saved, it
  still displays the "Insert Place" button instead of "Update Place"
* FEATURE: Be able to search for user by username --- sidebar should
  have a button to alternate between searching places and searching users
* FEATURE: Install user settings -- Change passwords and be able to
  delete account
* FEATURE: Implement email client
* FEATURE: Have distinct markers for saved places and searched
  places -- push this back because right now it requires to import
  native Leaflet library since it is not built-in for the
  React-Leaflet library

### Current Database
Ideally, User_ID and User_Places_ID are identical.
There can be duplicate User_Places_ID's, but multiple Place_ID's.

<pre>
+------------------------------+     +------------------------------+
|**User_Login**                |     |**User_Places**               |
+------------------------------+     +------------------------------+
|User_ID                       |     |User_Places_ID                |
+------------------------------+     +------------------------------+
|Username                      |     |Place_ID (Foreign Key)        |
+------------------------------+     +------------------------------+
|Email                         |     |Date_Record                   |
+------------------------------+     +------------------------------+
|Password                      |     |Caption                       |
+------------------------------+     +------------------------------+


+------------------------------+
|**Places**                    |
+------------------------------+
|Place_ID                      |
+------------------------------+
|Place                         |
+------------------------------+
|Latitude                      |
+------------------------------+
|Longitude                     |
+------------------------------+

</pre>

### Installation
1. Install [Node.js](https://nodejs.org/en/download/).
2. Install all Node.js dependencies.
   ```bash
   cd /path/to/travel-share/
   ./install.sh
   ```
3. Install MySQL.
   ```bash
   sudo apt install mysql-sever
   sudo mysql
   mysql> SELECT user,authentication_string,plugin,host FROM mysql.user;
   mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
   mysql> FLUSH PRIVILEGES;
   mysql> exit
   ```

4. Enter your database credentials.
   ```bash
   cp skeleton.js config.js
   nano config.js
   ```

5. Run the SQL script to set-up the bare-essentials for the database. Make sure
   you are running this command in the travel-share directory.
   ```bash
   cd /path/to/travel-share/sql/
   pwd
   mysql -u root -p
   mysql> create database travelshare;
   mysql> use travelshare;
   mysql> source /pwd/drop_create_tables.sql;
   mysql> exit
   ```

6. Run on localhost.
   ```bash
   npm start
   ```