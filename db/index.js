var mysql = require('mysql');
var config = require('./config.js');
var con = mysql.createConnection(config);

getItinerary(){
  con.query()
}

module.exports = {
  getItinerary
}
