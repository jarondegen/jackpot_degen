import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOutButton from './LogOutButton';
import '../css/nav-bar.css'
import SearchBar from './SearchBar';


const NavBar =  () => {
    const history = useHistory()
    const { id } = useSelector(state => state.Auth)

    const handleLogoClick = () => {
        if (id) {
            history.push(`/dashboard/${id}`)
        }
    }

    return (
        <nav className="navbar-nav">
            <div className="navbar-container" >
                <div onClick={handleLogoClick} className="navbar-logo-container">
                    <div className="logo-div">
                        <img alt="JPD Logo" className="navbar-logo" src="../../images/logo2.png" />
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
                                <NavLink className="nav-link" to={`/about`} activeClassName="active">About</NavLink>
                                <LogOutButton className="nav-link logout-button"/>
                            </>
                            :
                            <>
                                <NavLink className="nav-link" exact={true} to="/login" activeClassName="active">Sign in</NavLink>
                                <NavLink className="nav-link" exact={true} to="/users/new" activeClassName="active">Sign up</NavLink>
                            </>
                        }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;