
import * as chatbot from "../api/chatbot.js";


export const sendPrompt = async (req, res) => {
    try {
        
        const prompt = req.body.prompt;
        const response = await chatbot.onSent(prompt);
        res.status(200).json({ response:  response});
    }
    catch (err){
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
          }
    }
};








