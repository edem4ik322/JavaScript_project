var express = require('express');
const { TV } = require('../models/tv');
var router = express.Router();
var Tv = require('../models/tv').Tv;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с tvs');
});

/* Страница телевизоров */
router.get("/:nick", async function(req, res, next) 
{
    var tvs = await TV.find({nick: req.params.nick});
    console.log(tvs)
    if(!tvs.length) return next(new Error("Нет такого телевизора в топе"))
    var tv = tvs[0];
    res.render('tv', {
        title: Tv.title,
        picture: tv.avatar,
        desc: tv.desc
    })
});
    
    

module.exports = router;
