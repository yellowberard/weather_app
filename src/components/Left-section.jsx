import React from 'react'
import '../assests/css/Left-section.css'
import ProgressSection from './ProgressionSection';
import Highlight from './Highlight';
import Skyline from '../assests/images/skyline.webp';
import WeatherIcon from './WeatherIcon';


const LeftSection = ({ data, dataPoll}) => {
    const date = new Date(data ? data.dt+data.timezone * 1000 : 0);
    const time =  date.toLocaleTimeString("en-US");
   
    const country = data.sys ? `${data.sys.country}` : "IN";  
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
<div className="mid-main d-flex  align-items-center">    
<ProgressSection />
<div className="more-info shadow d-flex flex-column  justify-content-center align-items-center" >
    <div className="feels_pressure d-flex align-items-center justify-content-center ">
    <div className="feels d-flex flex-column align-items-center">
        <span className='mid-info-head justify-self-start'>Feels like</span>
        <span className='justify-self-center'>{data.main?data.main.feels_like:0}°C</span>
    </div>
    <div className="pressure d-flex flex-column justify-content-center align-items-center">
        <span className='row mid-info-head'>Pressure</span>
    <span className="pressure-value">{data.main?data.main.pressure:0} <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/barometer.svg" alt="" /></span>
        
    </div>
    </div>
    <div className="temp-more-info d-flex justify-content-center align-items-center">
    <div className="temp-low">
        <span className='row mid-info-head'>Minimun temp.</span>
        <span className="low-temp">{data.main?data.main.temp_min:0}<sup>o</sup>C  <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg" alt="" /></span>
       
    </div>
    <div className="temp-high">
        <span className='row mid-info-head'>Highest temp</span>
    <span className="high-temp">{data.main?data.main.temp_max:0}<sup>o</sup>C</span>
        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-warmer.svg" alt="" />
    </div>
    </div>
    
</div>
</div>
<Highlight sunrise={data.sys?data.sys.sunrise:0} sunset={data.sys?data.sys.sunset:0} dataPolll={dataPoll} />

    </div>
    )
}

export default LeftSection;