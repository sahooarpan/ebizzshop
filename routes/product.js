const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');
const Product = require('../models/Product');
const User = require('../models/User');

router.get('/',isAuth,async(req,res)=>{
    try {
     
    const products = await Product.find({});
    res.send(products);   
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.post('/',isAuth,async(req,res)=>{
    try {       
        const user = await User.findById(req.user._id?req.user._id:req.user.id).select('-password');
        console.log(user);
        const newProduct=new Product({
            name:req.body.name,
            price:req.body.price,
            productImage:req.body.productImage,
            user:user
        })
        console.log(newProduct)
        const post = await newProduct.save();
        console.log(post)
        res.json(post);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
})

router.put('/edit/:id',isAuth,async(req,res)=>{
    try {
  
      let product = await Product.findById(req.params.id);
      
      if(req.user._id!==product.user.toString()){
        res.status(401).send("You are not authorized to edit")
    }
      
      if(product){
            
        console.log(product) 
        product= await Product.updateOne({_id:req.params.id},{$set:{name:req.body.name,price:req.body.price,productImage:req.body.productImage}})
        product = await Product.findById(req.params.id) 
        res.status(200).send(product)
              
      }
      
      else{
        res.status(404).send("product not found")
      }
      
    } catch (error) {
      console.log(error.message)
      return res.status(500).send({ message: error.message });
    }
    })

    router.delete("/:id",isAuth,async(req,res)=>{
        try {
            const product = await Product.findById(req.params.id);
            if(!product){
                return res.status(404).json({msg:"product not found"})
            }
            if(product.user.toString()!==req.user._id){
                return res.status(401).json({msg:"User not Authorized"})
            }
            await product.remove();
            res.json({msg:"product was removed"});
        } catch (error) {
            console.log(err.message);
            if(err.kind==='ObjectId'){
                return res.status(404).json({msg:'product not found'});
            }
            res.status(500).send('Server error');
        }
    })



module.exports=router;