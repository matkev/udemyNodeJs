const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setting up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

//for views, using render and not send
//no need to include the file extension in the argument
app.get('', (req, res) => {
    res.render('index', {
        title: 'WeatherApp',
        name: 'Matthew K'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Matthew K'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Please help yourself',
        name: 'Matthew K'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '',
        location: 'Montreal'
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404 Error',
        errorMessage: 'Help page not found',
        name: 'Matthew Kevork'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Error',
        errorMessage: 'Page not found',
        name: 'Matthew Kevork'
    })})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})