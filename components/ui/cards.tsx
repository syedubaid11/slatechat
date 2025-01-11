interface propsinterface{
    svg:React.ReactNode,
    title:string
}

export const Cards=(props: propsinterface)=>{
    return (
        <div className="border h-[150px] w-[340px] border-gray-700 rounded-xl mt-[10px] bg-neutral-850 flex flex-row">
            <div className="p-[10px]">
               {props.svg}
            </div>
            <div className="p-[10px]">
                {props.title}
            </div>
            
        </div>
    )
}