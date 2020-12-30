import React from 'react';
import { setUser, setLoggedIn } from '../store/Auth';
import { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/login-page.css';
import logo from '../images/logo.jpg';

const LogInForm = () => {
    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    const dispatch = useDispatch();
    const { id, loggedIn } = useSelector(state => state.Auth)
    const [errors, setErrors] = useState([])

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json()
        if (response.ok && !data.error) {
          const { user } = data
          dispatch(setUser(user));
          dispatch(setLoggedIn(true))
        } else {
          const { error } = data
          setErrors(error.errors)
        }
      }

    if (loggedIn) {
        return <Redirect to={`/dashboard/${id}`} />
      }

      const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
          }
    }

    return (
        <>
          <div className="real-page-container">
            <div className="login-page-about-link">
              <NavLink className="login-page-links nav-link" to={`/about`} activeClassName="active">About</NavLink>
              <NavLink className="login-page-links nav-link" to={`/users/new`} activeClassName="active">Sign up</NavLink>
            </div>
            <div className="page-container">
              <div className="login-picture-container">
              </div>
              <div className="mobile-login-page-logo-container">
                <img className="mobile-login-page-logo" alt="jackpot degen logo" src={logo}/>
              </div>
              <div className="login-form-container">
                <h2 className="login-form-title">
                  Welcome to Jackpot Degen
                </h2>
                    <label className="login-form-form-label" htmlFor="email">Email</label>
                    <input onKeyPress={handleEnter} className="login-form-input" name="email" type="text" placeholder="DemoUser@example.com" value={email} onChange={changeEmail}/>
                    <br />
                    <label className="login-form-form-label" htmlFor="password">Password</label>
                    <input onKeyPress={handleEnter} className="login-form-input" name="password" type="password" placeholder="password" value={password} onChange={changePassword}/>
                    <br />
                    <button type="submit" onClick={handleSubmit} className="login-form-button">
                        Sign in
                    </button>
                    <div className="errors-div">
                      {errors && errors.length > 0 ? errors.map((error, i) => (
                        <li key={i} className="errors-div-error">{error.msg}</li>
                      )) : null}
                    </div>
                <Link className="login-form-link" to='/users/new'>Don't Have an Account? Sign up</Link>
              </div>
            </div>
        </div>
        </>
    )
}


export default LogInForm;