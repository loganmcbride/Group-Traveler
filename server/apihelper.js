var request = require('request');
var apiKey = require('../apiKey.js');


var getIdeas = function(city, cb){
  var options = {
    url: `https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?apikey=${apiKey.Key}&city_name=${city}&lang=EN&yapq_grade=5&number_of_results=10`
  }
  request.get(options, function(error, res, body){
    if(error){console.log("Sandbox Amadeus API Error : ",error)}
    cb(JSON.parse(body));
  })

}

module.exports.getIdeas = getIdeas;
