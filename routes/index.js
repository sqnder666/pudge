var express = require('express');
var router = express.Router();
var Pudge = require("../models/pudge").Pudge


/* GET home page. */
router.get('/', function (req, res, next) {
  Pudge.find({}, { _id: 0, title: 1, nick: 1 }, function (err, menu) {
    req.session.greeting = "HelloWorld!",
      res.cookie('greeting', 'HelloWorld!').render('index', {
        title: 'Express',
        menu: menu,
        counter:req.session.counter
      });
  })

});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });

  /* POST login/registration page. */
router.post('/logreg', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
});

module.exports = router;