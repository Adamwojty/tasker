import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../config/Routing/Routes';
const MainView: React.FC = () => {
    return (
        <>
            <h1>MainView</h1>
            <Link to={Routes.SIGN_IN}>Sign In</Link>
            <Link to={Routes.SIGN_UP}>Sign Up</Link>
        </>
    );
};
export default MainView;
