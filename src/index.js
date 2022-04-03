








const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const Usercontroller = require("./controllers/user.controller")
const {register,login} = require("./controllers/auth.controller")


const hairController = require('./controller/hair.controller')
const bathController = require('./controller/bath.controller')
//const productController=require("./controller/product.controller")


const app = express();
app.use(cors({

    origin: "http://127.0.0.1:5500",
})
);
app.use(express.json())
app.use("/user",Usercontroller)

app.post("/register",register)
app.post("/login",login)

app.use("/hairs",hairController)
app.use("/baths",bathController)
//app.use("/products",productController)






app.listen(process.env.PORT||5000,async function(){
    try{

        console.log("server start 5000 port")
        await connect()
    }
    catch(err){
        console.error(err);
    }
})