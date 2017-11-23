import React from 'react'
import TopNavBrand from './top_nav_brand';
import TopNavDropDown from './top_nav_dropdown';
import { Link } from 'react-router-dom';

const TopNav = ({currentUser, potentialUser, logout, location}) => {
  // console.log(currentUser)
  return (
    <div className="top-nav">
      <ul>
        <li><TopNavBrand /></li>
        <li><TopNavDropDown 
          currentUser={currentUser} 
          potentialUser={potentialUser} 
          logout={logout} 
          location={location} /></li>
        <li><Link to="/events/new">Create Event</Link></li>
      </ul>
    </div>
  )
} 
export default TopNav