import React from 'react'
import TopNavBrand from './top_nav_brand';
import TopNavDropDown from './top_nav_dropdown';
import { Link } from 'react-router-dom';

const TopNav = ({currentUser, potentialUser, logout, location}) => {
  // console.log(currentUser)
  // let linkUrl = "events/new";
  // currentUser ? linkUrl = "/signin" : linkUrl = "/events/new";
  // console.log(currentUser);
  return (
    <div className="top-nav">
      
        <TopNavBrand />
        <div className="top-nav-right">
          <TopNavDropDown 
            currentUser={currentUser} 
            potentialUser={potentialUser} 
            logout={logout} 
            location={location} />
        <Link to="/events/new">Create Event</Link>
        </div>
    </div>
  )
} 
export default TopNav