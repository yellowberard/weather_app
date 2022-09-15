import React from 'react'
import AirQuality from './AirQuality'
import '../assests/css/Highlight.css'
import aqiCalculator from "aqi-calculator"

const Highlight =( {sunrise, sunset, dataPolll } )=>{
    var DATA = [
        {
          datetime: "2022-09-15T22:00:00.000Z", //Taking the 24-hour average concentration  - change when you use this example
          pm25: dataPolll.list ? dataPolll.list[0].components.pm2_5 : null,
          pm10: dataPolll.list ? dataPolll.list[0].components.pm10 : null,
          so2: dataPolll.list ? dataPolll.list[0].components.so2 : null,
          no: dataPolll.list ? dataPolll.list[0].components.no : null,
          nox: null,
          no2: dataPolll.list ? dataPolll.list[0].components.no2 : null,
          o3: dataPolll.list ? dataPolll.list[0].components.o3 : null,
          co: dataPolll.list ? (dataPolll.list[0].components.co)/1000 : null,
        }];
    var AQI = aqiCalculator(DATA);
    console.log(AQI);

    const aqiColors = ["#00cc00", "#64cd02", "#fcbf26", "#ff9900", "#ff0000", "#a4292a"];
    const aqiName = ["Good", "Satisfactory", "Moderate", "Poor", "Severe", "Hazardous"];
    const sunriseDate = new Date(sunrise * 1000);
    const sunriseTime =  sunriseDate.toLocaleTimeString("en-US");

    const sunsetDate = new Date(sunset * 1000);
    const sunsetTime =  sunsetDate.toLocaleTimeString("en-US");
    var aqiIndex;
    if(AQI <= 50) {
        aqiIndex=0;
    } else if(AQI >= 51 && AQI <= 100) {
        aqiIndex=1;
    } else if(AQI >= 101 && AQI <= 200) {
        aqiIndex=2;
    } else if(AQI >= 201 && AQI <= 300) {
        aqiIndex=3;
    } else if(AQI >= 301 && AQI <= 400) {
        aqiIndex=4;
    } else {
        aqiIndex=5;
    }
    return(
        <div className="highlight container-fluid d-flex  align-items-center">
            <div className="sun shadow container d-flex flex-column justify-content-center align-itmes-center">
                <div className="sunHead  d-flex justify-content-center align-items-center">
                    <span className=' align-self-center'>Sunrise and Sunset</span>
                    <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/horizon.svg" alt="" />
                    {/* <i class="bi bi-sun"></i> */}
                </div>
                <div className="sunContent  d-flex justify-content-center align-items-center" >
                    <div className="sunrise">
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg" alt="" />
                        <span>{sunriseTime}</span>
                    </div>
                    <div className="sunset">
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg" alt="" />
                        <span>{sunsetTime}</span>
                    </div>
                </div>
            </div>
          
            <div className="aqi shadow container-fluid flex-column d-flex justify-content-center align-items-center">
                <div className="aqiHead d-flex justify-content-center align-items-center">
                   <span>Air Quality</span>
                </div>
               <div className="aqiContent d-flex justify-content-center align-items-center ">
                <div className="aqiIndex container-fluid d-flex justify-content-center align-items-center" style={{backgroundColor: aqiColors[aqiIndex]}}>
                 <div className="indexDesc d-flex flex-column justify-content-center align-items-center" >
                 <span className='text-white h5 mb-0'>{AQI}</span>
                   <span>{aqiName[aqiIndex]}</span>
                      </div>
                     </div>
                 <div className="aqiDesc d-flex justify-content-center align-items-center">
                  <div className="aqiDescLeft d-flex flex-column justify-content-start align-items-center">
                         <AirQuality type='CO' airValue={dataPolll.list ? dataPolll.list[0].components.co : 0} />
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.no : 0} />
                         <AirQuality type='NO2' airValue={dataPolll.list ? dataPolll.list[0].components.no2 : 0} />
                         <AirQuality type='O3' airValue={dataPolll.list ? dataPolll.list[0].components.o3 : 0} />
 
                  </div>
                   <div className="aqiDescRight d-flex flex-column justify-content-start align-items-center">
                         <AirQuality type='SO2' airValue={dataPolll.list ? dataPolll.list[0].components.so2 : 0} />
                         <AirQuality type='PM 2.5' airValue={dataPolll.list ? dataPolll.list[0].components.pm2_5 : 0} />
                         <AirQuality type='PM 10' airValue={dataPolll.list ? dataPolll.list[0].components.pm10 : 0} />
                         <AirQuality type='NH3' airValue={dataPolll.list ? dataPolll.list[0].components.nh3 : 0} />
        
                     </div>
                  </div>
              </div>
            </div>
        </div>
    )
}
 export default Highlight