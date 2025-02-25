import { IoSearch } from "react-icons/io5";

const Filters = ({mode,setRegion,setSearchVal}) => {
              
  return (
    <div className='sm:w-[85%] md:w-[78%] flex justify-between flex-wrap mt-8 h-[100px] mx-auto'>
        <div className='flex flex-col items-center relative'>   
            <IoSearch className='absolute left-4 mt-3' />         
            <input 
                name='search' 
                className={`sm:w-[240px] md:w-[220px] h-[40px] ${mode === 'dark' ? 'bg-[#1e293b]' : 'bg-white'} placeholder:italic pl-10 sm:rounded-xl md:rounded-xl`} 
                placeholder=' Search for a country' 
                onChange={(e)=> setSearchVal(e.target.value)}
            />
        </div>
                            

        <div className='flex flex-col items-center'>            
            <select 
                name='region' 
                className={`w-[180px] rounded-l pl-3 pr-3 h-[40px] default:border-none ${mode === 'dark' ? 'bg-[#1e293b]' : 'bg-white'}`} 
                onChange={(e)=>{
                    setRegion(e.target.value);
                }}
            >
                <option value={''} className="text-gray-800">Filter by Region</option>
                <option value={"antarctic"}>Antarctic</option>
                <option value={"america"}>America</option>
                <option value={"europe"}>Europe</option>
                <option value={"africa"}>Africa</option>
                <option value={"asia"}>Asia</option>
                <option value={"oceania"}>Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default Filters