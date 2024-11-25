/** @jsxImportSource @emotion/react */
import OAuthSigninPage from "../OAuthSigninPage/OAuthSigninPage";
import OAuthSignupPage from "../OAuthSignupPage/OAuthSignupPage";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";
import * as s from "./style";
import { Route, Routes } from 'react-router-dom';

function AuthPage() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/authentication" element={ <AuthenticationPage /> } />
                <Route path="/oauth2/sign-up" element={ <OAuthSignupPage /> } />
                <Route path="/oauth2/sign-in" element={ <OAuthSigninPage /> } />
            </Routes>
        </div>
    );
}

export default AuthPage;