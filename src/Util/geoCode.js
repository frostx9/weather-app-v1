const request = require('request')
const geoCode = (city, callback)=>{

    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?access_token=pk.eyJ1IjoiZnJvc3R4OSIsImEiOiJja3NlMHI1MWQwNXRlMndvcGxnYzR0azlrIn0.lBnm3Q6tvJv7YXwdtlArfg&limit=1'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to Conneect Network')
        }else if(response.body.features.length ===0){
            callback('Unable to find location')
        }else{
            callback({
                Longitude:response.body.features[0].center[0],
                Latitude: response.body.features[0].center[1],
                Location: response.body.features[0].place_name
            })
        }
    })
}




module.exports = geoCode