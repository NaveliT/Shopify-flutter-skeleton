const express= require('express');
const router= express.Router();
const item= require('../models/model');

router.get('/',async(req,res)=>{
    const items= await item.find();
    res.json(items);
})

router.post('/',async(req,res)=>{
    const post= new item({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
    })
    await post.save();
    res.json(post)
})
module.exports= router;