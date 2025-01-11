"use client"

import { Righteous } from "next/font/google"
import { Londrina_Sketch } from "next/font/google"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/ui/navbar"
import '../app/globals.css'
import { Hero } from "@/components/ui/hero"
import { Footer } from "@/components/footer"
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react"


const righteous=Righteous({
    weight:'400',
    subsets:['latin']
})

const londrina=Londrina_Sketch({
    weight:'400',
    subsets:['latin']
    
})

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,  // Smoothness duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Easing function
      smoothWheel: true, // Smooth wheel scrolling
      //@ts-ignore
      smoothTouch: false, // Disable smooth touch scrolling
    });
  
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    return () => {
      lenis.destroy(); // Cleanup on component unmount
    };
    console.log("working")
  }, []);
  
  
  const router=useRouter();
  return (
     <div className="flex flex-col bg-neutral-900 h-full">
      
        <Navbar/>

      <div className="mt-20">
        <Hero/>
      </div>

        <Footer/>
     </div>
     
  )
}

 