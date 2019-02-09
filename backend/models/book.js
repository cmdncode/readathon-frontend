const mongoose = require('mongoose');

// BOOK SCHEMA
const bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  house: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

const Book = module.exports = mongoose.model('Book', bookSchema);

//GET BOOKS

module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit)
}

//GET BOOK BY ID

module.exports.getBookById = function(id, callback){
  Book.findById( id, callback);
}

//ADD BOOK

module.exports.addBook = function(book, callback){
  Book.create( book, callback);
}