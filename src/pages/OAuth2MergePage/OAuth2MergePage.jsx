/**@jsxImportSource @emotion/react */
import Swal from "sweetalert2";
import { oAuth2MergeRequest } from "../../apis/api/authApi";
import { useInput } from "../../hooks/useInput";
import * as s from "./style";
import { useMutation } from "react-query";
import { useSearchParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";

function OAuth2MergePage(props) {
    const [searchParams] = useSearchParams();
    const [username, handleOnChangeUsername] = useInput();
    const [password, handleOnChangePassword] = useInput();

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

    const oAuth2MergeMutation = useMutation({
        mutationKey: "oAuth2MergeMutation",
        mutationFn: oAuth2MergeRequest,
        onSuccess: (response) => {
            Toast.fire({
                icon: "success",
                title: "계정이 통합되었습니다.",
            });
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        },
        onError: (error) => {
            Toast.fire({
                icon: "error",
                title: error.response.data,
            });
        },
    });

    const handleMergeClick = () => {
        oAuth2MergeMutation.mutate({
            username: username,
            password: password,
            oauth2Name: searchParams.get("name"),
            providerName: searchParams.get("provider"),
        });
    };

    return (
        <PageLayout>
            <div css={s.layout}>
                <div css={s.signinBox}>
                    <h1>계정 통합하기</h1>
                    <div css={s.inputInfo}>
                        <input
                            type="text"
                            id="id"
                            name="username"
                            placeholder="아이디를 입력하세요"
                            value={username}
                            onChange={handleOnChangeUsername}
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
                        />
                    </div>
                </div>
                <button css={s.mergeButton} onClick={handleMergeClick}>
                    통합하기
                </button>
            </div>
        </PageLayout>
    );
}

export default OAuth2MergePage;