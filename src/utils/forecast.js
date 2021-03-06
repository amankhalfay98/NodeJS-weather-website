const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=42d2876622ae710408e8085415bce9c2&query='+latitude+','+longitude+'&units=m'

    request({ url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The UV Index is  ' + body.current.uv_index + ', with a Wind Speed of ' + body.current.wind_speed)
        }
    })
}


module.exports = forecast