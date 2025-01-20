import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({country,mode}) => {
    // console.log(country);
  return ( 
    <Link 
    to={`/${country.name.common}`}>
      <div 
        className={`w-[270px] flex flex-col gap-5 items-start justify-center ${mode === 'dark' ? 'bg-[#1f2937]' : 'bg-[#FFFFFF]'}  pb-3 shadow-xl  `}           
      >
            <img alt='' src={country.flags.png} className='w-[270px] h-[180px] '/>
            <div className='text-left ml-5 pb-6'>
                <p className='text-[22px] font-extrabold'>{country.name.common}</p>
                <p className='font-light'><span className='font-semibold'>Population: </span> {country.population.toLocaleString()}</p>
                <p className='font-light'><span className='font-semibold'>Region: </span> {country.region}</p>
                <p className='font-light'><span className='font-semibold'>Capital: </span>{country.capital && country?.capital[0]}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card;