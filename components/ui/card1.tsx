export const Card1=()=>{
    return(
        <div className="h-[400px] w-[700px] rounded-xl border border-gray-700">
            <div className="flex flex-row justify-between">
                <div className="flex w-full ml-[30px] mt-[12px] text-white text-[30px] flex-col">
                    Lightning fast
                    <br/>
                    <div className="text-[20px]">
                        Instant connection , with minmal latency
                    </div>

                </div>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="grey" className="size-80">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                </div>

            </div>
            
        </div>
    )
}