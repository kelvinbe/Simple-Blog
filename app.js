const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');


const app = express()

//connect to mongodb
const dbURI = 'mongodb+srv://Kelvin:1234@cluster0.8no4u.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => app.listen(3000))
        .catch((err) => console.log(err))


//register view engine

app.set('view engine', 'ejs')


// listen for requests





app.use(morgan('dev'))


app.get('/', (req,res) => {
    const blogs = [
        {title: 'elloooo', snippet: 'Badaboom badaboom'},
        {title: 'elloooo', snippet: 'Badaboom badaboom'},
        {title: 'elloooo', snippet: 'Badaboom badaboom'}
    ]
    // res.send('<p> home page</p>')
    res.render('index', {title: 'Home', blogs})
})


app.get('/about', (req,res) => {
    // res.send('<p> about page</p>')
    res.render('about', {title: 'About'})

})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'})
})


//404 page

app.use((req, res) => {
    res.render('404', {title: '404'})
})


