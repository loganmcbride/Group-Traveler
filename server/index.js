const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/../client/dist'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', function(req, res){
//   res.send(path.join(__dirname, '../client/index.html'));
// })



app.listen(3000, function(){
  console.log('listening on Port 3000');
})
