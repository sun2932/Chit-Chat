const mongoose=require("mongoose");

const massageModel=mongoose.Schema(
    {
        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        content:{type:String,trim:true},
        chat:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Chat"
        }
    },
    {
        timestamps:true
    }
);

const Massage=mongoose.model("Massage",massageModel);
module.exports=Massage;