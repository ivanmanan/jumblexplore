# Travel Share

Document your travels and share with others.

## Content
* Front-End File Structure
* Needed Installments
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
* Configure raspberry pi with the default script to host the project
  when it gets turned on
* Must refactor queries to all do JOIN queries
* Registration -- user accounts must have their passwords hashed;
  must flash messages if registering duplicate usernames and emails
* Be able to search for user by username
* Generate paths/lines between each destination sorted by date
* Install web security features e.g. Prevent SQL injections on sign
  in forms
* Install user settings -- Change passwords and be able to delete
  account
* Tools -- Edit and delete saved map coordinates
* Nice to have: implement email client
* React.js build distribution should be used and server.js should be
  deploying the build
* Make sure username is NOT case sensitive - e.g. "ivan" and "Ivan"
  are same usernames
* If entry gets deleted from database, then sessionStorage cache
  must be cleared immediately, otherwise this will cause bugs
  To replicate: Create account "ivan", then delete the "ivan"
  account from the database, and refresh the browser - "ivan" will
  still exist. Maybe I need another authorization
* When user logs out, and then creates a new account, query runs
  from previous user account instead of the new account after
  registration. Need to fix logout
* Can "Insert Place" button to "Update Place" button when user is
  editing the same place they already saved; also need to install
  this POST request

### Current Database
<pre>
+------------------------------+<br/>
|**User_Login**                |<br/>
+------------------------------+<br/>
|User_ID                       |<br/>
+------------------------------+<br/>
|Username                      |<br/>
+------------------------------+<br/>
|Email                         |<br/>
+------------------------------+<br/>
|Password                      |<br/>
+------------------------------+<br/>
</pre>
Ideally, User_ID and User_Places_ID are identical.

+------------------------------+
|**User_Places**               |
+------------------------------+
|User_Places_ID                |
+------------------------------+
|Place_ID (Foreign Key)        |
+------------------------------+
|Date_Record                   |
+------------------------------+
|Caption                       |
+------------------------------+

There can be duplicate User_Places_ID's, but multiple Place_ID's.

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

### Installation
Instructions to run Travel Share on local machine. Instructions will be similar to [Family Watch](https://github.com/ivanmanan/Family-Watch/blob/master/README.md).
