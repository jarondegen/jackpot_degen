import React from "react";
import { useHistory } from "react-router-dom";
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
      <button className="logout-button" onClick={handleClick}>Sign out</button>
      <div className="mobile-logout-button" onClick={handleClick}>Sign out</div>
    </div>

  );
};

export default LogoutButton;