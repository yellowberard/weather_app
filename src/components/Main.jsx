import React from 'react';
import RightSection from './Right-section';
import LeftSection from './Left-section';
import '../assests/css/index.css';

const Main=( {weatherData, dataPol,aqiData }) => {

    return(
        <div className="main  d-flex justify-content-center align-itmes-center">
         <LeftSection data={weatherData} dataPoll={dataPol} aqiData={aqiData} />
        <RightSection />
    
        </div>
    )
}

export default Main;