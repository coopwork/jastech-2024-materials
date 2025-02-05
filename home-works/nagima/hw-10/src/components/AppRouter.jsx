import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(route => (
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={<route.component />} 
                    />
                ))
                : publicRoutes.map(route => (
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={<route.component />} 
                    />
                ))
            }
            <Route path="*" element={<Navigate to={isAuth ? "/posts" : "/login"} replace />} />
        </Routes>
    );
};

export default AppRouter;
