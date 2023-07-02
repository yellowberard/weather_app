import React from 'react'
import '../assests/css/Left-section.css'
import Highlight from './Highlight';
import Skyline from '../assests/images/skyline.webp';
import WeatherIcon from './WeatherIcon';


const LeftSection = ({ data, dataPoll}) => {
    
    const date = new Date((data.dt) * 1000);
    const time =  date.toLocaleTimeString("en-IN");
       return(
        <div className="left-section">
    <div className="temp-info  container-fluid row d-flex flex-column  align-items-center justify-content-center">
    
    <div className="temp shadow col-7 d-flex justify-content-center align-self-center">
        
    <div className="weatherIcon flex-grow-1">
        <img src={Skyline} alt="" className='cityImg' />
    </div>
      <div className=" d-flex  flex-column justify-content-center align-self-center">
      <span className=' cityName ' >
       {data.name},{data.sys?data.sys.country:''}
     </span> 
      <span className="temperatue"> 
      {data.main?data.main.temp:null}°C 
      </span>
      <span className='weather-type' >    
         {data.weather?data.weather[0].main:''}
    </span> 
      {/* <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg" alt="" className='iconImage' ></img> */}
        <WeatherIcon icon={data.weather?data.weather[0].id:''} />
      <span className='small'>Updated as of: <br/>{time}</span>
      </div>
    </div>
   
</div>

<div className='high-head'>Today's Highlight</div>
<Highlight sunrise={data.sys?data.sys.sunrise:0} sunset={data.sys?data.sys.sunset:0} dataPolll={dataPoll} />

    </div>
    )
}

export default LeftSection;