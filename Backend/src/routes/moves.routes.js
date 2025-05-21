import { Router } from "express";
import {leaderboard, getAllLeaderboardentry } from "../controller/leader.controllers.js";


const router = Router();

router.route("/moves").post(leaderboard)
router.route("/getmoves").get(getAllLeaderboardentry)

export default router;