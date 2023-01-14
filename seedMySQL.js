var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE pudges;'

var seedQuery = 'INSERT INTO pudges (title, nick, avatar, about) VALUES ("Feast of Abscession","arcana","/images/arcana.png","Много веков назад мифическая волшебница Крелла сковала нерушимый крюк на цепи, что остановил бы самых могучих прислужников Мёртвого бога и отвадил бы погибель от её избранников. Но мор Мёртвого бога превзошёл даже легендарные заклинания Креллы. Одержимые песнью панихиды, цепи оставили свою госпожу и стали сокрушать её подданных, подчиняясь приказам Мёртвого бога. Теперь же, давно исполнив своё нечистое предназначение, цепи нашли себе нового господина... и новую добычу."),("The Toy Butcher","personality","/images/personality.png","Больше всего набитые ватой обитатели ящика с игрушками боятся плюшевого мясника. Он непрестанно ищет новых жертв в самых тёмных уголках, и каждая игрушка знает: окажешься на мясницком крюке — прощайся с набивкой и жизнью. Плюшевое чудище радостно вытянет из рваных останков всё до последней нитки, и каждая линия будет увешана клочками его жертв."),("Murder of Crows","set","/images/set.png","Не суй свой клюв не в свое дело, предметы из этого набора посвящены выходу документального фильма «Free to Play» от Valve и созданы в партнерстве с Dendi, который получает часть прибыли с продаж.");'

var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'root',
    password : 'root',
    database: 'pudges'
    });
    connection.connect()
    
    
    
    console.log("Running SQL seed...")
    
    
    // Drop content
    connection.query(drop, err => {
    if (err) {
    throw err
    }
    // Seed content
    connection.query( seedQuery, err => {
    if (err) {
    throw err
    }
    console.log("SQL seed completed!")
    connection.end()
    })
    })
    