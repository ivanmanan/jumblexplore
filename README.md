# Travel Share

Document your travels and share with others.

## Content
* Front-End File Structure
* Needed Installments
* Current Database
* Installation

### Front-End File Structure
├── App.jsx<br/>
├── index.js
├── **leaflet**
├── Maps.jsx
├── **sidebar**
│   ├── **omnibox**
│   │   ├── Omnibox.jsx
│   │   └── SearchBar.jsx
│   ├── Sidebar.jsx
│   ├── View.jsx
│   └── **views**
│       ├── account
│       │   ├── Account.jsx
│       │   └── Place.jsx
│       ├── Login.jsx
│       └── Register.jsx
└── styles.css

### Needed Installments
* Map coordinates should be saved per user
* Registration -- user accounts must have their passwords hashed;
  must prevent having duplicate usernames and emails registered
* Be able to search for user
* Generate paths between each destination sorted by time
* Install web security features e.g. Prevent SQL injections on sign
  in forms
* Install user settings -- Change passwords and be able to delete
  account
* Tools -- Edit and delete saved map coordinates
* Nice to have: implement email client
* React.js build distribution should be used and server.js should be
  deploying the build

### Current Database
See [current database implementation](https://github.com/ivanmanan/Travel-Share/blob/master/sql/database.txt).

### Installation
Instructions to run Travel Share on local machine. Instructions will be similar to [Family Watch](https://github.com/ivanmanan/Family-Watch/blob/master/README.md).
