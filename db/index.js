const mysql = require('mysql');
const config = require('./config.js');
const con = mysql.createConnection(config);

const getItinerary = function(name, cb){
  con.query(`SELECT * FROM ideas WHERE name = ${name}`, cb)
}

const saveVotes = function(name, title, image, cb){
  con.query(`INSERT INTO ideas (name, title, image) VALUES (${name}, ${title}, ${image})`, cb)
}

module.exports = {
  getItinerary,
  saveVotes
}
