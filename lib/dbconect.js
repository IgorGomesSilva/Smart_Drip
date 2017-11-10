var mongoose = require('mongoose');

var db;

module.exports = function () {
  if(!db){
    db = mongoose.connect('mongodb://localhost/smart_drip');

  }
  return db;

}
