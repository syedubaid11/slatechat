const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
const PORT = process.env.PORT || 4000;

// Start an Express server
const server = app.listen(PORT, () => {
  console.log(`WebSocket server running on http://localhost:${PORT}`);
});

// Create a WebSocket server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log('Received:', message);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle client disconnects
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
