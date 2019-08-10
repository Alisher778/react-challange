import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderElement, List, Ul, Nav } from './element';

const Header = (props) => {
    return (
        <HeaderElement>
            <Nav>
                <Link to="/">SABAL</Link>
                <Ul>
                    <List><NavLink to="/" activeStyle={{ color: '#ffc107' }} exact>HOME</NavLink></List>
                    <List><NavLink to="/companies" activeStyle={{ color: '#ffc107' }}>Companies</NavLink></List>
                    <List><NavLink to="/search" activeStyle={{ color: '#ffc107' }} exact>Search</NavLink></List>
                </Ul>
            </Nav>
        </HeaderElement>
    )
}

export default Header;