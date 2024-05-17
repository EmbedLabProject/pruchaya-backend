import express from "express";

import * as plantController from "../controllers/plantController.js";

const router = express.Router();

router.post("/get", plantController.getSpeices);


export default router;