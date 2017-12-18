DROP TABLE IF EXISTS UserLogin;
DROP TABLE IF EXISTS User_Places;
DROP TABLE IF EXISTS Places;
/* Order matters */


CREATE TABLE Places (
       Place_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       Place varchar(255) NOT NULL,
       Longitude FLOAT(10,6) NOT NULL,
       Latitude FLOAT(10,6) NOT NULL,
       Country varchar(255) NOT NULL,
       State varchar(255),
       City varchar(255)
);

CREATE TABLE User_Places (
       User_Places_ID INT NOT NULL PRIMARY KEY,
       Place_ID INT NOT NULL,
       Date_Record varchar(255) NOT NULL,
       FOREIGN KEY (Place_ID) REFERENCES Places(Place_ID)
);

CREATE TABLE UserLogin (
       User_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
       Username varchar(255) NOT NULL,
       Password varchar(255) NOT NULL,
       User_Places_ID INT,
       FOREIGN KEY (User_Places_ID) REFERENCES User_Places(User_Places_ID)
);
