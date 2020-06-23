const express = require('express');
const Login = require('../Model/loginModel');
const Register = require('../Model/registerModel');
const route = express();

route.get('/',(req,res)=>{
    Login.find()
    .then((details)=>res.send(details));
})

route.post('/',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const login = new Login({
        username:username,
        password:password
    })
    login.save()
    .then(() => res.send('Exercise added!'));
})

route.get('/register',(req,res)=>{
    Register.find()
    .then((details)=>res.send(details));
})

route.post('/register',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log(req.body);

    const register = new Register({
        username:username,
        password:password,
        email:email
    })
    register.save()
    .then(() => res.send('Exercise added!'));
})

module.exports = route;