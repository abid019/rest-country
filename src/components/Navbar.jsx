import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
const Navbar = ({mode,toggleButton}) => {  
  return (
    <div className={` ${mode === 'dark' ? 'bg-[#1f2937]' : 'bg-[#FFFFFF]'} h-[70px] mt-0 sticky top-0  `}>
        <div className='sm:max-w-[85%] md:max-w-[78%] flex justify-between items-center m-auto pt-6 '>
            <div className='font-bold sm:text-[13px] md:text-[16px]'>Where in the world?</div>
            <button
                onClick={toggleButton}
            >
                {
                mode === 'dark' ? 
                <div className='text-white flex gap-2 items-center '>
                    <IoMoonSharp/>
                    Light Mode
                </div> :
                <div className='text-black flex gap-2 items-center '>
                    <IoMoonOutline/>
                    Dark Mode
                </div>                
                }
            </button>
        </div>
    </div>
  )
}

export default Navbar