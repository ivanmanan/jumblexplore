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
* Map coordinates should be saved per user
* Registration -- user accounts must have their passwords hashed;
  must prevent having duplicate usernames and emails registered
* Be able to search for user by username
* Generate paths between each destination sorted by time
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

### Current Database
See [current database implementation](https://github.com/ivanmanan/Travel-Share/blob/master/sql/database.txt).

### Installation
Instructions to run Travel Share on local machine. Instructions will be similar to [Family Watch](https://github.com/ivanmanan/Family-Watch/blob/master/README.md).
