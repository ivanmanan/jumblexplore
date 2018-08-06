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

/* Populate table with sample entries for Login screen */
INSERT INTO User_Login (Username, Email, Password) VALUES ("ivan", "ivan@ivan", "$2b$10$1ulQkqZydj8rpxH8uq6ePO12CnRMcUizhMj.W9t.RsfW0SOEy4Psu");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Shapiro Fountain, Janss Steps, Bel Air, Westwood, Los Angeles, Los Angeles County, California, 90025, United States of America", "34.072197", "-118.442535");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("San Ramon, Contra Costa County, California, United States of America", "37.779926", "-121.978012");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Dublin, Alameda County, California, United States of America", "37.702152", "-121.935791");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Danville, Contra Costa County, California, 94526, United States of America", "37.821594", "-121.999962");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Alcatraz Island, East Road, San Francisco, San Francisco City and County, California, 14123, United States of America", "37.827057", "-122.423058");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Union Square, San Francisco, San Francisco City and County, California, 94114, United States of America", "37.787514", "-122.407158");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Oakland International Airport, Airport Drive, Oakland, Alameda County, California, 94603, United States of America", "37.713215", "-122.212250");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("BART, 7th Street, South Prescott, Oakland, Alameda County, California, 94612, United States of America", "37.804893", "-122.294228");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Sather Tower, South Hall Road, Northside, Berkeley, Alameda County, California, 94609, United States of America", "37.872059", "-122.2578");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("UCSD La Jolla Emergency Room, 9500, Gilman Drive, Sixth College, University City, San Diego, San Diego County, California, 92037, United States of America", "32.878693", "-117.226486");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Westview High School, 13500, Camino del Sur, Torrey Highlands, San Diego, San Diego County, California, 92130, United States of America", "32.966099", "-117.150070");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("San Diego, San Diego County, California, United States of America", "32.717422", "-117.162773");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("University of California, Irvine, East Peltason Drive, Turtle Rock, Irvine, Orange County, California, 92612, United States of America", "33.643188", "-117.840164");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Aliso Viejo, Orange County, California, United States of America", "33.576138", "-117.725815");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Long Beach, Los Angeles County, California, United States of America", "33.785389", "-118.158051");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Beverly Hills, Los Angeles County, California, United States of America", "34.073620", "-118.400352");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Sandstone Peak, Ventura County, California, United States of America", "34.120293", "-118.932137");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Malibu, Los Angeles County, California, 90265-4797, United States of America", "34.035591", "-118.689423");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("UCSB, El Colegio Road, Isla Vista, Santa Barbara County, California, 93117, United States of America", "34.417793", "-119.855247");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("University of California, Riverside, Martin Luther King Boulevard, Riverside, Riverside County, California, 92521, United States of America", "33.967602", "-117.338326");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Seven Oaks, San Bernardino County, California, 92305, United States of America", "34.186436", "-116.914009");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Santa Monica, Los Angeles County, California, United States of America", "34.019657", "-118.487549");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Mar Vista, Los Angeles, Los Angeles County, California, 90066-3941, United States of America", "34.003761", "-118.439163");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Los Angeles City Hall, 200, North Spring Street, Civic Center, Little Tokyo Historic District, Los Angeles, Los Angeles County, California, 90012, United States of America", "34.053776", "-118.242897");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Hollywood Sign, Mount Lee Drive, Hollywood Hills, Los Angeles, Los Angeles County, California, 90068, United States of America", "34.134098", "-118.321655");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Griffith Observatory, 2800, East Observatory Road, Little Armenia, Los Angeles, Los Angeles County, California, 90027, United States of America", "34.118217", "-118.300293");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Rose Bowl, Arroyo Drive, Pasadena, Los Angeles County, California, 91001, United States of America", "34.161324", "-118.168449");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Lost Hills, Kern County, California, 93249, United States of America", "35.616348", "-119.694344");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Facebook, Hacker Way, Menlo Park, San Mateo County, California, 94025-1246, United States of America", "37.484669", "-122.148361");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("San Francisco International Airport, 780, Zone F, Lomita Park, San Mateo County, California, 94128, United States of America", "37.622452", "-122.384071");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Civic Center, San Francisco, San Francisco City and County, California, 94114, United States of America", "37.779594", "-122.416794");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Golden Gate Bridge, San Francisco, San Francisco City and County, California, 94122, United States of America", "37.819244", "-122.478500");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Mount Diablo, Contra Costa County, California, 94157, United States of America", "37.881622", "-121.914169");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Livermore, Alameda County, California, United States of America", "37.682056", "-121.768051");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Pleasanton, Alameda County, California, United States of America", "37.662430", "-121.874680");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Fremont, Alameda County, California, United States of America", "37.548271", "-121.988571");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Tracy, San Joaquin County, California, United States of America", "37.739651", "-121.425224");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Amtrak Terminal, 16th Street, Civic Center, Bakersfield, Kern County, California, 93301, United States of America", "35.372028", "-119.009026");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Richmond Court, Point Richmond, Richmond, Contra Costa County, California, 94801, United States of America", "37.927135", "-122.386589");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("lax, World Way, Westchester, Playa del Rey, Los Angeles, Los Angeles County, California, 90045, United States of America", "33.942230", "-118.404457");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Costa Mesa, Orange County, California, United States of America", "33.663338", "-117.903320");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("The Irvine Spectrum Center, Irvine, Orange County, California, 92603, United States of America", "33.650230", "-117.743294");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Costco, 115, Technology Drive, Irvine, Orange County, California, 92618, United States of America", "33.660236", "-117.745560");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Fashion Island, Newport Center, Newport Beach, Orange County, California, 92661, United States of America", "33.614769", "-117.872910");
INSERT INTO Places (Place, Latitude, Longitude) VALUES ("Crystal Cove, Orange County, California, 92625:92651, United States of America", "33.575333", "-117.840927");

INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "1", "2015-09-25", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "2", "2004-07-30", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "3", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "4", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "5", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "6", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "7", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "8", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "9", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "10", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "11", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "12", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "13", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "14", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "15", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "16", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "17", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "18", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "19", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "20", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "21", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "22", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "23", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "24", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "25", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "26", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "27", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "28", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "29", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "30", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "31", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "32", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "33", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "34", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "35", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "36", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "37", "2000-01-01", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "38", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "39", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "40", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "41", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "42", "2017-06-16", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "43", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "44", "", "");
INSERT INTO User_Places (User_Places_ID, Place_ID, Date_Record, Caption) VALUES ("1", "45", "", "");
