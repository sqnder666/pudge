var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.chin = function(){
    console.log(this.get("name") + " with arcana")
}

var pud = mongoose.model('pud', schema)

var pu = new pud({ name: 'Pudge' })
pu.save(function (err) {
    pu.chin()
})
