import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOutButton from './LogOutButton';


const NavBar =  (props) => {
    const { id } = useSelector(state => state.Auth)

    if (id) {
        return (
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to={`/dashboard/${id}`} activeClassName="active">Dashboard</NavLink></li>
                <li><NavLink to={`/cardrooms`} activeClassName="active">Card Rooms</NavLink></li>
                <LogOutButton />
            </ul>
        </nav>
    );
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to={`/cardrooms`} activeClassName="active">Card Rooms</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;