import Link from "next/link"
import { Cards } from "./cards"
import { Card1 } from "./card1"
import { Card2 } from "./card2"
import { Card3 } from "./card3"
import { Card4 } from "./card4"

        
export const Hero=()=>{
    
    return(
        <div className="flex flex-col mt-20 items-center mb-20">
            <div className="text-[21px] md:text-[45px] bg-gradient-to-r from-gray-50 to-indigo-600 bg-clip-text text-transparent">Seamless and Minimal Experience</div>
            <div className="flex flex-col mt-[5px] px-[20px] justify-center items-center">

                <div className="text-white tracking-wide md:text-[18px]">
                    Safe authenticaition along with customised profiles , connect with other users seamlessly
                </div>
                <div>
                </div>

            </div>
            <div className="h-[150px] w-max flex items-center justify-center gap-[10px]">
                    <div className="text-white tracking-wide">
                        <Link href="/canvas"> <button  className="border border-gray-800 p-[10px] rounded-xl">Get Started</button></Link>
                    </div>
                    <div className="text-white tracking-wide">
                     <button className="border border-gray-800 p-[10px] rounded-xl">Contribute.</button>
                    </div>
            </div>
            <div className="md:hidden">
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <div className="hidden md:block mt-[180px]">
                <div className="flex flex-row gap-[20px]">
                    <Card1/>
                    <Card2/>
                </div>
                <div className="flex flex-row gap-[20px] mt-[20px]">
                    <Card3/>
                    <Card4/>
                </div>
               
                


            </div>
            {/* <Cards svg={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.261 1.03462C12.6971 1.15253 13 1.54819 13 1.99997V8.99997H19C19.3581 8.99997 19.6888 9.19141 19.8671 9.50191C20.0455 9.8124 20.0442 10.1945 19.8638 10.5038L12.8638 22.5038C12.6361 22.8941 12.1751 23.0832 11.739 22.9653C11.3029 22.8474 11 22.4517 11 22V15H5C4.64193 15 4.3112 14.8085 4.13286 14.498C3.95452 14.1875 3.9558 13.8054 4.13622 13.4961L11.1362 1.4961C11.3639 1.10586 11.8249 0.916719 12.261 1.03462ZM6.74104 13H12C12.5523 13 13 13.4477 13 14V18.301L17.259 11H12C11.4477 11 11 10.5523 11 9.99997V5.69889L6.74104 13Z" fill=""></path> </g></svg>} title={"Fast"}/> */}
           

        </div>
    )
}