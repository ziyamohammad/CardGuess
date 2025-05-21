import dotenv from "dotenv";
import connectDB from "./database/connectdb.js";
import app from "./app.js";

dotenv.config({
    path:"./env"

})

const Port = process.env.PORT || 3000 ;
connectDB()
.then(()=>{
    app.listen(Port,()=>{
        console.log(`App is listening on port ${Port}`);
    })
})
.catch((err)=>{
    console.log("error in connecting to database",err)
})