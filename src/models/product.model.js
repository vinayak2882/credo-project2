const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
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

const Product = mongoose.model("product",productSchema)

module.exports = Product;