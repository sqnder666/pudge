var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Pudge = require("../models/pudge").Pudge
var checkAuth = require("../middleware/checkAuth.js")
// var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с pudges');
});

/* Страница pudges */
router.get("/:nick", checkAuth, function(req, res, next){
db.query(`SELECT * FROM pudges WHERE pudges.nick = '${req.params.nick}'`, (err, pudges) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(pudges.length == 0) return next(new Error("Нет такого"))
var pudge = pudges[0];
res.render('pudge', {
title: pudge.title,
picture: pudge.avatar,
desc: pudge.about
})
// result(null, results);
}
})
// Cat.findOne({nick:req.params.nick}, function(err, cat){
// if(err) return next(err)
// if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
// res.render('cat', {
// title: cat.title,
// picture: cat.avatar,
// desc: cat.desc,
// });
// })
});

  module.exports = router
  