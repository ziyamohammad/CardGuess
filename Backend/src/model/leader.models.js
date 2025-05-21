import mongoose from "mongoose";

const leaderSchema = mongoose.Schema({
    moves:{
        type:Number,
        required:true,
    }
},{timestamps:true})
const leader = new mongoose.model("leader",leaderSchema)

export default leader;