const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// POST API to calculate the average of an array of numbers
app.post("/calculate-average", (req, res) => {
    const { numbers } = req.body;

    // Validate input
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "Invalid input. Provide an array of numbers." });
    }

    // Calculate average
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    res.json({ average });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
