import React from 'react';
import '../assests/css/index.css';

const Main=() => {

    return(
        <div className="main container-fluid">
     <div className="temp-info row d-flex flex-column  align-items-center justify-content-center">
    <div className="cityName col-7  justify-content-center align-self-center">
     <span className='container-fluid d-flex justify-content-center ' >
         Delhi, India
    </span> 
    </div>
    <div className="temp col-7 d-flex justify-content-center align-self-center">
    <span className="weatherIcon">
        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast-snow.svg" alt="" className='iconImage' /></span>
      <span className="temp"> 27°C</span>
    </div>
    <div className="weather-type col-7 d-flex justify-content-center align-self-center">
    <span className='container-fluid d-flex justify-content-center ' >
         ThunderStrom Day Overcast Snow
    </span> 
    </div>    
    <div className="weather-more-info container row d-flex align-items-center justify-content-center " >
        <div className="col-3 d-flex align-items-center justify-content-center">
        <span className='container d-flex justify-content-center ' >
         Wind
    </span> 
    <span className='container d-flex justify-content-center ' >
         Visibilty
    </span> 
    <span className='container d-flex justify-content-center ' >
         Humidity
    </span> 
         </div>   
    </div>
</div>
        </div>
    )
}

export default Main;