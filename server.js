const express = require('express');
const http = require('http');
const WebSocket = require('ws');

// Create an Express application
const app = express();
const port = 8080;

// Middleware to log request details
app.use((req, res, next) => {
    console.log((new Date()) + ' Received request for ' + req.url);
    next(); // Pass control to the next middleware function
});

// Route handler for the root path
app.get('/', (req, res) => {
    res.send("hi there");
});

// Create an HTTP server and pass the Express app to it
const server = http.createServer(app);

// Initialize WebSocket server
const wss = new WebSocket.Server({ server });

let usercount = 0;

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    ws.send('Hello! Message From Server!!');
    ++usercount;
    console.log('user connected', usercount);
});

// Start the server
server.listen(port, () => {
    console.log((new Date()) + ' Server is listening on port ' + port);
});
