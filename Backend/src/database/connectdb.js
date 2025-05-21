import mongoose from "mongoose";

const connectDB = async()=>{
    try{
    const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}`)
    console.log(`Database Connected \n Database host=${connectioninstance.connection.host}`);

    }catch(err){
        console.log("error");
    }

}

export default connectDB;