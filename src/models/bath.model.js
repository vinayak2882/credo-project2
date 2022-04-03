const mongoose = require("mongoose")

const bathSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Brand:{type:String,required:true},
    imageurl:{type:String,required:true},
    typeofproduct:{type:String,required:true},
    price:{type:Number,required:true}
},
{
    versionKey: false,
    timestamps: true,
})

const Bath = mongoose.model("bath",bathSchema)

module.exports = Bath
