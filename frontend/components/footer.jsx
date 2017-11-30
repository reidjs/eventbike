import React from 'react';
import { Link } from 'react-router-dom';
import Work from 'material-ui-icons/Work';
import Language from 'material-ui-icons/Language';
import Favorite from 'material-ui-icons/Favorite';
const Footer = () => (
  <div className="footer">
    <div className="footer-links">
    
    
    <a href="https://www.linkedin.com/in/reidsherman/"><Work />LinkedIn</a>
    <a href="https://github.com/reidjs/eventbike"><Favorite />GitHub</a>
    <a href="https://reidsherman.com/"><Language /> Website</a>

    </div>
  </div>
);

export default Footer;