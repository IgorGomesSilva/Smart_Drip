var cliente = require('./../model/cliente');

exports.save = function (nome, senha, callback) {
  cliente.findOne({'nome': nome}, function (err, cliente) {
    if(erro){
      callback('Ocorreu um Erro.');
    } else if (cliente) {
      callback('Existe um usuario cadastrado com esse Nome.');
    }else{
      var novoCliente = new cliente();
      novoCliente.nome = nome;
      novoCliente.senha = novoCliente.gerarSenha(senha);
      novoCliente.token = novoCliente.gerarToken(nome, senha);
      novoCliente.save(function (err, cliente) {
        if(err){
          callback('Ocorreu um Erro.');
        }else {
          callback(cliente);
        }

      })
    }

  })

}

exports.login = function (nome, senha, callback) {
  cliente.findOne({'nome': nome}, function (err, cliente) {
    if(err){
      callback('Ocorreu um Erro.');
    }else if (cliente) {
      if(cliente.validarSenha(senha)){
        callback(cliente.token);
      }else {
        callback('Senha incorreta');
      }
    }

  })

}

exports.list = function (token, callback) {
  cliente.findOne({'toke':toke}, function (err, cliente) {
    if(err){
      callback('Ocorreu um Erro.');
    }else if (cliente) {
      callback(cliente.nome)
    }else {
      callback('Cliente não Encontrado');
    }

  })
}
