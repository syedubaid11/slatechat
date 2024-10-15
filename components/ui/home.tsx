import { Righteous } from "next/font/google"

const righteous=Righteous({
    weight:'400',
    subsets:['latin']
})

export const HomeHero=()=>{
    return(
        <>
        <div className={`${righteous.className} flex flex-row items-center justify-center`}>
            <div className="text-8xl font-bold flex">
                <p className="text-cyan-300">slate</p><p className="font-londrina text-8xl ml-2 text-white">chat</p>
            </div>
        </div>
        </>
    )
}