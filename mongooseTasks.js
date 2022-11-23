var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Pudg = require("./models/pudg").pudg


var pudg = new Pudg({
title: "arcana",
nick: "Feast of Abscession"
})


console.log(pudg)
pudg.save(function(err, pudg, affected){
console.log(pudg.title)
})