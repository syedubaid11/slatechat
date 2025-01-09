export const Cards=(props: any)=>{
    return (
        <div className="border h-[150px] w-[340px] border-gray-700 rounded-xl mt-[10px] bg-neutral-850">
            <div className="p-[10px]">
                {props.title}
            </div>
            
        </div>
    )
}