const request = require('request')
const foreCast = (lat,long,callback)=>{

    const url1 ='http://api.weatherstack.com/current?access_key=21bae31cdf1088f0168ef027372b2882&query='+lat+','+long+'&units=f'

    request({url:url1,json:true},(error,{body})=>{
            if(error){
                callback('Unable to Connect')
            }else if(body.error){
                callback('Cant Find Location')
            }else{
                callback(` Temp is : ${body.current.temperature} and Location is ${body.location.name}`)
            }
    })
}




module.exports= foreCast
