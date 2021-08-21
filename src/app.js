const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

const hbs = require('hbs')
const geoCode = require('./Util/geoCode')
const foreCast = require('./Util/foreCast')
// const request = require('request')
//Static Page Custom Location
app.use(express.static(path.join(__dirname,'../page')))

// View Configaration
app.set('view engine','hbs')
// View Custom Location
const viewpath = path.join(__dirname,'../public/views')
app.set('views',viewpath)

// Partitals
const partialsPath = path.join(__dirname,'../public/partial')
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        dev:'Frostx9'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        help: 'This is Help Page',
        dev: 'Frostx9'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        dev:'Frostx9'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Provide a Location'
        })
     }else{
        geoCode(req.query.address,({Latitude,Longitude,Location}={})=>{
            // console.log(respond)
            foreCast(Latitude,Longitude,(respond1)=>{
                res.send({
                    Temp:respond1,
                    Location:Location
                })
                    
            })         
        })  

     }
         
})




app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        error: 'Page Not Found'
    })
})

app.listen(port,()=>{
    console.log(`Server is runnin at ${port}`)
})