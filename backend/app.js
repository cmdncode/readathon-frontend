const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

House =require('./models/house');
Book =require('./models/book')

// CONNECT TO MONGOOSE
mongoose.connect('mongodb://localhost/housecupathon');
const db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use api/houses');
});

//HOUSES
app.get('/api/houses', function(req, res){
  House.getHouses(function(err, houses){
    if(err){
      throw err;
    }
    res.json(houses);
  })
});

//BOOKS

app.get('/api/books', function(req, res){
  Book.getBooks(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
});

//GET A BOOK BY ID

app.get('/api/books/:_id', function(req, res) {
	Book.getBookById(req.params._id, function (err, book) {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//CREATE NEW BOOK

app.post('/api/books', function(req, res) {
	const book = req.body;
	Book.addBook(book, function(err, book) {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.listen(3500);
console.log('running on port 3500...');