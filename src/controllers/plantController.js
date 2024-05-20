import * as plantData from "../data/plantData.js"

export const getSpeices = async (req, res) => {
    try {
        console.log(req.body)
        const imageFiles = req.body
        const result = await plantData.getSpecies(imageFiles);
        res.status(200).json(result);
    }
    catch (error){
        // Error handler
        console.error('Error:', error);
        // res.status(500).send('An error occurred while identifying the plant.');
        if (error.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
        } else {
            res.status(500).json({ error: "An error occurred while identifying the plant." });
        }
    }
}