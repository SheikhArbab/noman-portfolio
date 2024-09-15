import React from 'react'
// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LogoutLayout: React.FC = () => {
    // const currentUser = useSelector(state => state.auth.token)
    return false ? <Navigate to="/dashboard" replace /> : <Outlet />

}

export default LogoutLayout