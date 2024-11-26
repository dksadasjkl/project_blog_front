import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import Swal from 'sweetalert2';
import { signupRequest } from '../../apis/api/authApi';
/**@jsxImportSource @emotion/react */
import * as s from "./style";
import AuthPageInput from '../../components/AuthPageInput/AuthPageInput';

function AdminSignupPage(props) {
    const navigate = useNavigate();
    const [username, userNameChange, , usernameMessage, setUsernameMessage] = useInput("username");
    const [password, passswordChange, , passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [tradeName, tradeNameChange, , tradeNameMessage] = useInput("tradeName");
    const [email, emailChange, , emailMessage] = useInput("email");
    const [checkPasswordMessage, setCheckPasswordMessage] = useState(null);

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    useEffect(() => {
        if (!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if (checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: "",
                };
            });
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다.",
                };
            });
        }
    }, [checkPassword, password]);

    const handleSignupSubmit = () => {
        signupRequest({
            username,
            password,
            tradeName,
            email,
        })
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    Toast.fire({
                        icon: "success",
                        title: "회원가입이 완료되었습니다!",
                    });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                if (error.response.status === 400) {
                    Toast.fire({
                        icon: "error",
                        title: Object.values(error.response.data).join("\n"),
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "회원가입에 실패하였습니다.",
                    });
                }
            });
    };

    return (
        <>
            <div css={s.layout}>
                <div css={s.signupBox}>
                    <h1>회원가입</h1>
                    <div css={s.inputInfo}>
                        <AuthPageInput
                            type={"text"}
                            name={"username"}
                            placeholder={"사용자이름"}
                            value={username}
                            onChange={userNameChange}
                            message={usernameMessage}
                        />
                        <AuthPageInput
                            type={"password"}
                            name={"password"}
                            placeholder={"비밀번호"}
                            value={password}
                            onChange={passswordChange}
                            message={passwordMessage}
                        />
                        <AuthPageInput
                            type={"password"}
                            name={"checkPassword"}
                            placeholder={"비밀번호 확인"}
                            value={checkPassword}
                            onChange={checkPasswordChange}
                            message={checkPasswordMessage}
                        />
                        <AuthPageInput
                            type={"text"}
                            name={"tradeNaem"}
                            placeholder={"상호명"}
                            value={tradeName}
                            onChange={tradeNameChange}
                            message={tradeNameMessage}
                        />
                        <AuthPageInput
                            type={"text"}
                            name={"email"}
                            placeholder={"이메일"}
                            value={email}
                            onChange={emailChange}
                            message={emailMessage}
                        />
                    </div>
                </div>
                <div>
                    <button css={s.signupButton} onClick={handleSignupSubmit}>
                        가입하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default AdminSignupPage;