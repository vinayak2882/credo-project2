const express = require("express")
const Product = require('../models/product.model')

const router = express.Router()

router.post('',async(req,res)=>{
    try
    {
    const product = await Product.create(req.body)
    return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }

})
router.get("", async (req, res) => {
    try{
        const product = await Product.find().lean().exec()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message});
    }
})

router.get("/:id", async (req, res) => {
    try{
        const product = await Product.findOne(req.params.id,req.body,{new:true})
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});

module.exports = router;