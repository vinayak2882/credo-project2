const express = require("express")
const Hair = require('../models/hair.model')

const router = express.Router()

router.post('',async(req,res)=>{
    const hair = await Hair.create(req.body)
    return res.status(200).send(hair)
})



router.get("", async (req, res) => {
    try{
        const hair = await Hair.find().lean().exec()
        return res.status(200).send(hair)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router