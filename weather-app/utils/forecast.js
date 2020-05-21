const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dee42cc1e4c34290371ef00305224566&query=' + latitude + ',' + longitude+ '&units=f'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)

        } else if (body.error) {
            callback("Unable to find location", undefined)

        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
            // console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out, and it feels like " + response.body.current.feelslike + " degrees out.")

        }
    })
}

module.exports = forecast