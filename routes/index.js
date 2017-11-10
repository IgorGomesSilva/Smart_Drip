var express = require('express');
var router = express.Router();
var model = require('./../model/usuario')();


/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(null, function (err, usuario) {
    if(err){
      throw err;
    }
    res.render('index', { title: 'Smart Drip', usuario: usuario });
  });
});


router.post('/add', function (req, res, next) {
  var body = req.body;
  body.status = false;
  model.create(body, function (err, usuario) {
    if(err){
      throw err;
    }
    res.redirect('/');

  })

});

router.get('/turn/:id', function (req, res, next) {
  var id = req.params.id;
  model.findById(id, function (err, usuario) {
    if (err){
      throw err;
    }
    usuario.status = !usuario.status;
    usuario.save(function () {
      res.redirect('/');
    })

  });
});

module.exports = router;
