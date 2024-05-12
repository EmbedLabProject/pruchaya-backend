
import * as sensorData from "../data/sensorData.js";

export const getSensorData = async (req, res) => {
    try {
        const deviceId = req.body.device_id;
        const result = sensorData.getSensorData(deviceId);
        res.status(200).json(result);
    }
    catch (err){
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            res.status(500).json({ error: "Internal server error" });
          }
    }
};

export const updateSensorData = async (req, res) => {
    try {

        if (req.body.hasOwnProperty("device_id")){
            sensorData.updateSensorData(req.body);
            res.status(200).json({message: "success"});
        }

    }
    catch (err){
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            res.status(500).json({ error: "Internal server error" });
          }
    }
};






