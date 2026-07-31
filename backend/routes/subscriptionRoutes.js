const express = require("express");

const router = express.Router();

const {
    createSubscription,
    getSubscription,
    upgradeSubscription,
    downgradeSubscription,
    cancelSubscription
} = require("../controllers/subscriptionController");


router.post("/",createSubscription);
router.get("/",getSubscription);

router.put("/upgrade", upgradeSubscription);
router.put("/downgrade", downgradeSubscription);
router.put("/cancel", cancelSubscription);

module.exports=router;