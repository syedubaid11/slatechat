"use client"

import { useRef, useEffect, useState } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseDown = (event) => {
        setIsDrawing(true);
        draw(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    };

    const handleMouseMove = (event) => {
      if (isDrawing) {
        draw(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
      ctx.beginPath(); // Stop drawing
    };

    const draw = (x, y) => {
      if (ctx) {
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Cleanup listeners on component unmount
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      style={{ border: '1px solid black' }}
    ></canvas>
  );
};

export default Canvas;
