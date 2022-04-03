const mongoose = require("mongoose")

const hairSchema = new mongoose.Schema({
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

const Hair = mongoose.model("hair",hairSchema)

module.exports = Hair
