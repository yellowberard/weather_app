import React from 'react';
import RightSection from './Right-section';
import LeftSection from './Left-section';
import '../assests/css/index.css';

const Main=( {weatherData, dataPol}) => {

    return(
        <div className="main  d-flex justify-content-center align-itmes-center">
         <LeftSection data={weatherData} dataPoll={dataPol} />
        <RightSection />
    
        </div>
    )
}

export default Main;