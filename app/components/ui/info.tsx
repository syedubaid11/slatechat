interface InfoProps {
    // Define the props for the Info component here
    title:string,
    content:string
}

export const Info: React.FC<InfoProps> = (props) => {
    return (
        <>
            <div className="h-max w-full m-10">
                <div className="text-white text-4xl font-bold">{props.title}</div>
                <div className="font-londrina text-2xl">{props.content}</div>
            </div>
        </>
    );
};