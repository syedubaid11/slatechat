import './component.css';

export const Navbar: React.FC = () => {
    return (
        <>
        <div className="w-full h-[80px] backdrop-blur-md flex space-between gap-[5px] bg-black text-white items-center">
            <div className="ml-[10px] fadein">
                slatechat
            </div>
            <div className="ml-[20px] fadein">
                about
            </div>
            <div className='fadein'>
                features
            </div>
            <div className='fadein'>
                contribute
            </div>
            <div className='fadein'>
                github link
            </div>
        </div>


        
        </>
    );
}