import asynchandler from "../utils/Asynchandler.js";
import Apierror from "../utils/Apierror.js";
import leader from "../model/leader.models.js";
import Apiresponse from "../utils/Apiresponse.js";

const leaderboard = asynchandler(async (req, res) => {
  const { moves , username} = req.body;

  // Validate
  if (moves === undefined || typeof moves !== "number" || !username) {
    throw new Apierror(400, "moves must be a number and is required");
  }

  

  try {
    const leaderboardEntry = await leader.findOneAndUpdate(
      { username },
      { moves, updatedAt: new Date() },
      { new: true, upsert: true } // upsert = update if exists, insert if not
    );

    return res
      .status(201)
      .json(new Apiresponse(201, leaderboardEntry, "Successfully saved move"));
  } catch (error) {
    console.error("Error saving moves:", error);
    throw new Apierror(500, "Internal Server Error while saving moves");
  }
});


const getAllLeaderboardentry = asynchandler(async(req,res)=>{
   try{
     const leaders = await leader.find();
     if(!leaders){
        throw new Apierror(400,"leaders not found");
    }
    return res.status(201).json(new Apiresponse(200,leaders,"Leaders found successfully"));
   }catch(error){
    console.log("dta canoot be fetched",error)
   }
})

export { leaderboard , getAllLeaderboardentry}
