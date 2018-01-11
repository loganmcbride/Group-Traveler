DROP DATABASE IF EXISTS groupTravels

CREATE DATABASE groupTravels

USE groupTravels

CREATE TABLE trips (
  trip_id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  sights int NOT NULL,
  PRIMARY KEY (trip_id)
);


-- To Start:
-- mysql -u root < schema.sql
