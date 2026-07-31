const Subscription = require("../models/Subscription");

// Create Subscription

const createSubscription = async(req,res)=>{

    try{

        const subscription = await Subscription.create(req.body);

        res.status(201).json(subscription);

    }
    catch(err){

        res.status(500).json({message:err.message});

    }

};


// Get Current Subscription

const getSubscription = async(req,res)=>{

    try{

        const subscription = await Subscription.findOne().sort({createdAt:-1});

        res.json(subscription);

    }
    catch(err){

        res.status(500).json({message:err.message});

    }

};

module.exports={

    createSubscription,
    getSubscription

};