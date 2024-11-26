import React from 'react';
import { useQuery } from 'react-query';
import AdminAuthPage from '../pages/AdminAuthPage/AdminAuthPage';
import { getPrincipalRequest } from '../apis/api/principal';
import { Route, Routes } from 'react-router-dom';
import AdminSignupPage from '../pages/AdminSignupPage/AdminSignupPage';

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
                    {/* <Route path="/" element={<AdminAuthPage />} /> */}
                    <Route path="/admin/signup" element={<AdminSignupPage />} />
                    {/* <Route path="/selectmenu" element={<SelectAdminPage />} />
                    <Route path="/oauth2" element={<OAuth2Page />} />
                    <Route
                        path="/oauth2/signup"
                        element={<OAuth2SignupPage />}
                    />
                    <Route
                        path="/oauth2/signin"
                        element={<OAuth2SigninPage />}
                    />
                    <Route path="/oauth2/merge" element={<OAuth2MergePage />} />
                    <Route path="/menu/*" element={<MenuRoute />} />
                    <Route path="/admin/*" element={<AdminRoute />} /> */}
                </Routes>
            )
            }
        </>
    );
}

export default HomeRoute;