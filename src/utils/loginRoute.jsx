import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginRoute = () => {
    let { user } = useContext(AuthContext);

    return (
        user ? <Navigate to={`/`}/>  : <Outlet/>
    );
};

export default LoginRoute;
