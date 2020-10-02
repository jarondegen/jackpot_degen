import React from 'react';
import '../css/user-success.css';

const UserSuccess = () => {
    return (
        <>
            <div className="success-page-container">
                <h1 className="success title">Account Created Successfully</h1>
                <a className="success-link" href='/login'>Go To Login Page</a>
            </div>
        </>
    );
};

export default UserSuccess