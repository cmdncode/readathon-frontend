const mongoose = require('mongoose');

// HOUSE SCHEMA
const houseSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const House = module.exports = mongoose.model('House', houseSchema);

//GET HOUSES

module.exports.getHouses = function(callback, limit){
  House.find(callback).limit(limit)
}