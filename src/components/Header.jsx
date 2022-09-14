import React from 'react';
import '../assests/css/Header.css';
const Header = ( {changeLocation}) => {
  var today = new Date();
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      changeLocation(event.target.value);
    }
  }
   return(
    <div className='header d-flex align-items-center justify-content-between mx-5'>
    <div className="appName d-flex flex-column align-items-center justify-content-center ">
        <h1 className='headerName'>Weather App</h1>
        <h6 className="text-start">{today.toDateString()}</h6>
    </div>
    <div className="searchBar ">
    {
       <div className="input-group rounded-pill border border-black mt-0">
       <span
         className="input-group-text border-0 bg-transparent"
         id="search-addon"
       >
         <i className="bi bi-search text-success"></i>
       </span>
       <input
         id="themeSearch"
         type="search"
         className="searchBarCollections border-0 shadow-none form-control rounded-pill"
         placeholder="Search City"
         aria-label="Search"
         aria-describedby="search-addon"
         onKeyPress={ searchLocation }
       />
     </div>
    }

    </div>
</div>
   )
}

export default Header;