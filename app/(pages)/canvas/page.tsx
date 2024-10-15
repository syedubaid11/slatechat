"use client"

import Canvas from "@/components/ui/canvas";
import Chat from "@/components/ui/chat";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { SignedIn,SignedOut,RedirectToSignIn } from "@clerk/nextjs";


export default function CanvasPage(){
    const navItems = [
        {
          name: "Home",
          link: "/",
          
        },
        {
          name: "About",
          link: "/about",
         
        },
        {
          name: "Contact",
          link: "/contact",
        },
      ];
    return(
        <>
        <FloatingNav  navItems={navItems} />
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