const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to receive and display data
app.post('/data', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:', receivedData);
    res.json({
        message: 'Data received successfully',
        data: receivedData
    });
});

// Route to get data
app.get('/data', (req, res) => {
    res.send('Welcome to the data endpoint! Send a POST request to submit data.');
});

// Default route
app.get('/', (req, res) => {
    res.send('Server is running! Use /data endpoint to interact.');
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
