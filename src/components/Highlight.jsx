import React from 'react'
import AirQuality from './AirQuality'
import '../assests/css/Highlight.css'
const Highlight =( {sunrise, sunset, dataPolll} )=>{

    return(
        <div className="highlight container-fluid d-flex  align-items-center">
            <div className="sun shadow container d-flex flex-column justify-content-center align-itmes-center">
                <div className="sunHead  d-flex justify-content-center align-items-center">
                    <span className=' align-self-center'>Sunrise and Sunset</span>
                    <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/horizon.svg" alt="" />
                </div>
                <div className="sunContent  d-flex justify-content-center align-items-center" >
                    <div className="sunrise">
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg" alt="" />
                        <span>6:00 AM</span>
                    </div>
                    <div className="sunset">
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg" alt="" />
                        <span>6:00 PM</span>
                    </div>
                </div>
            </div>
            
            <div className="aqi shadow container-fluid flex-column d-flex justify-content-center align-items-center">
                <div className="aqiHead d-flex justify-content-center align-items-center">
                   <span>Air Quality</span>
                </div>
               <div className="aqiContent d-flex justify-content-center align-items-center ">
                <div className="aqiIndex container-fluid d-flex justify-content-center align-items-center">
                 <div className="indexDesc">
                   <span>Worst</span>
                      </div>
                     </div>
                 <div className="aqiDesc d-flex justify-content-center align-items-center">
                  <div className="aqiDescLeft d-flex flex-column justify-content-start align-items-center">
                         <AirQuality type='CO' airValue={dataPolll.list?dataPolll.list[0].components.co:0} />
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.no : 0} />
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.no2 : 0} />
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.o3 : 0} />
 
                  </div>
                   <div className="aqiDescRight d-flex flex-column justify-content-start align-items-center">
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.so2 : 0} />
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.pm2_5 : 0} />
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.pm10 : 0} />
                         <AirQuality type='NO' airValue={dataPolll.list ? dataPolll.list[0].components.nh3 : 0} />
        
                     </div>
                  </div>
              </div>
            </div>
        </div>
    )
}
 export default Highlight