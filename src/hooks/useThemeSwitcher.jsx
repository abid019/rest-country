import React, { useState } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const useThemeSwitcher = (mode,setMode) => {
    // const [mode,setMode] = useState('light');
    if(mode === 'dark'){
      document.body.classList.add('dark');      
    }
    else{
      document.body.classList.remove('dark');
    }
  
  const toggleButton = ()=>setMode((mode) => mode === 'light' ? 'dark' : 'light')
    
  return toggleButton;
}

export default useThemeSwitcher