import React from 'react'
import TopNavBrand from './top_nav_brand';
import TopNavDropDown from './top_nav_dropdown';
import { Link } from 'react-router-dom';

const TopNav = ({currentUser}) => {
  // console.log(currentUser)
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <TopNavBrand />
          </a>
          <ul className="nav navbar-nav">
          <li className="nav-item">
            <TopNavDropDown currentUser={currentUser} logout={logout} />
            
          </li>
          <li className="nav-item"><Link to="/events/new">Create Event</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 
export default TopNav