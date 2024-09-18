import { UserState } from '@/types';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LogoutLayout: React.FC = () => {
    const { token } = useSelector((state: UserState) => state.auth)
    return token ? <Navigate to="/dashboard" replace /> : <Outlet />

}

export default LogoutLayout