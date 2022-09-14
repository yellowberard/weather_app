import React from 'react'
import '../assests/css/Highlight.css'

const AirQuality =({type ,airValue})=>{
    return(
        <span> {type}- {airValue} </span>
    )
}
export default AirQuality