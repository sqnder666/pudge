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

module.exports = router;