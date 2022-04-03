const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userschema = new mongoose.Schema(
    {


        firstname: {type:String, required: true},
        lastname:{type:String, required: true},
        birthinp:{type:Date, required: true},
        email:{type:String, required: true},
        password: {type:String, required: true},
        // CHECKTICK: {type:String, required: false},
        
        },
    { 
        timestamps : true,
        versionKey : false
    })


    //===================before saving pasword convert is descrptinn form===>
    //bcrypt
    //pre

   userschema.pre("save",function(next){
      const hash = bcrypt.hashSync(this.password, 8);
      this.password = hash
         return next();

   })


//    <-------------------encrypt----------->
userschema.methods.checkPassword = function(password)
{ 
     return bcrypt.compareSync(password,this.password)
}

//    <==================encrypt=============>
     const User = mongoose.model('user',userschema)

    module.exports = User;