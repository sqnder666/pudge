var express = require('express');
var router = express.Router();
var pudge = require("../models/pudge").pudge

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с pudges');
});

/*Страница пуджей */
router.get('/:nick', function(req, res, next) {
    pudge.findOne({nick:req.params.nick}, function(err,pudge){
        if(err) return next(err)
        if(!pudge) return next(new Error("Такого Пуджа тут нет, чел ты......"))
        res.render('pudge', {
            title: pudge.title,
            picture: pudge.avatar,
            desc: pudge.desc
        })
    })
})


module.exports = router;