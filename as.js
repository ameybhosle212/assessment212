// const mongoose = require("mongoose")
// mongoose.connect('mongodb+srv://anu:anu@cluster0.6ky81.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
//     console.log("DONE");
// })
// const BMI = require('./models/model_bmi')
// const data = require('./as.json');
// const { Find_BMI_AND_CALCULATE } = require("./helper/inde");

// function aki() {
//     data.map(async (val)=>{
//         var newBMI = await BMI({
//             Gender:val.Gender,
//             HeightCm: val.HeightCm,
//             WeightKg:val.WeightKg
//         });
//         var { BMI_Category , BMI_Value , Health_Risk } = Find_BMI_AND_CALCULATE(val.HeightCm , val.WeightKg);
        // if(bmi_value <= 18.4){
        //     newBMI.BMI_Category = "Underweight"
        //     newBMI.BMI_Value = bmi_value
        //     newBMI.Health_Risk = "Malnutrition risk"
        // }if(bmi_value >= 18.5 && bmi_value <= 24.9){
        //     newBMI.BMI_Category = "Normal weight"
        //     newBMI.BMI_Value = bmi_value
        //     newBMI.Health_Risk = "Low risk"
        // }if(bmi_value >= 25 && bmi_value <= 29.9){
        //     newBMI.BMI_Category = "Overweight "
        //     newBMI.BMI_Value = bmi_value
        //     newBMI.Health_Risk = "Enhanced risk"
        // }if(bmi_value >= 30 && bmi_value <= 34.9){
        //     newBMI.BMI_Category = "Moderately obese"
        //     newBMI.BMI_Value = bmi_value
        //     newBMI.Health_Risk = "Medium risk"
        // }if(bmi_value >= 35 && bmi_value <= 39.9){
        //     newBMI.BMI_Category = "Severely obese"
        //     newBMI.BMI_Value = bmi_value
        //     newBMI.Health_Risk = "High risk"
        // }if(bmi_value >= 40){
        //     newBMI.BMI_Category = "Very severely obese"
        //     newBMI.BMI_Value = bmi_value
        //     newBMI.Health_Risk = "Very high risk"
        // }
//         newBMI.BMI_Category = BMI_Category;
//         newBMI.BMI_Value = BMI_Value.toFixed(2);
//         newBMI.Health_Risk = Health_Risk;
//         newBMI.save();
//     })
// }

// aki()

// const { BMI_Category } = Find_BMI_AND_CALCULATE(177 , 75)
// console.log(BMI_Category);