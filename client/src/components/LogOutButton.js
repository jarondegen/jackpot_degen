import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/Auth';



function LogoutButton() {
  const { id } = useSelector(state => state.Auth);

  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleClick = () => {
    if (id) {
      dispatch(removeUser());
      history.push("/login");
    };
  };

  return (
    <div id="logout-button-holder">
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default LogoutButton;