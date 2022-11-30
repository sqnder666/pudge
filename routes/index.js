var express = require('express');
var router = express.Router();
var Pudge = require("../models/pudge").Pudge

/* GET home page. */
router.get('/', function(req, res, next) {
  Pudge.find({},{_id:0,title:1,nick:1},function(err,menu){
  res.render('index', { 
      title: 'Express',
      menu: menu
     });
    })
});

/* Аркана *
router.get('/arcana', function(req, res, next) {
  res.render('pers', {
      title: "Feast of Abscession",
      picture: "images/arcana.png",
      desc: "Много веков назад мифическая волшебница Крелла сковала нерушимый крюк на цепи, что остановил бы самых могучих прислужников Мёртвого бога и отвадил бы погибель от её избранников. Но мор Мёртвого бога превзошёл даже легендарные заклинания Креллы. Одержимые песнью панихиды, цепи оставили свою госпожу и стали сокрушать её подданных, подчиняясь приказам Мёртвого бога. Теперь же, давно исполнив своё нечистое предназначение, цепи нашли себе нового господина... и новую добычу."
  });
});

/* Личность *
router.get('/personality', function(req, res, next) {
  res.render('pers', {
      title: "The Toy Butcher",
      picture: "images/personality.png",
      desc: "Больше всего набитые ватой обитатели ящика с игрушками боятся плюшевого мясника. Он непрестанно ищет новых жертв в самых тёмных уголках, и каждая игрушка знает: окажешься на мясницком крюке — прощайся с набивкой и жизнью. Плюшевое чудище радостно вытянет из рваных останков всё до последней нитки, и каждая линия будет увешана клочками его жертв."
  });
});

/* Сет 
router.get('/set', function(req, res, next) {
  res.render('pers', {
      title: "Murder of Crows",
      picture: "images/set.png",
      desc: "Не суй свой клюв не в свое дело, предметы из этого набора посвящены выходу документального фильма «Free to Play» от Valve и созданы в партнерстве с Dendi, который получает часть прибыли с продаж."
  });
});
*/
module.exports = router;
