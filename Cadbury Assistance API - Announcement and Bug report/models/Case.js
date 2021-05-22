const mongoose = require('mongoose');

const caseSchema= new mongoose.Schema({
    Subject: {
        type:String,
        required: true
    },
    Description: {
        type:String,
        required: true
    },
    Date:{
        type:String,
        required:true  
    },
    isActive:{
        type:Boolean,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    CustomerEmail:{
        type:String,
        required:true       
    }
});
/*
module.exports = {
    CaseSchema: CaseSchema
}
*/
module.exports= mongoose.model('caseSchema', caseSchema)