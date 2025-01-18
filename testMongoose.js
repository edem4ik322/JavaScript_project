const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var TV = require('./models/tv.js').TV
var tv = new TV({
title: "Sber QLED 4K UHD 65",
nick: "Sber-QLED-4K-UHD-65",
})
tv.save();