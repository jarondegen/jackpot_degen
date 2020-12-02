import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOutButton from './LogOutButton';
import '../css/nav-bar.css'
import SearchBar from './SearchBar';
import burger from '../images/burger.png';


const NavBar =  () => {
    const history = useHistory()
    const { id } = useSelector(state => state.Auth);

    const handleLogoClick = () => {
        if (id) {
            history.push(`/dashboard/${id}`)
        }
    }

    const handleBurgerClick = (e) => {
        const mobileMenu = document.getElementById('mobile-menu-container');
        if (mobileMenu) {
            mobileMenu.classList.toggle('show')
        }
        e.stopPropagation();
    }

    return (
        <>
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
                    <div className="navbar-burger-container">
                        <img onClick={handleBurgerClick} alt="menu icon" className="mobile-burger-img" src={burger} />
                    </div>
                </div>
            </nav>
            <div className="" id="mobile-menu-container">
                {id ? 
                    <>
                        <div onClick={handleBurgerClick} className="menu-menu-link-div top-mobile-select">
                            <NavLink className="nav-link" to={`/dashboard/${id}`} activeClassName="active">Dashboard</NavLink>
                        </div>
                        <div onClick={handleBurgerClick} className="menu-menu-link-div">
                            <NavLink className="nav-link" to={`/cardrooms`} activeClassName="active">Card Rooms</NavLink>
                        </div>
                        <div onClick={handleBurgerClick} className="menu-menu-link-div">
                            <NavLink className="nav-link" to={`/about`} activeClassName="active">About</NavLink>
                        </div>
                        <div onClick={handleBurgerClick} className="menu-menu-link-div">
                            <LogOutButton className="nav-link logout-button"/>
                        </div>
                    </>
                    :
                    <>
                        <div onClick={handleBurgerClick} className="menu-menu-link-div">
                            <NavLink className="nav-link" exact={true} to="/login" activeClassName="active">Sign in</NavLink>
                        </div>
                        <div onClick={handleBurgerClick} className="menu-menu-link-div">
                            <NavLink className="nav-link" exact={true} to="/users/new" activeClassName="active">Sign up</NavLink>
                        </div>
                        <div onClick={handleBurgerClick} className="menu-menu-link-div">
                            <NavLink className="nav-link" to={`/about`} activeClassName="active">About</NavLink>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default NavBar;