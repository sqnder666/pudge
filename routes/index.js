var express = require('express')
var router = express.Router()
var Pudge = require("../models/pudge").Pudge

/* GET home page. */

router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', menu:menu });

});




router.get('/', function(req, res, next) {
    Pudge.find({},{_id:0,title:1,nick:1},function(err,menu){
        res.render('index', {
                                title: 'Express',
                                menu: menu
                            });
    })

});

module.exports = router;