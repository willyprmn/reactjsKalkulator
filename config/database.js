//setup connection mongodb
const mongoose = require('mongoose');

const mongodb = 'mongodb://localhost/db_kalkulator';

mongoose.connect(
    mongodb, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('Mongodb Connected'));

mongoose.Promise = global.Promise;

module.exports = mongoose;