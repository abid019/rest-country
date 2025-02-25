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