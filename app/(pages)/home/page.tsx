"use client"
import { Button } from "@/components/ui/arrow"
import { Righteous } from "next/font/google"
import { Londrina_Sketch } from "next/font/google"
import { ChatSvg } from "@/components/ui/chatsvg"
import { PenSvg } from "@/components/ui/pensvg"
import { PersonSvg } from "@/components/ui/personsvg"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation"


const righteous=Righteous({
    weight:'400',
    subsets:['latin']
})

const londrina=Londrina_Sketch({
    weight:'400',
    subsets:['latin']
    
})

export default function Home(){
    const router=useRouter();
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

                <div className={`${righteous.className} flex flex-col items-center mt-40`}>
                    <h1 className="text-4xl text-strong m-4">Chat and Draw Together</h1>
                    <p className="text-xl mb-4">Experience real-time collaboration like never before with SlateChat. Connect, communicate, and create in one seamless platform.</p>
                    <Button onClick={()=>{router.push('/canvas')}}/>
                </div>
            </div>

            <div className={`${londrina.className} text-4xl h-80 m-20 w-auto border border-black rounded-2xl`}>
                <h1 className="ml-6">Features</h1>
                <div className="flex flex-row justify-center h-60">
                    <div className="w-60 mr-20">
                        <div><ChatSvg/></div>
                        <div><p className={`${righteous.className} text-xl`}>Communicate instantly with your team members through our lightning-fast chat system.</p></div>
                        
                    </div>
                    <div className=" w-60 mr-20">
                        <div><PenSvg/></div>
                        <div>
                        <p className={`${righteous.className} text-xl`}>Bring your ideas to life with our shared canvas. Draw, sketch, and create together in real-time.</p></div>
                        </div>
                    <div className=" w-60 mr-20">
                        <div>
                           <PersonSvg/>
                        </div>
                        <div>
                           <p className={`${righteous.className} text-xl`}>Dedicated workspaces for seamless collaboration</p>
                        </div>
                        </div>
                </div>


            </div>
            <div className="border-2 h-40 w-auto bg-black ">

            </div>
            <div className="border-2 h-40 bg-black">

            </div>
    

        </div>
    )
}