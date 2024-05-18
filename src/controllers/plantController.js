import * as plantData from "../data/plantData.js"

export const getSpeices = async (req, res) => {
    try {
        console.log(req.body)
        const file = req.body
        const result = plantData.getSpecies(file);
        res.status(200).json(result);
    }
    catch (error){
        // Error handlers
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Error response from API:', error.response.data);
            console.error('Status code:', error.response.status);
            console.error('Headers:', error.response.headers);
            res.status(error.response.status).send({
              error: 'Error response from API',
              details: error.response.data
            });
          } else if (error.request) {
            // No response was received
            console.error('No response received from API:', error.request);
            res.status(500).send('No response received from API.');
          } else {
            // Something else happened while setting up the request
            console.error('Error setting up request:', error.message);
            res.status(500).send('An error occurred while identifying the plant.');
          }
        // if (err.name === "ValidationError") {
        //     res.status(400).json({ error: "Bad Request" });
        // } else {
        //     res.status(500).json({ error: "Internal server error" });
        // }
    }
}