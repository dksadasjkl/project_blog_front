/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from "react-query";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PageLayout from "../../components/PageLayout/PageLayout";
import { signinRequest } from "../../apis/api/authApi";
import instance from "../../apis/utils/instance";
import getServerAddress from "../../constants/serverAddress";
import logo from "../../assets/coconut . (2).png";

function AdminAuthPage() {
    const [username, handleOnChangeUsername] = useInput();
    const [password, handleOnChangePassword] = useInput();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const principalData = queryClient.getQueryData("principalQuery");
    console.log(principalData);

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

    const handleSigninClick = () => {
        signinRequest({
            username,
            password,
        })
            .then((response) => {
                const accessToken = response.data;
                localStorage.setItem("AccessToken", accessToken);
                Toast.fire({
                    icon: "success",
                    title: "성공적으로 로그인 되었습니다.",
                });
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            })
            .catch((error) => {
                Toast.fire({
                    icon: "error",
                    title: error.response.data,
                });
                console.log(error);
            });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSigninClick();
        }
    };

    const handleSignupClick = () => {
        navigate("/adminsignup");
    };

    const handleStoreButtonClick = () => {
        window.location.href = "/selectmenu";
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        // 요청 시 낚아채서 해당 함수 실행
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.refetchQueries("principalQuery");
        Toast.fire({
            icon: "success",
            title: "성공적으로 로그아웃 되었습니다.",
        });
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    };

    return (
        <PageLayout>
            <div css={s.layout}>
                {!principalData ? (
                    <>
                        <div css={s.signinBox}>
                            <div css={s.logoBox}>
                                <img src={logo} alt="" />
                            </div>
                            <div css={s.inputInfo}>
                                <input
                                    type="text"
                                    id="id"
                                    name="username"
                                    placeholder="아이디를 입력하세요"
                                    value={username}
                                    onChange={handleOnChangeUsername}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                            <div css={s.inputInfo}>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="비밀번호를 입력하세요"
                                    value={password}
                                    onChange={handleOnChangePassword}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                        <button css={s.loginButton} onClick={handleSigninClick}>
                            로그인
                        </button>
                        <a
                            href={`${getServerAddress()}/oauth2/authorization/kakao`}
                            css={s.loginButton}
                        >
                            <span>카카오</span>
                            로그인
                        </a>
                        <a
                            href={`${getServerAddress()}/oauth2/authorization/naver`}
                            css={s.loginButton}
                        >
                            <span>네이버</span>
                            로그인
                        </a>
                        <button css={s.loginButton} onClick={handleSignupClick}>
                            회원가입
                        </button>
                    </>
                ) : (
                    <>
                        <div css={s.signinBox}>
                            <div css={s.accountInfo}>
                                {principalData.data.tradename}가게{" "}
                                {principalData.data.username}사장님
                            </div>
                            <button
                                css={s.storeButton}
                                onClick={handleStoreButtonClick}
                            >
                                매장관리
                            </button>
                        </div>
                        <button css={s.loginButton} onClick={handleLogoutClick}>
                            로그아웃
                        </button>
                    </>
                )}
            </div>
        </PageLayout>
    );
}

export default AdminAuthPage;