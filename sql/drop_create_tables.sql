DROP TABLE IF EXISTS User_Login;
DROP TABLE IF EXISTS User_Places;
DROP TABLE IF EXISTS Places;
/* Order matters */

CREATE TABLE Places (
       Place_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       Place varchar(255) NOT NULL UNIQUE,
       Latitude FLOAT(10,6) NOT NULL,
       Longitude FLOAT(10,6) NOT NULL
);

CREATE TABLE User_Places (
       User_Places_ID INT NOT NULL,
       Place_ID INT NOT NULL,
       Date_Record varchar(255) NOT NULL,
       Caption varchar(255),
       FOREIGN KEY (Place_ID) REFERENCES Places(Place_ID),
       UNIQUE KEY (User_Places_ID, Place_ID)
);

CREATE TABLE User_Login (
       User_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       Username varchar(255) NOT NULL UNIQUE,
       Email varchar(255) NOT NULL UNIQUE,
       Password varchar(255) NOT NULL
);
