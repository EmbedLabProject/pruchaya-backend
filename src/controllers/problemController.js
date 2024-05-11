// import GameResult from "../models/gameResultModel.js";

import * as traffyData from "../data/traffyData.js";
import * as problemData from "../data/problemData.js";


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

export const setProbStatus = async (req, res) => {
    try {
        
        const id = req.body.ticket_id;
        const status = req.body.status;
        if (status == "processing"){
            problemData.setProcessing(id);
            res.status(200).json({ message: "Success" });
        }
        else if (status == "solved"){
            problemData.setSolved(id);
            res.status(200).json({ message: "Success" });
        }
        else if (status == "ongoing"){
            problemData.setOngoing(id);
            res.status(200).json({ message: "Success" });
        }
        else {
            res.status(400).json({ error: "Bad Request" });
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

export const getProbStatus = async (req, res) => {
    try {
        
        const id = req.body.ticket_id;
        if (problemData.isProcessing(id)){
            problemData.setProcessing(id);
            res.status(200).json({ticket_id: id, status: "processing"});
        }
        else if (problemData.isSolved(id)){
            problemData.setSolved(id);
            res.status(200).json({ticket_id: id, message: "solved"});
        }
        else {
            problemData.setOngoing(id);
            res.status(200).json({ticket_id: id, message: "ongoing"});
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






