"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { BackgroundLines } from "../components/ui/background";
import { HomeHero } from "../components/ui/home";
import { Info } from "../components/ui/info";


export default function Home() {
  return (
    <div className="bg-black ">
    <div className="bg-black flex flex-row  items-center">
      <BackgroundLines className="w-1/2">
        <div className="flex flex-row justify-center items-center h-screen">
          <HomeHero/>
        </div>
      </BackgroundLines>
      <div className="text-white border-2 border-white ml-60 p-4 rounded-xl cursor-pointer">
          <SignedOut>
              <SignInButton />
          </SignedOut>
          <SignedIn >
              Go to Canvas
          </SignedIn>
        </div>
    </div>
    <div className="mt-40 text-green-300 ml-10 mr-10">
        <Info title={"About"} content={"Slate Chat offers a unique way to connect with friends through real-time collaboration, allowing users to draw and chat simultaneously. With an array of easy-to-use drawing tools, including various brushes, colors, and shapes, you can create and share your sketches effortlessly."}/>
    </div>
    <div className="mt-40 text-pink-300 ml-10 mr-10">
        <Info title={"Blazing fast"} content={"Slate Chat is a cutting-edge messaging application built with Next.js and powered by WebSockets, ensuring blazing-fast real-time communication. By leveraging Next.js's server-side rendering capabilities and WebSockets for instant, bidirectional data transfer, Slate Chat delivers a seamless and responsive user experience."}/>
    </div>
    <div className="mt-40 text-pink-300 ml-10 mr-10">
        <Info title={"Contribute"} content={"Feel free to contribute and help the project grow"}/>
    </div>
    </div>

  );
}
