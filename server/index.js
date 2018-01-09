const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const helper = require('./apihelper.js');


app.use(express.static(__dirname + '/../client/dist'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/ideas', function(req, res){
  console.log("REQ.BODY.CITY : ",req.body.resultsNum)
  helper.getIdeas(req.body.city, req.body.resultsNum, function(data){
    res.send(data);
  })
})



app.listen(3000, function(){
  console.log('listening on Port 3000');
})
