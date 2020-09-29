import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const SignUpForm = () => {

    const history = useHistory();
    const [states, setStates] = useState([['Arizona', 6]]);
    const [cities, setCities] = useState([['San Diego', 1]]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleStateSelect = (e) => {
        let id;
        states.forEach(state => {
            if (e.target.value === state[0]) {
                id = state[1]
            };
        });
        setSelectedState([e.target.value, id]);
    };

    const handleCitySelect= (e) => {
        let id;
        cities.forEach(city => {
            if (e.target.value === city[0]) {
                id = city[1]
            };
        });
        setSelectedCity([e.target.value, id]);
    };

    useEffect(()=> {
        const getStates = async () => {
            const data = await fetch('/api/states');
            const { statesArr } = await data.json()
            setStates(statesArr)
        };
        getStates();
    }, []);

    useEffect(() => {
        const getCities = async () => {
            const data = await fetch('/api/cities', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ selectedState }),
              });
            if (data.ok) {
                const { citiesArr } = await data.json();
                if (citiesArr.length !== 0){
                    setCities(citiesArr);
                };
            };
        };
        getCities();
    }, [selectedState]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDetails = { cityId: selectedCity[1], userName, email, password, confirmPassword };
        const data =  await fetch('/api/users/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formDetails }),
        })
        if (data.ok) {
            history.push("/users/success");
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={userName} type="text" name="userName" placeholder="User Name" onChange={handleUserName}/>
            <input value={email} type="email" name="email" placeholder="Email" onChange={handleEmail}/>
            <input value={password} type="password" name="password" placeholder="Password" onChange={handlePassword}/>
            <input value={confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleConfirmPassword}/>
            <select name="State" value={selectedState[0]} onChange={handleStateSelect}>
                <option >Select A State</option>
                {states.map((state, i) => 
                    <option key={state[0]} >{state[0]}</option>
                )}
            </select>
            <select name="city" value={selectedCity[0]} onChange={handleCitySelect}>
                <option>Your City</option>
                {cities && cities.map((city) => 
                    <option key={city[0]} >{city[0]}</option>)    
                }
            </select>
            <button type="submit" >Sign Up</button>
        </form>
    );
};

export default SignUpForm;