import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav>
                <Link to="/">SABAL</Link>
                <ul>
                    <li><NavLink to="/" activeStyle={{ color: 'red' }} exact>HOME</NavLink></li>
                    <li><NavLink to="/companies" activeStyle={{ color: 'red' }} exact>Companies</NavLink></li>
                    <li><NavLink to="/search" activeStyle={{ color: 'red' }} exact>Search</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;