'use client'

import { useEffect } from 'react';

export default function WebSocketInitializer() {
  useEffect(() => {
    const connectToWebSocket = async () => {
      await fetch('/api/websocket'); // Initialize WebSocket server
      console.log("Connection established")
    };
    connectToWebSocket();
  }, []);

  return null; // This component doesn't render anything
}