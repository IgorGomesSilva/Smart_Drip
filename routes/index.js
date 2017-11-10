var express = require('express');
var router = express.Router();
var model = require('./../model/usuario')();


/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(null, function (err, usuario) {
    if(err){
      throw err;
    }
    res.render('index', { title: 'Express', usuario: usuario });
  });
});

module.exports = router;
