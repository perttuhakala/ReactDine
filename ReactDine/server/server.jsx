// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const cors = require('cors');

// Create an Express application
const app = express();

// Specify the port for the server to listen on
const port = 3001;

// Use middleware to parse JSON in the request body
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Define a route for handling GET requests to "/api/items"
app.get("/api/items", (req, res) => {
    // Read the contents of the "items.json" file asynchronously
    fs.readFile('items.json', 'utf8', (err, data) => {
        if (err) {
          // Handle errors related to reading the file
          console.error('Error reading file:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          try {
            // Parse the JSON data from the file
            const jsonData = JSON.parse(data);
            
            // Send the parsed JSON data in the response
            res.status(200).json(jsonData);
          } catch (jsonError) {
            // Handle errors related to parsing JSON
            console.error('Error parsing JSON:', jsonError);
            res.status(500).json({ error: 'Error parsing JSON' });
          }
        }
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});