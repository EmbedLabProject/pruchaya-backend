import express from "express";

import * as plantController from "../controllers/plantController.js";

const router = express.Router();

router.post("/getSpecies", plantController.getSpeices);


export default router;