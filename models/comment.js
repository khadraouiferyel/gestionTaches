const mongoose = require("mongoose");



const comment = new mongoose.Schema({
    body:String,
    date:{type:Date,default:Date.now()},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',required:true
    },
    user:{
        type:Object,
    },
    tacheId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tache',required:true
    },
    isModified: {
        type: Boolean,
        default: false
    }
})

module.exports= mongoose.model("Comment",comment)