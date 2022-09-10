import React from 'react'
import '../assests/css/Left-section.css'
import CircularProgress from './CircularProgression';
import ProgressSection from './ProgressionSection';

const LeftSection = () => {
    return(
        <div className="left-section">
    <div className="temp-info container row d-flex flex-column  align-items-center justify-content-center">
    
    <div className="temp col-7 d-flex justify-content-center align-self-center">
        
    <span className="weatherIcon flex-grow-1">
        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast-snow.svg" alt="" className='iconImage' /></span>
      <div className="temp d-flex  flex-column justify-content-center align-self-center">
     <span className=' cityName container-fluid d-flex justify-content-center ' >
         Delhi, India
    </span> 
      <span className="temp"> 27°C</span>
      <span className='weather-type container-fluid d-flex justify-content-center ' >
         ThunderStrom Day Overcast Snow
    </span> 
      </div>
    </div>
    <div className="weather-type col-7 d-flex justify-content-center align-self-center">
    
    </div>    
    {/* <div className="weather-more-info container row d-flex align-items-center justify-content-center " >
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
    </div> */}
</div>
<ProgressSection />
    </div>
    )
}

export default LeftSection;