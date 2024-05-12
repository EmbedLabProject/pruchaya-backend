import express from "express";

import * as sensorController from "../controllers/sensorController.js";

const router = express.Router();

router.post("/update", sensorController.updateSensorData);
router.post("/get", sensorController.getSensorData);


export default router;