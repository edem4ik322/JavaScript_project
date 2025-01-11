var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница телевизора Sber QLED 4K UHD 65 */
router.get('/Sber-QLED-4K-UHD-65', function(req, res, next) {
  res.send("<h1>Страница телевизора Sber QLED 4K UHD 65</h1>")
});

/* Страница телевизора Яндекс ТВ Станция Про с Алисой 55 */
router.get('/Yandex-TV-Pro-with-Alice-55', function(req, res, next) {
  res.send("<h1>Страница телевизора Яндекс ТВ Станция Про с Алисой 55</h1>");
});

/* Страница телевизора Samsung UE50CU8000UXRU */
router.get('/Samsung-UE50CU8000UXRU', function(req, res, next) {
  res.send("<h1>Страница телевизора Samsung UE50CU8000UXRU</h1>");
});

/* Страница телевизора TCL 55 55P635 4K LCD */
router.get('/TCL-55-55P635-4K-LCD', function(req, res, next) {
  res.send("<h1>Страница телевизора TCL 55 55P635 4K LCD</h1>");
});

/* Страница телевизора Haier 55 Smart TV S3 RU */
router.get('/Haier-55-Smart-TV-S3-RU', function(req, res, next) {
  res.send("<h1>Страница телевизора Haier 55 Smart TV S3 RU</h1>");
});

module.exports = router;
