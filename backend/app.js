const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// CONNECT TO MONGOOSE
mongoose.connect('mongodb://localhost/housecupathon');
const db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use api/houses or api/books');
});

app.get('/api/books', function(req, res){
  
});

app.listen(3500);
console.log('running on port 3500...');