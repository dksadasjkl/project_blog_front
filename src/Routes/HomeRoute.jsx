import React from 'react';
import { useQuery } from 'react-query';
import AdminAuthPage from '../pages/AdminAuthPage/AdminAuthPage';
import { getPrincipalRequest } from '../apis/api/principal';
import { Route, Routes } from 'react-router-dom';
import AdminSignupPage from '../pages/AdminSignupPage/AdminSignupPage';
import AdminRoute from './AdminRoute';
import MenuRoute from './MenuRoute';
import OAuth2Route from './OAuth2Route';

function HomeRoute(props) {
    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("onSuccess");
            console.log(response);
        },
        onError: (error) => {
            console.log("오류");
            console.log(error);
        },
    });
    
    return (
        <>
            {principalQuery.isLoading ? (
                <></>
            ) : 
            (
                <Routes>
                    <Route path="/" element={<AdminAuthPage />} />
                    <Route path="/menu/*" element={<MenuRoute />} />
                    <Route path="/admin/*" element={<AdminRoute />} />
                    <Route path="/oauth2/*" element={<OAuth2Route />}/>
                </Routes>
            )
            }
        </>
    );
}

export default HomeRoute;