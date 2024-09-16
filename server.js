import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

//create  a simple http server
const server = http.createServer(function(request,response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

//all the websocket logic starts here
const wss = new WebSocketServer({ server });

let usercount=0

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
  console.log('user connected',usercount)

});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});