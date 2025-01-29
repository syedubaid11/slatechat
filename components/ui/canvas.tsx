// components/Canvas.tsx
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import Link from "next/link"
import { useUser } from "@clerk/nextjs";

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const isDrawingRef = useRef<boolean>(false);
    const isErasingRef=useRef<boolean>(false);

    const {user}=useUser();
    console.log(user?.fullName)
    console.log(user?.imageUrl)


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
    
    const eraseDrawing=(e:React.MouseEvent<HTMLCanvasElement>)=>{
        isErasingRef.current=true;
        contextRef.current?.clearRect(e.clientX,e.clientY,10,10);
        console.log('erasing drawing')
    }


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

 

    return (
        <>
        <div className='w-screen flex items-center justify-center'>
        <div className="absolute top-[10px] height-[100px] p-[15px] rounded-xl w-max backdrop-blur-1 bg-transparent border flex flex-row gap-[20px] justify-center items-center">
            <div>
                <img src={user?.imageUrl} className="w-[22px] h-[22px] rounded-full" />

            </div>
            <Link href="/">
                <div className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
            </Link>
            <div className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
            <div className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
            </div>
            <div className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                </svg>
            </div>
            <div onClick={()=>{eraseDrawing}}className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                </svg>
            </div>
        </div>
        </div>     
        <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        />
        </>
    );
};

export default Canvas;
