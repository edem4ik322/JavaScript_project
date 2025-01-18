const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })

schema.methods.on = function(){
    console.log(this.name + " включился")
    }

const tv = mongoose.model('Tv', schema);
const sber65 = new tv({ name: 'Sber QLED 4K UHD 65' });
sber65.save().then(() => sber65.on());