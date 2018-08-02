/* TODO: This needs to be updated to reflect new tables */

INSERT INTO Places (Place, Longitude, Latitude, Country, State, City)
VALUES ("Fingals Cave", -6.3414, 56.4314, "Scotland", "Isle of Staffa", NULL);

INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record)
VALUES (1, 1, "August 15 2016");

INSERT INTO User_Login (Username, Password, User_Places_ID)
VALUES ("ivan", "password", 1);

INSERT INTO User_Login (Username, Password, User_Places_ID)
VALUES ("NewAccount", "password", NULL);