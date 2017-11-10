module.exports = function () {
  var db = require('./../lib/dbconect')();
  var Schema = require('mongoose').Schema;

  var usuario = Schema({
    nome: String,
    email: String,
    idade: Number
  });

  return db.model('usuario', usuario);

}
