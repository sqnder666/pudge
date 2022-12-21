var express = require('express');
var router = express.Router();
var checkAuth = require("./../middleware/checkAuth.js")
var Pudge = require("../models/pudge").Pudge
var User = require("./../models/user").User


/* GET home page. */
router.get('/', function (req, res, next) {
  Pudge.find({}, { _id: 0, title: 1, nick: 1 }, function (err, menu) {
    req.session.greeting = "HelloWorld!",
      res.cookie('greeting', 'HelloWorld!').render('index', {
        title: 'Express',
        menu: menu,
        counter:req.session.counter
      });
  })

});

/* GET auth page. */
router.get('/logreg', function (req, res, next) {
  res.render('logreg', { error: null });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });

  /* POST login/registration page. */
  router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user = user._id
                res.redirect('/')
            } else {
                      res.render('logreg', {title: 'Вход'})
            }
       } else {
       var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user._id
                res.redirect('/')
            })        
      }
    })
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});



module.exports = router;