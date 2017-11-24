import React from 'react';
import NavDropDownListItem from './nav_drop_down_list_item';
const listItems = ['asdf', 'fdsa', 'ssas']
const NavDropDown = ({title}) => (
    <div className="nav-dropdown">
        <span>{title}</span>
        <div className="nav-dropdown-content">
            <ul>
                { listItems.map(text => (<NavDropDownListItem details={text}/>)) }
            </ul>
        </div>
    </div>
);

export default NavDropDown;