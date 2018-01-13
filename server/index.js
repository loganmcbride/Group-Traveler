const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const helper = require('./apihelper.js');
const db = require('../db');


app.use(express.static(__dirname + '/../client/dist'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/ideas', function(req, res){
  helper.getIdeas(req.body.city, function(data){
    res.send(data);
  })
})

app.post('/itinerary', function(req, res){
  db.getItinerary(JSON.stringify(req.body.name), function(err, results){
    if(err){console.log('Get Itinerary Error!: ', err)}
    res.send(results);
  })
})

app.post('/votes', function(req, res){
  db.saveVotes(JSON.stringify(req.body.name), JSON.stringify(req.body.title), JSON.stringify(req.body.image), function(err, results){
    if(err){console.log('Save Votes Error!: ', err)}
    res.send(results);
  })
})


app.listen(3000, function(){
  console.log('listening on Port 3000');
})
