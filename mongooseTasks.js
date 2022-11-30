var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Pudge = require("../models/pudge").Pudge


var pudge = new Pudge({
title: "arcana",
nick: "Feast of Abscession"
})


console.log(pudge)
pudge.save(function(err, pudge, affected){
console.log(pudge.title)
})