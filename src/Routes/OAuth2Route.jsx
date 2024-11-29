import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OAuth2Page from '../pages/OAuth2Page/OAuth2Page';
import OAuth2SignupPage from '../pages/OAuth2SignupPage/OAuth2SignupPage';
import OAuth2SigninPage from '../pages/OAuth2SigninPage/OAuth2SigninPage';
import OAuth2MergePage from '../pages/OAuth2MergePage/OAuth2MergePage';

function OAuth2Route(props) {
    return (
        <Routes>
                <Route path="/" element={<OAuth2Page />} />
                <Route path="/signup" element={<OAuth2SignupPage />} />
                <Route path="/signin"element={<OAuth2SigninPage />} />
                <Route path="/merge" element={<OAuth2MergePage />} />
        </Routes>
    );
}

export default OAuth2Route;