// components/Canvas.tsx
import { useRef, useEffect } from 'react';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const isDrawingRef = useRef<boolean>(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
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
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => startDrawing(e);
    const handleMouseUp = () => finishDrawing();
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => draw(e);

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ border: '1px solid black' , margin:"10px" }}
        />
    );
};

export default Canvas;
