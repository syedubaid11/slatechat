"use client"
import { useEffect, useState } from "react"
import io from 'socket.io-client'

export const Chat=()=>{
    const [messages,setMessages]=useState<any[]>([]);
    const [currentMessage,setcurrentMessage]=useState('');

    const socket=io();

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages((prevMessages)=>[...prevMessages,message]);
        })
        return ()=>{
            socket.disconnect();
        }
    },[])

    const sendMessage=()=>{
        socket.emit('message',currentMessage);
        setcurrentMessage('');
    }
    return(
           <div>
            {/* Display the messages */}
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}

            {/* Input field for sending new messages */}
            <input
                type="text"
                value={currentMessage}
                onChange={(e) => setcurrentMessage(e.target.value)}
            />

            {/* Button to submit the new message */}
            <button onClick={sendMessage}>Send</button>
        </div>
        
    )
}