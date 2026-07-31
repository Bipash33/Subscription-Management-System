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

// Upgrade Subscription

const upgradeSubscription = async (req, res) => {

    try {

        const subscription = await Subscription.findOne().sort({ createdAt: -1 });

        if (!subscription)
            return res.status(404).json({ message: "No subscription found" });

        if (subscription.planName === "Basic") {
            subscription.planName = "Pro";
            subscription.price = 499;
        }
        else if (subscription.planName === "Pro") {
            subscription.planName = "Premium";
            subscription.price = 999;
        }

        await subscription.save();

        res.json(subscription);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};


// Downgrade Subscription

const downgradeSubscription = async (req, res) => {

    try {

        const subscription = await Subscription.findOne().sort({ createdAt: -1 });

        if (!subscription)
            return res.status(404).json({ message: "No subscription found" });

        if (subscription.planName === "Premium") {
            subscription.planName = "Pro";
            subscription.price = 499;
        }
        else if (subscription.planName === "Pro") {
            subscription.planName = "Basic";
            subscription.price = 199;
        }

        await subscription.save();

        res.json(subscription);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};


// Cancel Subscription

const cancelSubscription = async (req, res) => {

    try {

        const subscription = await Subscription.findOne().sort({ createdAt: -1 });

        if (!subscription)
            return res.status(404).json({ message: "No subscription found" });

        subscription.status = "Cancelled";

        await subscription.save();

        res.json(subscription);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

module.exports = {
    createSubscription,
    getSubscription,
    upgradeSubscription,
    downgradeSubscription,
    cancelSubscription
};