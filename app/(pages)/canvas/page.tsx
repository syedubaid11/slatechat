"use client"
import Canvas from "@/components/ui/canvas";
import Chat from "@/components/ui/chat";
import { SignedIn,SignedOut,RedirectToSignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from 'axios';


export default function CanvasPage(){
    const [isopen,setOpen]=useState(false);

    useEffect(()=>{
      const fetch=async()=>{
        axios.get('') //fetch the api from

      }
    })
    return(
        <>
        <SignedIn>
          <div >
            <div className="flex justify-center">
              <button onClick={()=>setOpen(!isopen)} className="absolute top-4 right-2 border-2 p-1 rounded-xl">{isopen?`Close`:`Chat!`}</button>
              {isopen&&
              <Chat/>}

            </div>
              <Canvas/>
              
          </div> 
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn/>
        </SignedOut>
        </>
        
    )
}