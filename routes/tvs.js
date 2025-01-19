var express = require('express');
var router = express.Router();
var Tv = require('../models/Tv').Tv;


/* 
GET users listing.
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с tvs');
});
*/

/* Страница телевизоров */
router.get("/:nick", async function(req, res, next) 
{
    var tvs = await Tv.find({nick: req.params.nick});
    console.log(tvs)
    if(!tvs.length) return next(new Error("Нет такого телевизора в топе"))
    var tv = tvs[0];
    res.render('tv', {
        title: tv.title,
        picture: tv.avatar,
        desc: tv.desc
    })
});
    
    

module.exports = router;
