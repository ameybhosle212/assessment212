const mongoose = require("mongoose")

const BmiSchema = new mongoose.Schema({
    Gender:{
        type:String
    },
    HeightCm: {
        type:Number,
        required:true
    },
    WeightKg:{
        type:Number,
        required:true
    },
    Health_Risk:{
        type:String,
        required:true
    },
    BMI_Category:{
        type:String,
        required:true
    },
    BMI_Value:{
        type:Number,
        required:true
    },
})

const BMI_Model = new mongoose.model('BMI',BmiSchema)

module.exports = BMI_Model;