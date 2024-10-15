"use client"
import { Button } from "@/components/ui/arrow"
import { Righteous } from "next/font/google"
import { Londrina_Sketch } from "next/font/google"
import { Info } from "@/components/ui/info"

const righteous=Righteous({
    weight:'400',
    subsets:['latin']
})

const londrina=Londrina_Sketch({
    weight:'400',
    subsets:['latin']
    
})



export default function Home(){
    return(
        
        <div className="flex flex-col ">
            <div className="flex flex-col w-auto h-max border-2">
                <div className="flex justify-between m-2">
                        <div className={`${londrina.className} text-6xl`}>
                            slatechat
                        </div>
                        <div className="flex text-2xl ">
                            <div className="mr-2">Features</div>
                            <div className="mr-2">About</div>
                            <div>Contact</div>
                        </div>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <h1 className="text-2xl text-strong">Chat and Draw Together</h1>
                    Experience real-time collaboration like never before with SlateChat. Connect, communicate, and create in one seamless platform.
                    <Button/>
                    

                </div>
            </div>

            <div className="border-2 h-40 w-auto bg-black ">
              <Info title={"About"} content={"Slate Chat offers a unique way to connect with friends through real-time collaboration, allowing users to draw and chat simultaneously. With an array of easy-to-use drawing tools, including various brushes, colors, and shapes, you can create and share your sketches effortlessly."}/>

            </div>
            <div className="border-2 h-40 w-auto bg-black ">
              <Info title={"Blazing fast"} content={"Slate Chat is a cutting-edge messaging application built with Next.js and powered by WebSockets, ensuring blazing-fast real-time communication. By leveraging Next.js's server-side rendering capabilities and WebSockets for instant, bidirectional data transfer, Slate Chat delivers a seamless and responsive user experience."}/>

            </div>
            <div className="border-2 h-40 bg-black">
              <Info title={"Contribute"} content={"Feel free to contribute and help the project grow"}/>

            </div>

        </div>
    )
}