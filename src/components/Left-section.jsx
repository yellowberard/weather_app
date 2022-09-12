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
<ProgressSection />
<Highlight />

    </div>
    )
}

export default LeftSection;