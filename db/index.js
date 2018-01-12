const mysql = require('mysql');
const config = require('./config.js');
const con = mysql.createConnection(config);

const getItinerary = function(cb){
  con.query('SELECT * FROM ideas WHERE ', cb)
}

module.exports = {
  getItinerary
}
