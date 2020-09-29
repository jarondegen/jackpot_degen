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
                <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                <li><NavLink to={`/dashboard/${id}`} activeClassName="active">Dashboard</NavLink></li>
                <LogOutButton />
            </ul>
        </nav>
    );
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;