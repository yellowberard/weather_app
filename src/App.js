// import './App.css';
import React, { useState, useEffect }  from 'react'
import Header from './components/Header';
import Main from './components/Main';
function App() {
  
    const [data, setData] = useState({});
    const [dataPol, setDataPol] = useState({});
    const [location, setLocation] = useState('Delhi');
    
    const API = "3282c9275b365d66e9a7af0532ce46d5";
    const units = "metric";

    useEffect(() => {  // To update the location for the weather data
      getAllUsers();
    }, [location]);

    async function getAllUsers(){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}&units=${units}`;
      try{
        const response = await fetch(url);
        const Data = await response.json();
        setData(Data);
        const lat= Data.coord.lat;
        const lon= Data.coord.lon;
        const urlPol=`https://api.openweathermap.org/data/2.5/air_pollution?appid=${API}&lat=${lat}&lon=${lon}`;
        try{
          const polResponse = await fetch(urlPol);
          const polData = await polResponse.json();
          setDataPol(polData);
                    console.log(polData);
        }catch(e){
          console.log(e.message);
        }
        console.log(Data);
      }catch(error)
      {
        console.log(error.message);
      }
       
    }

    const onSearchChange=(event)=>{
      setLocation(event);
    }
    return (
    <div className="App">
     <Header changeLocation={onSearchChange} />
     <Main weatherData={data} dataPol={dataPol}  />
    </div>
  );
}

export default App;
