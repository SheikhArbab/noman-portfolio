import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import * as C from "@/components/index";
import { useSelector } from 'react-redux';
import { UserState } from '@/types';

const PrivateLayout: React.FC = () => {
    const { token } = useSelector((state: UserState) => state.auth);
    return (
        token ?
            <>
                <C.AdminNav />
                <div className='flex relative min-h-screen bg-black/80'>
                    <C.Sidebar />
                    <Outlet />
                </div>
            </>
            :
            <Navigate to={'/login'} />
    )
}

export default PrivateLayout