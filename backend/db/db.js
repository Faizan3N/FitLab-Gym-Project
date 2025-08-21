import mongoose from "mongoose";
const connectToDatabase= async () => {
    try {
        //console.log(process.env.MONGODB_URL)
        //alert(process.env.MONGODB_URL)
       await mongoose.connect (process.env.MONGODB_URL) 
    } catch (error) {
     console.log (error)   
    }
}
export default connectToDatabase