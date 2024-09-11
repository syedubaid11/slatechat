"use client"

import { BackgroundLines } from "./components/ui/background";
import { HomeHero } from "./components/ui/home";
import { Homeauth } from "./components/ui/homeauth";
import { Info } from "./components/ui/info";

export default function Home() {
  return (
    <div className="bg-black">
    <div className="bg-black flex flex-row  items-center">
      <BackgroundLines className="w-1/2">
        <div className="flex flex-row justify-center items-center h-screen">
          <HomeHero/>
        </div>
      </BackgroundLines>
      <div className="p-10 rounded-lg border w-max ml-auto mr-40">
        <Homeauth/>
      </div>
    </div>
    <div className="mt-40">
        <Info title={"about"} content={"Slate Chat offers a unique way to connect with friends through real-time collaboration, allowing users to draw and chat simultaneously. With an array of easy-to-use drawing tools, including various brushes, colors, and shapes, you can create and share your sketches effortlessly."}/>
    </div>
    <div className="mt-40">

      this
      

    </div>

    </div>

  );
}
