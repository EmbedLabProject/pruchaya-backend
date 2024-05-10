// import GameResult from "../models/gameResultModel.js";

import * as traffyData from "../data/traffyData.js";


export const getProblem = async (req, res) => {
    try {
        const result = await traffyData.getTraffyData();
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



