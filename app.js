const request = require('request')
const geocode = require('./geocode.js')
const forecast = require('./forecast.js')

const address = process.argv[2]
//console.log(address)
if(address ===undefined){
  return console.log('Please Provide a Location')
}

geocode(process.argv[2], (error,data)=>{
      if (error){
        return console.log('Error:',error)
      }
      console.log(data.location)
      forecast(data.latitude,data.longitude,(error,data)=>{
        if (error){
          return console.log('Error:',error)
        }
          console.log(data)
        
    })
    
})


