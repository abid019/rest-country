import { useEffect, useRef, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Detail from './pages/Detail';


function App() {
  const [mode,setMode] = useState('light');
  const [countries,setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  let [region,setRegion] = useState('');  
  let [searchVal,setSearchVal] = useState('');  
  let toggleButton = useThemeSwitcher(mode,setMode);
  console.log(region);
  useEffect(()=>{
    let url = region === '' ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${region}`          
    async function fetchData(){
      try{        
        let res = await fetch(url)
        let data = await res.json();
        // console.log(data);
        setCountries(data);
      }
      catch(err){
        console.log(err);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData()
  },[region])

  // console.log(order);  
  let updatedCountries = countries
    .filter((country)=>
        country.name.common.toLowerCase().includes(searchVal.toLowerCase()) 
    )    
  return (
    <>
      <Navbar mode={mode} toggleButton={toggleButton}/>      
      <Routes>
        <Route path='/' element={<Home countries={updatedCountries} mode={mode} setRegion={setRegion} setSearchVal={setSearchVal}  />}/>
        <Route path='/:name' element={<Detail loading={loading} mode={mode} countries={countries} />} />        
      </Routes>
    </>
  )
}

export default App;