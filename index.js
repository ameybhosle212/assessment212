const express = require('express')
const BMI_Model = require('./models/model_bmi')
const app = express()
const mongoose = require("mongoose") 
const { Find_BMI_AND_CALCULATE } = require('./helper/inde')
const csrf = require('csurf')
var bodyParser = require('body-parser')
var sessionExpress = require('express-session')
const cookieParser = require('cookie-parser')
require('dotenv').config()
// const redis = require('redis')
// const clientRedis = redis.createClient({
//     host:'127.0.0.1',    
//     port:6379
// });
const io = require('socket.io')
const helmet = require('helmet')
// DB

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DONE");
})

// MiddleWares
// app.use(csrf())
// var csrfProtection = csrf({ cookie: true })
// app.use(function (req, res, next) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.locals.csrftoken = req.csrfToken();
//     next();
//   });
// var parseForm = bodyParser.urlencoded({ extended: false })
app.use(cookieParser())
app.use(helmet())
app.set("view engine","ejs")
app.use(sessionExpress({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// Routes

app.get("/", async (req,res)=>{
    var value = [];
    var countCategory= 0 , countHealth_Risk = 0;
    var {page , size } = req.query;
    if(!page){
        page = 1;
    }
    if(!size){
        size = 10;
    }
    const skip = (page - 1) * size;
    await BMI_Model.find().limit(size).skip(skip).then(val =>{
        if(val){
            // if(val.length !== JSON.parse(clientRedis.get("data")).length){
            //     clientRedis.set("data",JSON.stringify(val));   
            // }
            val.map((data)=>{
                if(data.BMI_Category === "Overweight") countCategory++ ;
                if(data.Health_Risk === "Enhanced risk") countHealth_Risk++ ;
                value.push({
                    Gender:data.Gender,
                    BMI_Value:data.BMI_Value,
                    Health_Risk:data.Health_Risk,
                    BMI_Category:data.BMI_Category,
                    HeightCm: data.HeightCm,
                    WeightKg:data.WeightKg
                })
            })
            res.render("index",{'value':value , 'countCategory':countCategory , 'countHealth_Risk':countHealth_Risk})
        }else{
            return res.json({"DATA":"WRONG"})
        }
    })
    
})

app.get("/add" , (req,res)=>{
    res.render("add",{ 'csrfToken': req.csrfToken() })
})

app.post("/add" , (req,res)=>{
    const { Gender , HeightCm , WeightKg } = req.body;
    try {
        const newBMI = new BMI_Model({
            Gender:Gender ,
            HeightCm:HeightCm ,
            WeightKg:WeightKg,

        })
        var { BMI_Category , BMI_Value , Health_Risk } = Find_BMI_AND_CALCULATE(HeightCm , WeightKg);
        newBMI.BMI_Category = BMI_Category;
        newBMI.BMI_Value = BMI_Value.toFixed(2);
        newBMI.Health_Risk = Health_Risk;
        newBMI.save();
        return res.redirect("/")
    } catch (error) {
        return res.sendStatus(404).json({"DATA":"NOT WORKED"})
    }
})

// Server

app.listen(8081,()=>{
    console.log("SERVER AT 8080");
})