const mongoose =require('mongoose')
const {Schema} =mongoose
const UserSchema =new Schema({
    Username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique: true, //to check if the user already exists in database or not.
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
});
module.exports=mongoose.model("user",UserSchema)
