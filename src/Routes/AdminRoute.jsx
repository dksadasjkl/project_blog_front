import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSignupPage from '../pages/AdminSignupPage/AdminSignupPage';
import MenuPage from '../pages/MenuPage/MenuPage';
import SelectAdminPage from '../pages/SelectAdminPage/SelectAdminPage';
import OAuth2Route from './OAuth2Route';
import OAuth2SignupPage from '../pages/OAuth2SignupPage/OAuth2SignupPage';
import AdminMainPage from '../pages/AdminMainPage/AdminMainPage';
import AdminSalesPage from '../pages/AdminSalesPage/AdminSalesPage';
import AdminPayPage from '../pages/AdminPayPage/AdminPayPage';
import AdminMenuAdd from '../pages/AdminMenuAdd/AdminMenuAdd';
import AdminMenuSearch from '../pages/AdminMenuSearch/AdminMenuSearch';
import PasswordEditPage from '../pages/PasswordEditPage/PasswordEditPage';
import AdminUserSearch from '../pages/AdminUserSearch/AdminUserSearch';
import AdminFeedbackPage from '../pages/AdminFeedbackPage/AdminFeedbackPage';
import AdminStoreSettingPage from '../pages/AdminStoreSettingPage/AdminStoreSettingPage';

function AdminRoute(props) {
    return (
        <Routes>
            <Route path="/signup" element={<AdminSignupPage />} />
            <Route path="/select/menu" element={<SelectAdminPage />} />
            <Route path="/main" element={<AdminMainPage />} />
            <Route path="/sale/*" element={<AdminSalesPage />} />
            <Route path="/pay" element={<AdminPayPage />} />
            <Route path="/add" element={<AdminMenuAdd />} />
            <Route path="/getmenu/*" element={<AdminMenuSearch />} />
            <Route path="/passwordedit" element={<PasswordEditPage />} />
            <Route path="/usersearch" element={<AdminUserSearch />} />
            <Route path="/feedback" element={<AdminFeedbackPage />} />
            <Route path="/setting" element={<AdminStoreSettingPage />} /> 
        </Routes>
    );
}

export default AdminRoute;