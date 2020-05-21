const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locationQuery = process.argv[2]

if (!locationQuery)
{
    console.log('Please provide a location')
} else {
    geocode(locationQuery, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            console.log('Error: ', error)
        }
    
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                console.log('Error: ', error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}

