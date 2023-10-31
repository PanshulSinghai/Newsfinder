const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port ||8000; // You can change this to any port you prefer

// Define the path to the directory where your HTML file is located
console.log(__dirname);
const publicDirectoryPath = path.join(__dirname, '/public');
console.log(publicDirectoryPath);

// Set the static directory
app.use(express.static(publicDirectoryPath));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.send("asdf");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
