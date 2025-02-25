import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Detail from './pages/Detail';
import { fetchData } from './services/api';

let api_url = import.meta.env.VITE_API_URL
function App() {
    
  const [mode,setMode] = useState('light');
  const [countries,setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  let [region,setRegion] = useState('');  
  let [searchVal,setSearchVal] = useState('');      
  let toggleButton = useThemeSwitcher(mode,setMode);
  
  useEffect(()=>{
    let url = region === '' ? `${api_url}/all` : `${api_url}/region/${region}`              
    fetchData(url,setCountries,setLoading)
  },[region])
    
  let updatedCountries = countries
    .filter((country)=>
        country.name.common.toLowerCase().includes(searchVal.toLowerCase()) 
    )  
    
  return (
    <>
      <Navbar mode={mode} toggleButton={toggleButton}/>      
      <Routes>
        <Route 
          path='/' 
          element={
            <Home 
              countries={updatedCountries} 
              mode={mode} 
              setRegion={setRegion} 
              setSearchVal={setSearchVal} 
              />
          }/>
        <Route path='/:name' element={<Detail loading={loading} mode={mode} countries={countries} />} />        
      </Routes>
    </>
  )
}

export default App;