"use client"

import Canvas from "@/app/components/ui/canvas";
import Chat from "@/app/components/ui/chat";


export default function CanvasPage(){
    return(
        <div className="bg-white flex justify-between">
        {/*canvas logic goes here*/}
        <Canvas/>
        <Chat/>
        </div>  
    )
}