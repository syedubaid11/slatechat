"use client"
import { Button } from "@/components/ui/arrow"

export default function Home(){
    return(
        
        <div className="flex flex-col ">
            <div className="flex flex-col w-auto h-max border-2">
                <div className="flex justify-between m-2">
                        <div className="text-4xl">
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

            <div className="border-2 h-40 w-auto bg-black"></div>
            <div className="border-2 h-40 w-auto bg-black "></div>
            <div className="border-2 h-40 bg-black"></div>

        </div>
    )
}