import React from 'react'
import '../assests/css/Left-section.css'
import ProgressSection from './ProgressionSection';
import Highlight from './Highlight';
import Skyline from '../assests/images/skyline.webp'
const LeftSection = () => {
    return(
        <div className="left-section">
    <div className="temp-info  container-fluid row d-flex flex-column  align-items-center justify-content-center">
    
    <div className="temp shadow col-7 d-flex justify-content-center align-self-center">
        
    <span className="weatherIcon flex-grow-1">
        <img src={Skyline} alt="" className='cityImg' /></span>
      <div className="temp d-flex  flex-column justify-content-center align-self-center">
     <span className=' cityName  ' >
         Delhi, India
    </span> 
      <span className="tempratue"> 27°C 
      </span>
      <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast-snow.svg" alt="" className='iconImage' ></img>
      <span className='weather-type' >    
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
<div className="mid-main d-flex  align-items-center">    
<ProgressSection />
<div className="more-info d-flex flex-column justify-content-center align-items-center" >
    <div className="feels d-flex flex-column justify-content-center align-items-center">
        <span className='mid-info-head'>Feels like</span>
        <span>27°C</span>
    </div>
    <div className="temp-more-info d-flex justify-content-center align-items-center">
    <div className="temp-low">
        <span className='row mid-info-head'>Minimun temp.</span>
        <span className="low-temp">32<sup>o</sup>C</span>
        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg" alt="" />
    </div>
    <div className="temp-high">
        <span className='row mid-info-head'>Highest temp</span>
    <span className="high-temp">32<sup>o</sup>C</span>
        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg" alt="" />
    </div>
    </div>
    <div className="pressure">
        <span className='row mid-info-head'>Pressure</span>
    <span className="pressure-value">1015</span>
        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/barometer.svg" alt="" />
    </div>
</div>
</div>
<Highlight />

    </div>
    )
}

export default LeftSection;