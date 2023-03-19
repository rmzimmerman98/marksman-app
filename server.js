const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const seed = require('./models/marksmen.js')
const MarksmanSchema = require('./models/markschema.js');
const app = express();

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))


app.get('/seed', (req, res) => {
    MarksmanSchema.create(seed).then(() => {
        res.send(seed)
    })
})

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

app.get('/marksmen/new', (req, res) => {
    res.render('new.ejs')
})

app.get('/:id', (req, res) => {
    MarksmanSchema.findById(req.params.id).then((theMarksman) => {
        res.render('show.ejs', {
            Marksman: theMarksman
        })
    })
})

app.get('/:id/edit', (req, res) => {
    MarksmanSchema.findById(req.params.id).then((theMarksman) => {
        res.render('edit.ejs', {
            Marksman: theMarksman
        })
    })
})  

app.post('/marksmen', (req, res) => {
    MarksmanSchema.create(req.body).then((createdMarksman) => {
        res.redirect('/marksmen')
    })
})

app.delete('/:id', (req, res) => {
    MarksmanSchema.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/marksmen')
    })
})

app.put('/:id', (req, res) => {
    MarksmanSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
        res.redirect('/marksmen')
    })
})


mongoose.connect('mongodb://127.0.0.1:27017/marksmen').then (() => {
  console.log('The connection with mongod is established')
})

app.listen(3000, ()=>{
    console.log('listening for ADCs');
});