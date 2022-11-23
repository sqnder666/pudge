var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var pu = mongoose.model('pu', { name: String })

var pud = new pu({ name: 'Петушок' })
pud.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('чинчопа')
    }
})
