import * as plantData from "../data/plantData.js"

export const getSpeices = async (req, res) => {
    try {
        console.log(req.body)
        const form = req.body
        const result = plantData.getSpecies(form);
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
}