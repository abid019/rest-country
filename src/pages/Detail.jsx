import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import Hungry from '../assets/Hungry.png'
import { Link, useParams } from 'react-router-dom';
// import '../index.css'
const Detail = ({countries,mode,loading}) => {
    let {name} = useParams();
    console.log(name);
    let countryDetails = countries.find((country)=>country.name.common === name) || null
    
    console.log(countryDetails)
  return (
    <>
        {
        loading ? 
            <div>
                Loading...
            </div>
            :
            <div className='md:max-w-[85%] sm:max-w-[100%] mx-auto my-20 flex flex-col gap-10'>
                <Link 
                    className={`${mode === 'dark' ? 'bg-[#2c3743]' : 'bg-white border-[2px]'} sm:ml-7 md:ml-0 flex justify-center gap-3 items-center border-solid shadow-2xl h-[40px] w-[150px]`}
                    to='/'
                >
                    <GoArrowLeft className='text-xl'/>
                    Back
                </Link>
                <div className='flex justify-between  sm:gap-14 md:flex-row  flex-col items-center mt-5'>
                    <img alt='' src={countryDetails.flags.png} className='md:w-[40%] md:h-[333px] sm:w-[85%]'/>
                    <div className='flex flex-col md:gap-5 lg:gap-10 sm:gap-5  md:max-w-[55%] sm:max-w-[85%] '>
                        <p className='font-bold	text-2xl'>{countryDetails.name.common}</p>
                        <div className='flex md:gap-5 lg:gap-20 md:flex-row sm:flex-col sm:gap-5'>
                            <div>
                                <p className='md:text-[14px] lg:text-[20px]'><span className='font-semibold md:text-[14px] lg:text-[20px]'>Native Name: </span>{countryDetails.name.official} </p>
                                <p className='md:text-[14px] lg:text-[20px]'><span className='font-semibold md:text-[14px] lg:text-[20px]'>Population: </span> {countryDetails.population}</p>
                                <p className='md:text-[14px] lg:text-[20px]'><span className='font-semibold md:text-[14px] lg:text-[20px]'>Region: </span> {countryDetails.region}</p>
                                <p className='md:text-[14px] lg:text-[20px]'><span className='font-semibold md:text-[14px] lg:text-[20px]'>Sub Region: </span> {countryDetails.subregion}</p>
                                <p className='md:text-[14px] lg:text-[20px]'><span className='font-semibold md:text-[14px] lg:text-[20px]'>Capital: </span> {countryDetails.capital}</p>
                            </div>
                            <div>
                                <p className='md:text-[14px] lg:text-[20px]'><span className='font-semibold md:text-[14px] lg:text-[20px]'>Top Level Domain:</span> {countryDetails.tld}</p>
                                 {
                                    Object.values(countryDetails.currencies).map((currency)=>(
                                        <p><span className='font-semibold md:text-[14px] lg:text-[20px]'>Currencies:</span> {currency.name}</p>
                                    ))
                                 }
                                 <p className='font-semibold md:text-[14px] lg:text-[20px]'>
                                 Languages:
                                 {
                                    Object.values(countryDetails.languages).map((language)=>(
                                        <span className='font-light  md:text-[14px] lg:text-[20px]'> {language}, </span>
                                    ))
                                 }
                                 </p>                                                                 
                            </div>
                        </div>
                        <div className='flex gap-4 md:flex-row sm:flex-col'>
                            <p className='font-semibold md:text-[14px] lg:text-[20px]'>Border Countries: </p>
                            <div className='flex flex-wrap md:w-[70%] sm:w-[100%] gap-2'>
                                {                                    
                                    countryDetails.borders && countryDetails.borders.map((border)=>{
                                        let borderDetails = countries.find((country) => country.cca3 === border)                                       
                                        return borderDetails ? (
                                            <Link
                                                to={`/${borderDetails?.name?.common}`}   
                                            >
                                                <button className={`${mode === 'dark' ? 'bg-[#2c3743]' : 'bg-white border-[1px]'} shadow-2xl sm:h-[30px] sm:w-[100px] lg:h-[30px] lg:w-[130px] border-solid `}>
                                                    {borderDetails?.name?.common}
                                                </button>
                                            </Link>
                                        ): null
                                })
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Detail