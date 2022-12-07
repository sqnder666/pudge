var Pudge = require("./../models/pudge").Pudge

module.exports = function(req,res,next){
    res.locals.nav = []

    Pudge.find(null,{_id:0,title:1,nick:1},function(err,result){
        if(err) throw err
        res.locals.nav = result
        next()
    })

}