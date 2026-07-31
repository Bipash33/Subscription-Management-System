const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
{
    planName:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    duration:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Active"
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Subscription",subscriptionSchema);