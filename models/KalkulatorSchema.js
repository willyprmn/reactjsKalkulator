const mongoose = require('mongoose');

const KalkulatorSchema = new mongoose.Schema({
    angka1: {
        type: Number,
        required: true
    },
    angka2: {
        type: Number,
        required: true
    },
    operator: {
        type: String,
        required: true
    },
    hasil: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Kalkulator', KalkulatorSchema);