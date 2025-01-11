"use client"
import Canvas from "@/components/ui/canvas";
import Chat from "@/components/ui/chat";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { SignedIn,SignedOut,RedirectToSignIn } from "@clerk/nextjs";
import { useState } from "react";




export default function CanvasPage(){
    const [isopen,setOpen]=useState(false);
        
    return(
        <>
        <SignedIn>
          <div >
              <Canvas/>
              <button onClick={()=>setOpen(!isopen)} className="absolute bottom-0 right-2 border-2 p-1 rounded-xl">{isopen?`Close`:`Chat!`}</button>
              {isopen&&
              <Chat/>}
          </div> 
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn/>
        </SignedOut>
        </>
        
    )
}