import { Cards } from "./cards"

export const Hero=()=>{
    return(
        <div className="flex flex-col mt-20 items-center">
            <div className="text-[23px] bg-gradient-to-r from-gray-50 to-indigo-600 bg-clip-text text-transparent">Seamless and Minimal Experience</div>
            <div className="flex flex-col mt-[5px] px-[20px] justify-center items-center">
                <div className="text-white tracking-wide">
                    Safe authenticaition along with customised profiles , connect with other users seamlessly
                </div>
                <div>
                </div>
            </div>
            <div className="h-[150px] w-max flex items-center justify-center gap-[10px]">
                    <div className="text-white tracking-wide">
                        <button className="border border-gray-800 p-[10px] rounded-xl">Get Started</button>
                    </div>
                    <div className="text-white tracking-wide">
                     <button className="border border-gray-800 p-[10px] rounded-xl">Contribute</button>
                    </div>
            </div>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>

        </div>
    )
}