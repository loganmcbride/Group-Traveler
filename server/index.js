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

app.get('/ideas', function(req, res){
  db.getItinerary(req.body.name, function(err, results){
    res.send(results);
  })
})

app.post('/votes', function(req, res){
  console.log('req.body.name: ',req.body.name)
  res.send("yeah")
})


app.listen(3000, function(){
  console.log('listening on Port 3000');
})
