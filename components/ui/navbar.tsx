import { useState } from 'react';
import './component.css';



export const Navbar: React.FC = () => {
    const [isOpen,setisOpen]=useState(false);

    const toggleClick=()=>{
        setisOpen(!isOpen)
    }
    return (
        
        <div className='relative'>

        <div className="absolute w-full h-max bg-transparent text-black items-center z-20 flex p-[10px]">

            <div className='flex flex-row px-3 py-5 items-center justify-between w-full'>

                <div className="ml-[5px] fadein font-righteous bg-gradient-to-b from-slate-50 to-slate-900 bg-clip-text text-transparent text-[50px]">
                    slatechat
                </div>

                <div onClick={toggleClick} className="desktop:hidden fadein">
                    <div className={`w-[30px] h-[1px] bg-slate-50 transition-transform duration-300 rounded-lg ${isOpen?'rotate-45 translate-y-1.5':''}`}></div>
                    <div className={`w-[30px] h-[1px] bg-slate-50 my-1 transition-all duration-300 rounded-lg ${isOpen?'opacity-0':'opacity-1'}`}></div>
                    <div className={`w-[16px] h-[1px] bg-slate-50 transition-transform duration-300 rounded-lg ${isOpen?'w-[30px] -rotate-45 -translate-y-1':''}`}></div>
                </div>

                
            </div>
            

            {/* logic of sigin / signou
            {session ?<div>user logged in</div> : <div className='ml-auto'>
                <button onClick={()=>signIn()}className='py-1 px-4 bg-white text-black mr-[5px] border rounded-[5px] '>Log in</button>
            </div>} */}

           
            
        

        <div className='flex space-between gap-[5px]'>

            <div className="ml-[20px] fadein hidden">
                about
            </div>
            <div className='fadein hidden'>
                features
            </div>
            <div className='fadein hidden'>
                contribute
            </div>
            <div className='fadein hidden'>
                github link
            </div>
        </div>
           
      
        </div>
        {isOpen&&
        <div className='flex flex-col slide-right absolute h-screen w-screen backdrop-blur-md top-0 z-10 bg-black/80 text-white bg-transparent smooth-transition'>
            <div className='p-[20px]'>
            <div className="mt-[90px]"></div>

                <div className='text-4xl'>Navigate</div>
                <div>das</div>
                <div>das</div>
                <div>das</div>
                <div>dasd</div>
                <div>das</div>
             </div>   
            
        </div>


}
        
        

        
        </div>
    );
}