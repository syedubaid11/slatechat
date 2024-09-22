"use client"

import { BackgroundLines } from "./components/ui/background";
import { HomeHero } from "./components/ui/home";
import { Info } from "./components/ui/info";
import {signIn, useSession} from "next-auth/react"
import Link from "next/link";


export default function Home() {
  const session=useSession();
  if(session){
    console.log("logged in")

  }
  else{
    console.log("not logged")
  }

  return (
    <div className="bg-black ">
    <div className="bg-black flex flex-row  items-center">
      <BackgroundLines className="w-1/2">
        <div className="flex flex-row justify-center items-center h-screen">
          <HomeHero/>
        </div>
      </BackgroundLines>
      <div className="p-10 rounded-lg border w-max ml-auto mr-40">
        {!session?(<Link href="/canvas"><button className="text-white">Start drawing</button></Link>):(<Link href="/auth/signin">
        <button className="text-white"onClick={()=>signIn(undefined,{callbackUrl:"/canvas"})}>Sign In</button>
      </Link>)}
      
      </div>
    </div>
    <div className="mt-40 text-green-300 ml-10 mr-10">
        <Info title={"About"} content={"Slate Chat offers a unique way to connect with friends through real-time collaboration, allowing users to draw and chat simultaneously. With an array of easy-to-use drawing tools, including various brushes, colors, and shapes, you can create and share your sketches effortlessly."}/>
    </div>
    <div className="mt-40 text-pink-300 ml-10 mr-10">
        <Info title={"Blazing fast"} content={"Slate Chat is a cutting-edge messaging application built with Next.js and powered by WebSockets, ensuring blazing-fast real-time communication. By leveraging Next.js's server-side rendering capabilities and WebSockets for instant, bidirectional data transfer, Slate Chat delivers a seamless and responsive user experience."}/>
    </div>
    </div>

  );
}
