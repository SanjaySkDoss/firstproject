const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username: String,
    password: String
})

const Login = mongoose.model('detail',loginSchema);

module.exports = Login;


