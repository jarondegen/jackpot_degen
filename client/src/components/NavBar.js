import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOutButton from './LogOutButton';
import '../css/nav-bar.css'
import SearchBar from './SearchBar';


const NavBar =  (props) => {
    const { id } = useSelector(state => state.Auth)


    return (
        <nav className="navbar-nav">
            <div className="navbar-container" >
                <div className="navbar-logo-container">
                    <div className="logo-div">
                        <img className="navbar-logo" src="../../images/logo2.png" />
                        <h2 className="navbar-title">Jackpot Degen</h2>
                    </div>
                </div>
                {id ? (
                <SearchBar />
                ) : null}
                <div className="navbar-link-container">
                        {id ? 
                            <>
                                <NavLink className="nav-link" to={`/dashboard/${id}`} activeClassName="active">Dashboard</NavLink>
                                <NavLink className="nav-link" to={`/cardrooms`} activeClassName="active">Card Rooms</NavLink>
                                <LogOutButton className="nav-link logout-button"/>
                            </>
                            :
                            <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
                        }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;