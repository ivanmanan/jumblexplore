# Travel Share

Document your travels and share with others.

## Content
* Needed Installments
* Current Database
* Installation

### Needed Installments
* Registration -- user accounts be inserted into database
  with passwords hashed
* Search Bar -- auto-complete users to search for
* Generate paths between each destination sorted by time
* Install web security features e.g. Prevent SQL injections on sign in forms.
*
* Host the project on domain travelsharego.com

### Current Database
+------------------------------+
|**User_login**                |
+------------------------------+
|User_ID                       |
+------------------------------+
|Username                      |
+------------------------------+
|Password                      |
+------------------------------+
|User_Places_ID (FK)           |
+------------------------------+

Ideally, User_ID and User_Places_ID are identical.
Passwords should be hashed.

+------------------------------+
|**User_Places_ID**            |
+------------------------------+
|User_Places_ID                |
+------------------------------+
|Pace_ID (FK)                  |
+------------------------------+

There can be duplicate User_Places_ID's, but multiple Place_ID's.

+------------------------------+
|**Places**                    |
+------------------------------+
|Place_ID                      |
+------------------------------+
|Place                         |
+------------------------------+

Future Tables: Photo file names and blogs categorized in albums.

### Installation
Instructions to run Travel Share on local machine. Coming soon!