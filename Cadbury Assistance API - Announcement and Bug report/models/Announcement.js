const mongoose = require('mongoose')

const AnnouncementSchema= new mongoose.Schema({
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
    }
});

/*module.exports = {
    AnnouncemntSchema: AnnouncementSchema
}*/
module.exports= mongoose.model('AnnouncementSchema', AnnouncementSchema)