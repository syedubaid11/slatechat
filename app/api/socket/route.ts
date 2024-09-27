import { WebSocket, WebSocketServer } from 'ws';
import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!(res.socket as any).server.ws) {
    console.log('WebSocket server is initializing');
    const wss = new WebSocketServer({ noServer: true });
    (res.socket as any).server.ws = wss;

    wss.on('connection', (ws: WebSocket) => {
      ws.on('message', (message: string) => {
        console.log('Received message:', message.toString());
        ws.send(`Echo: ${message}`);
      });

      ws.send('Connected to WebSocket server');
    });

    (res.socket as any).server.on('upgrade', (request: any, socket: any, head: any) => {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    });

    console.log('WebSocket server started');
  } else {
    console.log('WebSocket server is already running');
  }

  res.end();
}