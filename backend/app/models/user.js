
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, maxlength: 100, required: true },
    phone: { type: String, maxlength: 12 },
    role: { type: String, enum: ['Admin', 'Client'], default: 'Client' }

}, { collection: 'users' });


module.exports = mongoose.model('User', userSchema);
