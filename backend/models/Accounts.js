const mongoose= require ("mongoose")

const AccountSchema= new mongoose.Schema({
    name:String,
    account:Number,
    email:String,
    phone:String,
    address:String,
    balance: Number
})
const AccountModel=new mongoose.model("customers", AccountSchema)
module.exports=AccountModel
