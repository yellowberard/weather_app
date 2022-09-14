import '../assests/css/Left-section.css';
import Drizzle from '../assests/weather-icons-master/design/fill/animation-ready/drizzle.svg';
import Thunderstorm from '../assests/weather-icons-master/design/fill/animation-ready/thunderstorms.svg';
import Rain from '../assests/weather-icons-master/design/fill/animation-ready/rain.svg';
import Mist from '../assests/weather-icons-master/design/fill/animation-ready/mist.svg';
import Clear from '../assests/weather-icons-master/design/fill/animation-ready/clear-day.svg';
import Snow from '../assests/weather-icons-master/design/fill/animation-ready/snow.svg';
import Cloudy from '../assests/weather-icons-master/design/fill/animation-ready/cloudy.svg';
import Smoke from '../assests/weather-icons-master/design/fill/animation-ready/smoke-particles.svg';
import Haze from '../assests/weather-icons-master/design/fill/animation-ready/haze.svg';
import DustWinds from '../assests/weather-icons-master/design/fill/animation-ready/dust-wind.svg';
import Fog from '../assests/weather-icons-master/design/fill/animation-ready/fog.svg';
import Dust from '../assests/weather-icons-master/design/fill/animation-ready/dust.svg';
import Tornado from '../assests/weather-icons-master/design/fill/animation-ready/tornado.svg';
import Squall from '../assests/weather-icons-master/design/fill/animation-ready/wind-beaufort-12.svg';

const WeatherIcon=({icon})=>{
    let weatherIcon;
    if(icon>=200 && icon<=232){
        weatherIcon=Thunderstorm;
    }else if(icon>=300 && icon<=321){
        weatherIcon=Drizzle;
    }else if(icon>=500 && icon<=531){
        weatherIcon=Rain;
    }else if(icon>=600 && icon<=622){
        weatherIcon=Snow;
    }else if(icon===701){
        weatherIcon=Mist;
    }else if(icon===711){
        weatherIcon=Smoke;
    }else if(icon===721){
        weatherIcon=Haze;
    }else if(icon===731){
        weatherIcon=DustWinds;
    }else if(icon===741){
        weatherIcon=Fog;
    }else if(icon===751){
        weatherIcon=DustWinds;
    }else if(icon===761){
        weatherIcon=Dust;
    }else if(icon===771){
        weatherIcon=Squall;
    }else if(icon===781){
        weatherIcon=Tornado;
    }else if(icon>=801 && icon<=804){
        weatherIcon=Cloudy;
    }else{
        weatherIcon=Clear;
    }
    return(
        <img src={weatherIcon} alt="" className='iconImage' ></img>
    )
}

export default WeatherIcon;