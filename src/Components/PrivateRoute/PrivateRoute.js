import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contextApi/UserContext';

const PrivateRoute = ({children}) => {
    let location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className='text-red-700 text-8xl text-center mt-6' >loading ....</div>
    }
       if(user && user.uid){
       return children
       }
       return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;