var express = require('express');
var router = express.Router();

var clienteController = require('./../controllers/clienteController');

function pegarToken(req, res, next) {
  var header = req.header['authorization'];

  if(typeof header !== 'undefined'){
    req.token = header;
    next();
  }else {
    res.sendStatus(403);
  }

}

router.post('/cadastrar', function (req, res) {
  var nome = req.body.nome;
  var senha = req.body.senha;
  clienteController.save(nome, senha, function (resp) {
    res.json(resp);
  })
});

router.post('/login', function(req, res){
	var nome = req.body.nome;
	var senha = req.body.senha;
	clienteController.login(nome, senha, function(resp){
		res.json(resp);
	})
});

router.get('/listar',pegarToken, function(req, res){
	var token = req.token;
	clienteController.list(token, function(resp){
		res.json(resp);
	})
});


module.exports = router;
