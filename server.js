const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const seed = require('./models/marksmen.js')
const MarksmanSchema = require('./models/markschema.js')
const app = express();

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))


// app.get('/seed', (req, res) => {
//     MarksmanSchema.create(seed).then(() => {
//         res.send(seed)
//     })
// })

app.get('/', (req, res) => {
    res.send('Working on some marksmen')
})

app.get('/marksmen', (req, res) => {
    MarksmanSchema.find({}).then((allMarksmen) => {
        res.render('index.ejs', {
            Marksman: allMarksmen
        })
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/marksmen').then (() => {
  console.log('The connection with mongod is established')
})

app.listen(3000, ()=>{
    console.log('listening for ADCs');
});