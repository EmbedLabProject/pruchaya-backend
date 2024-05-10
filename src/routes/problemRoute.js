import express from "express";

import * as problemController from "../controllers/problemController.js";

const router = express.Router();

router.get("/", problemController.getProblem);
// router.post("/", playerController.getPlayerByName);
// router.post("/sethigh", playerController.setNewHigh);
// router.post("/setavatar", playerController.setNewAvatar);
// router.get("/leaderboard", playerController.getTopPlayers);


export default router;