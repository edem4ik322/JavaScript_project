var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница телевизора Sber QLED 4K UHD 65 */
router.get('/Sber-QLED-4K-UHD-65', function(req, res, next) {
  res.render('tv',{
    title: "Sber QLED 4K UHD 65",
    picture: "images/Sber-QLED-4K-UHD-65.avif",
    desc: "Продвинутый телевизор от отечественного бренда Sber."
  });
});

/* Страница телевизора Яндекс ТВ Станция Про с Алисой 55" */
router.get('/Yandex-TV-Pro-with-Alice-55', function(req, res, next) {
  res.render('tv',{
    title: "Яндекс ТВ Станция Про с Алисой 55",
    picture: "images/Yandex-TV-Pro-with-Alice-55.jpg",
    desc: "Это умный телевизор от Яндекса, который может управляться при помощи голосового ассистента Алиса и тесно связан с нейросетью YandexGPT."
  });
});

/* Страница телевизора Samsung UE50CU8000UXRU */
router.get('/Samsung-UE50CU8000UXRU', function(req, res, next) {
  res.render('tv',{
    title: "Samsung UE50CU8000UXRU",
    picture: "images/Samsung-UE50CU8000UXRU.jpeg",
    desc: "Телевизор от проверенного бренда Samsung, который поддерживает технологию HDR10."
  });
});

/* Страница телевизора TCL 55 55P635 4K LCD */
router.get('/TCL-55-55P635-4K-LCD', function(req, res, next) {
  res.render('tv',{
    title: "TCL 55 55P635 4K LCD",
    picture: "images/TCL-55-55P635-4K-LCD.jpeg",
    desc: "Модель от известного и уважаемого бренда TCL, которая может похвастаться мощным процессором (AIPQ 2.0), поддержкой HDR10 и матрицей VA с хорошими углами обзора."
  });
});

/* Страница телевизора Haier 55 Smart TV S3 RU */
router.get('/Haier-55-Smart-TV-S3-RU', function(req, res, next) {
  res.render('tv',{
    title: "Haier 55 Smart TV S3 RU",
    picture: "images/Haier-55-Smart-TV-S3-RU.jpeg",
    desc: "Превосходный по качеству 55-дюймовый телевизор с отличным качеством картинки."
  });
});
module.exports = router;
