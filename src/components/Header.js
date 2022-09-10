import React from 'react';
import '../assests/css/index.css';
const Header = () => {

   return(
    <div className='header mx-5'>
    <div className="appName">
        <h1 className='text-primary'>Weather App</h1>
    </div>
    <div className="searchBar ">
    <nav className="navbar  justify-content-between">
  {/* <a class="navbar-brand">Navbar</a> */}
  <form className="form-inline d-flex flex-row">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>

    </div>
</div>
   )
}

export default Header;