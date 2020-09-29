import React from 'react';
import { Link } from 'react-router-dom';

const UserSuccess = () => {
    return (
        <>
            <h1>Account Created Successfully</h1>
            <Link to='/login'>Go To Login Page</Link>
        </>
    );
};

export default UserSuccess