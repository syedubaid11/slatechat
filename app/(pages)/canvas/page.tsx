"use client"

import Canvas from "@/components/ui/canvas";
import Chat from "@/components/ui/chat";
import { SignedIn,SignedOut,RedirectToSignIn } from "@clerk/nextjs";


export default function CanvasPage(){
    return(
        <>
        <SignedIn>
         <div className="bg-white flex justify-between">
            <Canvas/>
            <Chat/>
        </div> 
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn/>
        </SignedOut>
        </>
        
    )
}