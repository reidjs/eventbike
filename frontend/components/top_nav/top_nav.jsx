import React from 'react'
import TopNavBrand from './top_nav_brand';
import TopNavDropDown from './top_nav_dropdown';
import { Link } from 'react-router-dom';

const TopNav = ({currentUser}) => {
  // console.log(currentUser)
  return (
    <div>
      <TopNavBrand />
      <TopNavDropDown currentUser={currentUser} logout={logout} />
      <Link to="/events/new">Create Event</Link>
    </div>
  )
} 
export default TopNav