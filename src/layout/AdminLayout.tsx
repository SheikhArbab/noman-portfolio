import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import * as C from "@/components/index";
// import { useSelector } from 'react-redux';

const PrivateLayout: React.FC = () => {
    // const currentUser = useSelector((state) => state.auth.token);
    return (
        true ?
            <>
                <Outlet />
            </> : <Navigate to={'/login'} />
    )
}

export default PrivateLayout