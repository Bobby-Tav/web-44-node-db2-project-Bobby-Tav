// DO YOUR MAGIC
const express = require('express')
const Cars = require('./cars-model')
const {checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique 
} = require('./cars-middleware')

const router = express.Router()

router.get('/',async (req,res,next) =>{
    try{
       const allCars =  await Cars.getAll()
       res.json(allCars)
    }catch(err){
        next(err)
    }
})
router.get('/:id',checkCarId,async (req,res,next) =>{
    try{
        res.json(req.car)
    }catch(err){
        next(err)
    }
})
router.post('/',async (req,res,next) =>{
    res.json('posting a car')
})



module.exports = router