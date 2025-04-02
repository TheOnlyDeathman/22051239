const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// POST API to analyze social media engagement
app.post("/analyze-engagement", (req, res) => {
    const { likes, comments, shares } = req.body;

    // Validate input
    if (
        typeof likes !== "number" || 
        typeof comments !== "number" || 
        typeof shares !== "number"
    ) {
        return res.status(400).json({ error: "Invalid input. Provide numbers for likes, comments, and shares." });
    }

    // Calculate engagement score
    const engagementScore = (likes * 1) + (comments * 2) + (shares * 3);

    res.json({ engagementScore });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
