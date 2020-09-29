import React from 'react';
import { setUser, setLoggedIn } from '../store/Auth';
import { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LogInForm = () => {
    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    const [currentUserId, setCurrentUserId] = useState('');
    const dispatch = useDispatch();
    // debugger

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
        return <Redirect to="/" />
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*<input type="hidden" value={csrf_token()}/>*/}
                <input name="email" type="text" placeholder="DemoUser@example.com" value={email} onChange={changeEmail}/>
                <input name="password" type="password" placeholder="password" value={password} onChange={changePassword}/>
                <button type="submit">
                    Login
                </button>
            </form>
            <Link to='/users/new'>Sign Up</Link>
        </>
    )
}


export default LogInForm;