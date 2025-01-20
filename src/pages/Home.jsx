import React from 'react'
import Card from '../components/Card'
import Filters from '../components/filters'

const Home = ({countries,mode,setRegion,setSearchVal}) => {
  
  return (
    <>
      <Filters mode={mode} setRegion={setRegion} countries={countries} setSearchVal={setSearchVal} />
      <div className=' mx-auto max-w-[85%] sm:mt-5 md:mt-0 md:gap-x-[4rem] flex flex-wrap gap-y-14 lg:gap-x-16 justify-center'>
        {                    
          countries.map((country,index)=>{
              return(
                <Card key={index} country={country} mode={mode} />
              )
          })
        }
    </div>
    </>
  )
}

export default Home