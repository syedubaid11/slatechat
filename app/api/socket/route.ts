import { WebSocket, WebSocketServer } from 'ws';
import { NextApiRequest, NextApiResponse } from 'next';

// Disable body parsing for WebSocket connection handling
export const config = {
  api: {
    bodyParser: false,
  },
};

// Type assertion for res.socket to include the 'server' property
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try{ console.log("control is here")
  // Type assertion to add 'server' property to socket
  const server = (res.socket as any).server;

  if (!server.ws) {
    console.log('Initializing WebSocket server');
    const wss = new WebSocketServer({ noServer: true });
    server.ws = wss;

    wss.on('connection', (ws: WebSocket) => {
      ws.on('message', (message: string) => {
        console.log('Received message:', message);
        ws.send(`Echo: ${message}`);
      });

      ws.send('Connected to WebSocket server');
    });

    server.on('upgrade', (request: any, socket: any, head: any) => {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    });

    console.log('WebSocket server started');
  } else {
    console.log('WebSocket server is already running');
  }

  // End the response as the WebSocket is handling further connections
  res.end();

  }
  catch(e){
    console.log(e)
  }
 
}
