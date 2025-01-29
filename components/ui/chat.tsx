// src/components/Chat.tsx
import { useEffect, useState } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Create WebSocket connection
    const ws = typeof WebSocket !== 'undefined' ? new WebSocket('ws://localhost:4000') : null;
    if (!ws) {
      console.error('WebSocket is not supported in this environment.');
      return;
    }
    ws.onopen=()=>{
      console.log('connected')
    }
    // Listen for messages
    ws.onmessage = (event) => {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Save socket connection to state
    setSocket(ws);

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() && socket) {
      socket.send(input);
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', position:'absolute' , right:'10px', top:'50px' }}>
      <h1>Chat Room</h1>
      <div style={{background:'#FFFFFF', border: '1px solid #ccc', borderRadius:'20px', padding: '10px', height: '400px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '100%', marginTop: '10px' }}
      />
      <button onClick={sendMessage} style={{ marginTop: '10px' }}>Send</button>
    </div>
  );
};

export default Chat;
