import React from 'react'
import '../assests/css/Highlight.css'

const typeStyle={
    fontWeight:'bold',
    fontSize:'1rem',
    fontFamily: `'Domine', serif`,

        };
const valueStyle={
    fontFamily: `'Lora', serif `,
fontWeight:400,
}        
const AirQuality =({type ,airValue})=>{
 
    return(
        <div className='container-fluid'>
            <span style={typeStyle}> {type}</span><span style={valueStyle}> - {airValue} </span>
        </div>
    )
}
export default AirQuality