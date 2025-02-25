export async function fetchData(url, setCountries,setLoading){
    try{        
        let res = await fetch(url)
        let data = await res.json();        
        setCountries(data);
    }
    catch(err){
        console.log(err);
    }
    finally{
        setLoading(false);
    }
}
