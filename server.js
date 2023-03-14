const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const seed = require('./models/marksmen.js')
const app = express();

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('Working on some marksmen')
})


mongoose.connect('mongodb://127.0.0.1:27017/marksman').then (() => {
  console.log('The connection with mongod is established')
})

app.listen(3000, ()=>{
    console.log('listening for money');
});