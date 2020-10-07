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
        console.log(data)
        if (response.ok && !data.error) {
          const { user } = data //await response.json();
          setCurrentUserId(user.id);
          dispatch(setUser(user));
          dispatch(setLoggedIn(true))
        } else {
          const { error } = data //await response.json()
          console.log(error)
          setErrors(error.errors)
        }
      }

    if (loggedIn) {
        return <Redirect to={`/dashboard/${id}`} />
      }

    return (
        <>
          <div className="real-page-container">
            <div className="page-container">
              <div className="login-picture-container">
              </div>
              <div className="login-form-container">
                <h2 className="login-form-title">
                  Welcome to Jackpot Degen
                </h2>
                    <div className="errors-div">
                      {errors && errors.length > 0 ? errors.map(error => (
                        <p className="errors-div-error">{error.msg}</p>
                      )) : null}
                    </div>
                    <label className="login-form-form-label" htmlFor="email">Email</label>
                    <input className="login-form-input" name="email" type="text" placeholder="DemoUser@example.com" value={email} onChange={changeEmail}/>
                    <br />
                    <label className="login-form-form-label" htmlFor="password">Password</label>
                    <input className="login-form-input" name="password" type="password" placeholder="password" value={password} onChange={changePassword}/>
                    <br />
                    <button type="submit" onClick={handleSubmit} className="login-form-button">
                        Login
                    </button>
                <Link className="login-form-link" to='/users/new'>Don't Have an Account? Sign Up</Link>
              </div>
            </div>
        </div>
        </>
    )
}


export default LogInForm;