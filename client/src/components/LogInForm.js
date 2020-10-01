import React from 'react';
import { setUser, setLoggedIn } from '../store/Auth';
import { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/login-page.css';

const LogInForm = () => {
    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    const [currentUserId, setCurrentUserId] = useState('');
    const dispatch = useDispatch();
    const id = useSelector(state => state.Auth)

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
        if (response.ok) {
          const { user } = await response.json();
          setCurrentUserId(user.id);
          dispatch(setUser(user));
          dispatch(setLoggedIn(true))

        }
      }

    if (currentUserId) {
        return <Redirect to='/' />
      }

    return (
        <>
          <div className="page-container">
            <div className="login-picture-container">
            </div>
            <div className="login-form-container">
              <h2 className="login-form-title">
                Welcome to Jackpot Degen
              </h2>
              <form className="login-form-form" onSubmit={handleSubmit}>
                  {/*<input type="hidden" value={csrf_token()}/>*/}
                  <label className="login-form-form-label" htmlFor="email">Email</label>
                  <input className="login-form-input" name="email" type="text" placeholder="DemoUser@example.com" value={email} onChange={changeEmail}/>
                  <br />
                  <label className="login-form-form-label" htmlFor="password">Password</label>
                  <input className="login-form-input" name="password" type="password" placeholder="password" value={password} onChange={changePassword}/>
                  <br />
                  <button type="submit" className="login-form-button">
                      Sign In
                  </button>
              </form>
              <Link className="login-form-link" to='/users/new'>Don't Have an Account? Sign Up</Link>
            </div>
          </div>
        </>
    )
}


export default LogInForm;