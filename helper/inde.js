module.exports = {
    Find_BMI_AND_CALCULATE:(height , weight )=>{
        const bmi_value =  weight*100 /height ;
        if(bmi_value <= 18.4){
             return {
                "BMI_Category" : "Underweight",
                "BMI_Value" : bmi_value,
                "Health_Risk" : "Malnutrition risk"
             }
        }if(bmi_value >= 18.5 && bmi_value <= 24.9){
             return {
                "BMI_Category" : "Normal weight",
                "BMI_Value" : bmi_value,
                "Health_Risk" : "Low risk"
             }
        }if(bmi_value >= 25 && bmi_value <= 29.9){
             return {
                "BMI_Category" : "Overweight",
                "BMI_Value" : bmi_value,
                "Health_Risk" : "Enhanced risk"
             }
        }if(bmi_value >= 30 && bmi_value <= 34.9){
             return {
                "BMI_Category" : "Moderately obese",
                "BMI_Value" : bmi_value,
                "Health_Risk" : "Medium risk"
             }
        }if(bmi_value >= 35 && bmi_value <= 39.9){
             return{
                "BMI_Category" : "Severely obese",
                "BMI_Value" : bmi_value,
                "Health_Risk" : "High risk"
             }
        }if(bmi_value >= 40){
             return {
                "BMI_Category" : "Very severely obese",
                "BMI_Value" : bmi_value,
                "Health_Risk" : "Very high risk"
             }
        }
    }
}