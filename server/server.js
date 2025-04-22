const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api', (req, res) => {
  res.send('Hello World from Node.js server API!');
});

app.use(express.static(path.join(__dirname, '../choubi-garros')));

// At the end of your routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});