"use client"
import { Button } from "@/components/ui/arrow"
import { Righteous } from "next/font/google"
import { Londrina_Sketch } from "next/font/google"
import { Info } from "@/components/ui/info"
import { ChatSvg } from "@/components/ui/chatsvg"
import { PenSvg } from "@/components/ui/pensvg"
import { PersonSvg } from "@/components/ui/personsvg"

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
            <div className="flex flex-col w-auto h-max">
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

            <div className={`${londrina.className} text-4xl h-80 m-20 w-auto border border-black rounded-2xl`}>
                Features
                <div className="flex flex-row justify-center border h-60">
                    <div className="border w-60 mr-20">
                        <div><ChatSvg/></div>
                        <div><p className="text-2xl">Communicate instantly with your team members through our lightning-fast chat system.</p></div>
                        
                    </div>
                    <div className="border w-60 mr-20"><PenSvg/></div>
                    <div className="border w-60 mr-20"><PersonSvg/></div>
                </div>


            </div>
            <div className="border-2 h-40 w-auto bg-black ">

            </div>
            <div className="border-2 h-40 bg-black">

            </div>
    

        </div>
    )
}