const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require("./routes/router");

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/proDb', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', Router);

app.listen(3000,()=>console.log("server is running"));