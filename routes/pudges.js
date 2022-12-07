var express = require('express')
var router = express.Router()
var Pudge = require("../models/pudge").Pudge
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с pudge')
});

/* Страница котят */
router.get('/:nick', function(req, res, next) {
    Pudge.findOne({nick:req.params.nick}, function(err,pudge){
        if(err) return next(err)
        if(!pudge) return next(new Error("нет такого"))
        res.render('pudgee', {
          title: pudge.title,
          picture: pudge.avatar,
          desc1: pudge.desc1,
          desc2: pudge.desc2,
          desc3: pudge.desc3,
        })
    })
  })

module.exports = router
