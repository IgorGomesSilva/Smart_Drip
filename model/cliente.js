var db = require('./../lib/dbconect')();
var Schema = require('mongoose').Schema;
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var cliente = Schema({
    nome: String,
    token: String,
    senha: String
});

cliente.methods.gerarSenha = function (senha) {
  return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));

}

cliente.methods.validarSenha = function (senha) {
  return bcrypt.compareSync(senha, this.senha );

}

cliente.methods.gerarToken = function (nome, senha) {
  return jwt.sign({'nome': nome, 'senha': senha}, 'segredo' );

}

module.exports = db.model('cliente', cliente )
