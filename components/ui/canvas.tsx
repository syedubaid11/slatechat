// components/Canvas.tsx
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import { WebSocket } from 'ws';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const isDrawingRef = useRef<boolean>(false);
    const isErasingRef=useRef<boolean>(false);

    

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth*0.95;
            canvas.height = window.innerHeight*0.95;
            contextRef.current = canvas.getContext('2d');
            if (contextRef.current) {
                contextRef.current.lineCap = 'round';
                contextRef.current.strokeStyle = 'black';
                contextRef.current.lineWidth = 5;
            }
        }
    }, []);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        isDrawingRef.current = true;
        draw(e);
    };


    const finishDrawing = () => {
        isDrawingRef.current = false;
        contextRef.current?.beginPath();
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawingRef.current || !contextRef.current) return;
        contextRef.current.lineTo(e.clientX, e.clientY);
        contextRef.current.stroke();
        contextRef.current.beginPath();
        contextRef.current.moveTo(e.clientX, e.clientY);
    }
    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => startDrawing(e);
    const handleMouseUp = () => finishDrawing();
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => draw(e);

    //api call to websocket server
    useEffect(()=>{
        const fetch=async()=>{
            const socket=new WebSocket('ws://localhost:3000')
            if(socket){
                socket.addEventListener('open',()=>{`connected to the server`});

            }
            else{
                console.log("error")
            }
        }
    },[])



    return (
        <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ border: '2px solid black'}}
        />
    );
};

export default Canvas;
