const express = require("express")
const Bath = require('../models/bath.model')

const router = express.Router()

router.post('',async(req,res)=>{
    try
    {
    const bath = await Bath.create(req.body)
    return res.status(200).send(bath)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }

})
router.get("", async (req, res) => {
    try{
        const bath = await Bath.find().lean().exec()
        return res.status(200).send(bath)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router