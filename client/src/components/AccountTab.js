import React from 'react';
import { useSelector } from 'react-redux';


const AccountTab = () => {
    const { email, userName } = useSelector(state => state.Auth)
    return (
        <div className="account-tab-container">
            <div className="account-details-container">
                <p>{`Email: ${email}`}</p>
                <p>{`User Name: ${userName}`}</p>
            </div>
        </div>
    );
};

export default AccountTab