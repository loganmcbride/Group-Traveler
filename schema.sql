DROP DATABASE IF EXISTS groupTravels;

CREATE DATABASE groupTravels;

USE groupTravels;

-- CREATE TABLE trips (
--   trip_id int NOT NULL AUTO_INCREMENT,
--   name varchar(255),
--   PRIMARY KEY (trip_id)
-- );

CREATE TABLE ideas (
  idea_id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  title varchar(225) NOT NULL,
  image varchar(255) NOT NULL,
  -- trip_id int NOT NULL,
  -- FOREIGN KEY (trip_id) REFERENCES trips(trip_id)
  PRIMARY KEY (idea_id)
);

-- To Start:
-- mysql -u root < schema.sql
