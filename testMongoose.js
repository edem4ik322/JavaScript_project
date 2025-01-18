const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const tv = mongoose.model('Tv', { name: String });
const sber65 = new tv({ name: 'Sber QLED 4K UHD 65' });
sber65.save().then(() => console.log('Телевизор Sber QLED 4K UHD 65'));