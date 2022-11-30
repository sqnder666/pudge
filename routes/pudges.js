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
    async.parallel([
            function(callback){
                Pudge.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Pudge.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var pudge = result[0]
            var pudges = result[1] || []
            if(!pudge) return next(new Error("Тут нет такого"))
            res.render('pudge', {
                title: pudge.title,
                picture: pudge.avatar,
                desc: pudge.desc,
                menu: pudges
            });
        })
})

module.exports = router
