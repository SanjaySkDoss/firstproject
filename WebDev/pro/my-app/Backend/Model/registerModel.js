const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    username : String,
    password : String,
    email : String
})

const Register = mongoose.model('register',registerSchema);

module.exports = Register;

