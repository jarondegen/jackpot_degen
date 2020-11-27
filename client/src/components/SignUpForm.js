import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../css/signup.css'
import { getCities, getStates, setState, setCity, setUserName, 
         setEmail, setPassword, setConfirmPassword } from '../store/SignUp';

const SignUpForm = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { email }  = useSelector(state => state.SignUp)
    const { userName } = useSelector(state => state.SignUp)
    const { password } = useSelector(state => state.SignUp)
    const { confirmPassword } = useSelector(state => state.SignUp)
    const { state } = useSelector(state => state.SignUp)
    const { city } = useSelector(state => state.SignUp)
    const { states } = useSelector(state => state.SignUp)
    const { cities } = useSelector(state => state.SignUp)
    const [errors, setErrors] = useState([]);

    const handleUserName = (e) => {
        dispatch(setUserName(e.target.value));
    };
    const handleEmail = (e) => {
        dispatch(setEmail(e.target.value));
    };
    const handlePassword = (e) => {
        dispatch(setPassword(e.target.value));
    };
    const handleConfirmPassword = (e) => {
        dispatch(setConfirmPassword(e.target.value));
    };
    const handleStateSelect = (e) => {
        let id;
        states.forEach(state => {
            if (e.target.value === state[0]) {
                id = state[1]
            };
        });
        dispatch(setState([e.target.value, id]));
    };
    const handleCitySelect= (e) => {
        let id;
        cities.forEach(city => {
            if (e.target.value === city[0]) {
                id = city[1]
            };
        });
        dispatch(setCity([e.target.value, id]));
    };

    useEffect(()=> {
        dispatch(getStates());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCities(state));
    }, [state, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDetails = { cityId: city[1], userName, email, password, confirmPassword };
        const data =  await fetch('/api/users/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formDetails }),
        })
        if (data.ok) {
            history.push("/users/success");
        }else {
            const { error } = await data.json();
            setErrors(error.errors)
            const eContainer = document.getElementById('ec')
            eContainer.setAttribute('class', 'errors-container')
        }
    }
    
    return (
        <>
        <div className="login-page-about-link">
            <NavLink className="nav-link" to={`/about`} activeClassName="active">About</NavLink>
            <NavLink className="nav-link" to={`/login`} activeClassName="active">Log in</NavLink>
        </div>
        <div className="signup-page-container">
            <div className="sign-up-form-container">
                <div className="signup-logo-div"><img alt="JPD Logo" className="signup-form-logo" src={logo}/></div>
                <h3 className="signup-title">Let's make you an account.</h3>
                <form method="post" action="/api/users/new" className="sign-up-form-form" onSubmit={handleSubmit}>
                    <input className="signup-form-input signup-form-el" value={userName} type="text" name="userName" placeholder="User Name" onChange={handleUserName}/>
                    <input className="signup-form-input signup-form-el" value={email} type="email" name="email" placeholder="Email" onChange={handleEmail}/>
                    <input className="signup-form-input signup-form-el" value={password} type="password" name="password" placeholder="Password" onChange={handlePassword}/>
                    <input className="signup-form-input signup-form-el" value={confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleConfirmPassword}/>
                    <select className="signup-form-el" name="State" value={state[0]} onChange={handleStateSelect}>
                        <option >Select A State</option>
                        {states && states.map((state, i) => 
                            <option key={state[0]} >{state[0]}</option>
                        )}
                    </select>
                    <select className="signup-form-el" name="cityId" value={city[0]} onChange={handleCitySelect}>
                        <option>Select A City</option>
                        {cities && cities.map((city) => 
                            <option key={city[0]} >{city[0]}</option>)    
                        }
                    </select>
                    <button className="signup-form-el signup-form-button" type="submit" >Sign Up</button>
                </form>
                <div id="ec" className="errors-container hidden">
                    {errors.length > 0 ? errors.map(error => 
                        <li className="signup-error" key={error.param}>
                            {error.msg}
                        </li>
                    ): null}
                </div>
                <a className="signup-form-have-account" href="/login">
                    Already have an account? Log in here
                </a>
            </div>
        </div>
        </>
    );
};

export default SignUpForm;