const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const productModel = require('../models/productModel');

router.get('/',function(req,res){
    productModel.find()
    .exec()
    .then(kuchbhi=>{
        //res.json(kuchbhi).status(200);
        res.render('saamaan',{products:kuchbhi});
    })
});

router.post('/',function(req,res){
    const newProduct = new productModel({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    newProduct.save(function(err,product){
        if(err)
            res.json(err).status(400);
        else
            res.json(product).status(201);
    });
});

router.get('/:productID',function(req,res){
    const id = req.params.productID;
    productModel.findById(id)
    .exec()
    .then(product=>{
        res.json(product).status(200);
    });
});

router.delete('/:productID',function(req,res){
    const id = req.params.productID;
    productModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
    .catch(err=>{
        res.json(err).status(400);
    })
});

module.exports = router;