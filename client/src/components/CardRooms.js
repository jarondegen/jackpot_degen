import React, { useState, useEffect } from 'react';
import '../css/cardrooms.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCities, getStates, setState, setCity } from '../store/SignUp';


const CardRooms = () => {
    const [rooms, setRooms] = useState([])
    
    
    //for city search
    const dispatch = useDispatch()
    const { state } = useSelector(state => state.SignUp)
    const { city } = useSelector(state => state.SignUp)
    const { states } = useSelector(state => state.SignUp)
    const { cities } = useSelector(state => state.SignUp)

    const handleStateSelect = (e) => {
        if (e.target.value === 'Select A State') return
        let id;
        states.forEach(state => {
            if (e.target.value === state[0]) {
                id = state[1]
            };
        });
        dispatch(setState([e.target.value, id]));
        const getRooms = async () => {
            const data = await fetch(`/api/cardrooms/states/${id}`);
            const allRooms = await data.json();
            setRooms(allRooms)
        }
        getRooms()
    };
    
    const handleCitySelect= (e) => {
        if (e.target.value === 'Select A City') return
        let id;
        cities.forEach(city => {
            if (e.target.value === city[0]) {
                id = city[1]
            };
        });
        dispatch(setCity([e.target.value, id]));
        dispatch(setState([e.target.value, id]));
        const getRooms = async () => {
            const data = await fetch(`/api/cardrooms/cities/${id}`);
            const allRooms = await data.json();
            setRooms(allRooms)
        }
        getRooms()
    };

    useEffect(()=> {
        dispatch(getStates());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCities(state));
    }, [state, dispatch]);
    //for city search ^^^





    useEffect(()=>{
        const getRooms = async () => {
            const data = await fetch('/api/cardrooms');
            const allRooms = await data.json();
            setRooms(allRooms)
        }
        getRooms()
    },[])
    return (
        <>
            <div className="card-rooms-page-container">
                <h1 className="card-rooms-title" >Card Rooms</h1>
                <div className="selects-container">
                    <select className="cardroom-select-el" name="State" value={state[0]} onChange={handleStateSelect}>
                        <option >Select A State</option>
                        {states && states.map((state, i) => 
                            <option key={state[0]} >{state[0]}</option>
                        )}
                    </select>
                    <select className="cardroom-select-el" name="cityId" value={city[0]} onChange={handleCitySelect}>
                        <option>Select A City</option>
                        {cities && cities.map((city) => 
                            <option key={city[0]} >{city[0]}</option>)    
                        }
                    </select>
                </div>
                <div className="card-rooms-table-container">
                    <table className="card-rooms-table">
                        <thead>
                            <tr>
                            <th>Card Room</th>
                            <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms && rooms.map(room => 
                                <tr key={room.id}>
                                    <td>
                                        <a className="card-room-table-links" href={`/cardrooms/${room.id}`}>{room.name}</a>
                                    </td>
                                    <td key={room.city.name}>
                                        {room.city.name}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CardRooms