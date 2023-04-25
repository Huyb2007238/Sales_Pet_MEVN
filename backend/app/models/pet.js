
const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    breed: { type: String, required: true },
    color: { type: String, maxlength:100, required: true},
    image:{type: String, maxlength: 200},
    gender: { type: String, enum: ['Cái', 'Đực'] },
    price: { type: Number, required: true },
    typeOf: { type: String, enum: ['Chó', 'Mèo', 'Hamster', 'Thỏ'] }
    
}, {collection:'pets'});


module.exports = mongoose.model('Pet', petSchema);
